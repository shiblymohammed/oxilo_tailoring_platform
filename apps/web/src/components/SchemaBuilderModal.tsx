'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X, Plus, Trash2, Save } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SchemaBuilderModal({
  isOpen,
  onClose,
  garmentType,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  garmentType: any;
  onSave: (schema: any) => Promise<void>;
}) {
  const [fields, setFields] = useState<any[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isOpen && garmentType) {
      setFields(garmentType.measurementSchema || []);
    }
  }, [isOpen, garmentType]);

  const addField = () => {
    setFields([...fields, { name: '', type: 'TEXT', options: [] }]);
  };

  const updateField = (index: number, key: string, value: any) => {
    const newFields = [...fields];
    newFields[index][key] = value;
    setFields(newFields);
  };

  const removeField = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  const addOption = (fieldIndex: number) => {
    const newFields = [...fields];
    newFields[fieldIndex].options = [...(newFields[fieldIndex].options || []), { label: '', allowDrawing: false, conditionalFields: [] }];
    setFields(newFields);
  };

  const updateOption = (fieldIndex: number, optIndex: number, key: string, value: any) => {
    const newFields = [...fields];
    newFields[fieldIndex].options[optIndex][key] = value;
    setFields(newFields);
  };

  const handleSave = async () => {
    setSaving(true);
    await onSave(fields);
    setSaving(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 z-50">
          <div className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-xl font-bold text-white">
              Configure Fields: {garmentType?.name}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-800">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-6">
            {fields.map((field, idx) => (
              <div key={idx} className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
                <div className="flex gap-3 items-start">
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-3">
                      <input
                        placeholder="Field Name (e.g. Length, Sleeve Type)"
                        value={field.name}
                        onChange={(e) => updateField(idx, 'name', e.target.value)}
                        className="input flex-1 py-1.5 text-sm"
                      />
                      <select
                        value={field.type}
                        onChange={(e) => updateField(idx, 'type', e.target.value)}
                        className="input w-32 py-1.5 text-sm bg-slate-900"
                      >
                        <option value="TEXT">Text/Number</option>
                        <option value="SELECT">Select Options</option>
                        <option value="DROPDOWN">Dropdown</option>
                      </select>
                    </div>

                    {(field.type === 'SELECT' || field.type === 'DROPDOWN') && (
                      <div className="pl-4 border-l-2 border-slate-700 space-y-2 mt-2">
                        <p className="text-xs font-medium text-slate-400">Options:</p>
                        {(field.options || []).map((opt: any, optIdx: number) => (
                          <div key={optIdx} className="flex gap-2 items-center">
                            <input
                              placeholder="Option label (e.g. Double Pocket)"
                              value={opt.label}
                              onChange={(e) => updateOption(idx, optIdx, 'label', e.target.value)}
                              className="input flex-1 py-1 text-sm bg-slate-900/50"
                            />
                            {field.type === 'DROPDOWN' && (
                              <label className="flex items-center gap-1.5 text-xs text-slate-300 whitespace-nowrap cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={opt.allowDrawing || false}
                                  onChange={(e) => updateOption(idx, optIdx, 'allowDrawing', e.target.checked)}
                                  className="w-3.5 h-3.5 rounded bg-slate-900 border-slate-700 text-sky-500 focus:ring-sky-500 focus:ring-offset-slate-900"
                                />
                                Allow Drawing
                              </label>
                            )}
                            <button
                              onClick={() => {
                                const newFields = [...fields];
                                newFields[idx].options.splice(optIdx, 1);
                                setFields(newFields);
                              }}
                              className="text-red-400 hover:text-red-300 p-1"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                        <button
                          onClick={() => addOption(idx)}
                          className="text-xs text-sky-400 flex items-center gap-1 hover:text-sky-300 mt-1"
                        >
                          <Plus className="w-3 h-3" /> Add Option
                        </button>
                      </div>
                    )}
                  </div>
                  <button onClick={() => removeField(idx)} className="text-red-500 hover:text-red-400 p-1.5 bg-red-500/10 rounded">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={addField}
              className="w-full py-3 border border-dashed border-slate-600 rounded-lg text-slate-400 hover:text-white hover:border-slate-400 hover:bg-slate-800/30 flex justify-center items-center gap-2 transition-all text-sm font-medium"
            >
              <Plus className="w-4 h-4" /> Add Field
            </button>
          </div>

          <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-slate-800">
            <button onClick={onClose} className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium">
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="btn-primary px-5 py-2 text-sm flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> {saving ? 'Saving...' : 'Save Schema'}
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
