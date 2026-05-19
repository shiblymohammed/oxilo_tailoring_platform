'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { measurementsApi, settingsApi } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { X, Loader2, Pencil, Plus } from 'lucide-react';
import DrawingCanvas from '@/components/DrawingCanvas';

const schema = z.object({
  label:         z.string().min(1, 'Label is required'),
  garmentTypeId: z.string().min(1, 'Garment Type is required'),
});

type FormData = z.infer<typeof schema>;

export interface MeasurementProfile {
  id: string;
  label: string;
  garmentTypeId: string;
  fields: Record<string, any>;
}

interface Props {
  customerId: string;
  existing?: MeasurementProfile;
  onClose: () => void;
  onSaved: () => void;
}

export function MeasurementModal({ customerId, existing, onClose, onSaved }: Props) {
  const isEdit = !!existing;

  const { data: garmentTypes, isLoading: gtLoading } = useQuery({
    queryKey: ['garment-types'],
    queryFn: settingsApi.garmentTypes,
  });

  const [fieldValues, setFieldValues] = useState<Record<string, string>>(
    existing ? Object.fromEntries(Object.entries(existing.fields).map(([k, v]) => [k, String(v)])) : {}
  );

  const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      label:         existing?.label ?? '',
      garmentTypeId: existing?.garmentTypeId ?? '',
    },
  });

  const selectedGarmentTypeId = watch('garmentTypeId');
  const selectedGarment = garmentTypes?.find((g: any) => g.id === selectedGarmentTypeId);
  const measurementSchema = selectedGarment?.measurementSchema || [];

  // Auto-select first garment type if none selected
  useEffect(() => {
    if (garmentTypes?.length && !selectedGarmentTypeId && !isEdit) {
      setValue('garmentTypeId', garmentTypes[0].id);
    }
  }, [garmentTypes, selectedGarmentTypeId, isEdit, setValue]);

  const onSubmit = async (data: FormData) => {
    try {
      if (isEdit && existing) {
        await measurementsApi.update(existing.id, {
          label: data.label,
          garmentTypeId: data.garmentTypeId,
          fields: fieldValues,
        });
        toast.success('Measurements updated!');
      } else {
        await measurementsApi.create(customerId, {
          label: data.label,
          garmentTypeId: data.garmentTypeId,
          fields: fieldValues,
        });
        toast.success('Measurements saved!');
      }
      onSaved();
    } catch {
      toast.error('Failed to save measurements');
    }
  };

  const renderField = (field: any) => {
    if (field.type === 'TEXT') {
      return (
        <div key={field.name}>
          <label className="text-xs text-slate-400 capitalize mb-1 block">{field.name}</label>
          <input
            type="text"
            inputMode="decimal"
            value={fieldValues[field.name] ?? ''}
            onChange={(e) => setFieldValues(prev => ({ ...prev, [field.name]: e.target.value }))}
            className="input py-2 text-sm"
            placeholder="—"
          />
        </div>
      );
    }

    if (field.type === 'SELECT' || field.type === 'DROPDOWN') {
      const selectedOption = (field.options || []).find((opt: any) => opt.label === fieldValues[field.name]);
      const showCanvas = field.type === 'DROPDOWN' && selectedOption?.allowDrawing;
      const drawingKey = `${field.name}_drawing`;

      return (
        <div key={field.name} className={showCanvas ? "col-span-full" : ""}>
          <label className="text-xs text-slate-400 capitalize mb-1 block">{field.name}</label>
          <select
            value={fieldValues[field.name] ?? ''}
            onChange={(e) => setFieldValues(prev => ({ ...prev, [field.name]: e.target.value }))}
            className="input py-2 text-sm bg-[#1e293b] w-full"
          >
            <option value="">Select {field.name}</option>
            {(field.options || []).map((opt: any, i: number) => (
              <option key={i} value={opt.label}>{opt.label}</option>
            ))}
          </select>
          
          {showCanvas && (
             <div className="mt-3">
               <label className="text-xs text-sky-400 font-medium mb-1 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></div>
                 Custom Design for {fieldValues[field.name]}
               </label>
               <DrawingCanvas 
                 value={fieldValues[drawingKey]} 
                 onChange={(val) => setFieldValues(prev => ({ ...prev, [drawingKey]: val }))} 
               />
             </div>
          )}
        </div>
      );
    }

    if (field.type === 'GROUP') {
      return (
        <div key={field.name} className="col-span-full border border-slate-700/60 rounded-xl p-4 bg-[#0f172a]/40 mt-3 shadow-inner">
          <h3 className="text-sm font-semibold text-sky-400 mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
            {field.name}
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {(field.subFields || []).map((sub: any, i: number) => {
              const key = `${field.name}_${sub.name}`;
              return (
                <div key={i}>
                  <label className="text-xs text-slate-400 capitalize mb-1.5 block">{sub.name}</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={fieldValues[key] ?? ''}
                    onChange={(e) => setFieldValues(prev => ({ ...prev, [key]: e.target.value }))}
                    className="input py-2 text-sm"
                    placeholder="—"
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#1e293b] border border-slate-700 rounded-t-2xl sm:rounded-2xl w-full max-w-xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-[#1e293b] z-10">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            {isEdit ? <Pencil className="w-4 h-4 text-sky-400" /> : <Plus className="w-4 h-4 text-sky-400" />}
            {isEdit ? 'Edit Measurements' : 'Add Measurements'}
          </h2>
          <button onClick={onClose} className="btn-ghost p-1.5 rounded-lg text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-5 flex-1">
          <form id="measurement-form" onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Top Configuration */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Garment Type</label>
                {gtLoading ? (
                  <div className="h-10 flex items-center justify-center border border-slate-700 rounded-lg">
                    <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                  </div>
                ) : (
                  <select {...register('garmentTypeId')} className="input h-10 bg-[#0f172a]">
                    {garmentTypes?.map((g: any) => (
                      <option key={g.id} value={g.id}>{g.name}</option>
                    ))}
                  </select>
                )}
                {errors.garmentTypeId && <p className="text-red-400 text-xs mt-1">{String(errors.garmentTypeId.message)}</p>}
              </div>

              <div>
                <label className="label">Profile Label</label>
                <input
                  {...register('label')}
                  className="input h-10"
                  placeholder="e.g. Wedding Fit"
                />
                {errors.label && <p className="text-red-400 text-xs mt-1">{String(errors.label.message)}</p>}
              </div>
            </div>

            {/* Dynamic Grid */}
            <div>
              <label className="label mb-3 block border-b border-slate-700 pb-2">
                Measurement Details
              </label>
              
              {measurementSchema.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm bg-slate-800/30 rounded-lg border border-dashed border-slate-700">
                  No fields configured for this garment type.<br/>
                  <span className="text-xs">Go to Settings to configure its measurement schema.</span>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {measurementSchema.map(renderField)}
                </div>
              )}
            </div>

            {isEdit && (
              <p className="text-xs text-slate-500 bg-slate-800/50 rounded-lg p-3 text-center">
                📝 Previous values are saved in measurement history automatically.
              </p>
            )}
          </form>
        </div>

        {/* Sticky Footer */}
        <div className="p-4 border-t border-slate-700 bg-[#1e293b] flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="btn-ghost flex-1 py-3"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="measurement-form"
            disabled={isSubmitting || gtLoading}
            className="btn-primary flex-[2] flex items-center justify-center gap-2 py-3 shadow-xl shadow-sky-500/20"
          >
            {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            {isSubmitting ? 'Saving...' : isEdit ? 'Update Profile' : 'Save Profile'}
          </button>
        </div>
      </div>
    </div>
  );
}
