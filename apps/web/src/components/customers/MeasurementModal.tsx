'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { measurementsApi } from '@/lib/api';
import { X, Loader2, Pencil, Plus } from 'lucide-react';

const MEASUREMENT_FIELDS: Record<string, string[]> = {
  SHIRT:    ['chest', 'waist', 'shoulder', 'sleeve', 'collar', 'length'],
  PANT:     ['waist', 'hip', 'inseam', 'thigh', 'knee', 'length'],
  BLAZER:   ['chest', 'waist', 'shoulder', 'sleeve', 'length'],
  SHERWANI: ['chest', 'waist', 'shoulder', 'sleeve', 'length', 'hip'],
  SUIT:     ['chest', 'waist', 'shoulder', 'sleeve', 'length'],
  BLOUSE:   ['chest', 'waist', 'shoulder', 'sleeve', 'length'],
  CHURIDAR: ['waist', 'hip', 'inseam', 'thigh', 'length'],
  FROCK:    ['chest', 'waist', 'hip', 'shoulder', 'length'],
  GOWN:     ['chest', 'waist', 'hip', 'shoulder', 'sleeve', 'length'],
  UNIFORM:  ['chest', 'waist', 'shoulder', 'sleeve', 'length'],
  WEDDING:  ['chest', 'waist', 'hip', 'shoulder', 'sleeve', 'collar', 'length'],
  OTHER:    ['chest', 'waist', 'hip', 'shoulder', 'sleeve', 'length'],
};

const CATEGORIES = Object.keys(MEASUREMENT_FIELDS);

const schema = z.object({
  label:    z.string().min(1, 'Label is required'),
  category: z.string().min(1),
});

type FormData = { label: string; category: string };

/** Existing profile to edit */
export interface MeasurementProfile {
  id: string;
  label: string;
  category: string;
  fields: Record<string, number>;
}

interface Props {
  customerId: string;
  /** Pass an existing profile to enter edit mode */
  existing?: MeasurementProfile;
  onClose: () => void;
  onSaved: () => void;
}

export function MeasurementModal({ customerId, existing, onClose, onSaved }: Props) {
  const isEdit = !!existing;

  const [fieldValues, setFieldValues] = useState<Record<string, string>>(
    existing ? Object.fromEntries(Object.entries(existing.fields).map(([k, v]) => [k, String(v)])) : {},
  );

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      label:    existing?.label    ?? '',
      category: existing?.category ?? 'SHIRT',
    },
  });

  const category = watch('category');
  const fields = MEASUREMENT_FIELDS[category] ?? MEASUREMENT_FIELDS.SHIRT;

  const onSubmit = async (data: FormData) => {
    const parsedFields: Record<string, number> = {};
    for (const f of fields) {
      if (fieldValues[f]) parsedFields[f] = parseFloat(fieldValues[f]);
    }

    try {
      if (isEdit && existing) {
        await measurementsApi.update(existing.id, {
          label: data.label,
          category: data.category,
          fields: parsedFields,
        });
        toast.success('Measurements updated!');
      } else {
        await measurementsApi.create(customerId, {
          label: data.label,
          category: data.category,
          fields: parsedFields,
        });
        toast.success('Measurements saved!');
      }
      onSaved();
    } catch {
      toast.error('Failed to save measurements');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1e293b] border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            {isEdit ? <Pencil className="w-4 h-4 text-sky-400" /> : <Plus className="w-4 h-4 text-sky-400" />}
            {isEdit ? 'Edit Measurements' : 'Add Measurements'}
          </h2>
          <button onClick={onClose} className="btn-ghost p-2 rounded-lg">
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
          {/* Label + Category */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="label">Profile Label</label>
              <input
                {...register('label')}
                className="input"
                placeholder="e.g. Wedding Shirt"
              />
              {errors.label && (
                <p className="text-red-400 text-xs mt-1">{String(errors.label.message)}</p>
              )}
            </div>
            <div>
              <label className="label">Category</label>
              <select {...register('category')} className="input">
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Measurement Fields */}
          <div>
            <label className="label mb-2 block">
              Measurements <span className="text-slate-500 font-normal">(in inches)</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {fields.map((field) => (
                <div key={field}>
                  <label className="text-xs text-slate-400 capitalize mb-1 block">{field}</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.5"
                      min="0"
                      value={fieldValues[field] ?? ''}
                      onChange={(e) =>
                        setFieldValues(prev => ({ ...prev, [field]: e.target.value }))
                      }
                      className="input py-2 text-sm pr-8"
                      placeholder="—"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-600">"</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note for edit mode */}
          {isEdit && (
            <p className="text-xs text-slate-500 bg-slate-800/50 rounded-lg p-2.5">
              📝 Saving will update this profile. Previous values are saved in history.
            </p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="btn-ghost flex-1 py-2.5"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 flex items-center justify-center gap-2 py-2.5"
            >
              {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {isSubmitting ? 'Saving...' : isEdit ? 'Update Measurements' : 'Save Measurements'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
