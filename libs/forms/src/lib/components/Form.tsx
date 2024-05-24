
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form';
import { TFormFields } from '../types/form-fields.type';
import { TFormLayout } from '../types/form-layout.type';
import { TControlRenderer } from '../types/control-renderer.type';
import { getErrorMessage } from '../functions/get-error-message.function';

export function Form<TFormData>({ config, layout, value, controlRenderer, onSubmit, headerRenderer }: { config: TFormFields<TFormData>, layout: TFormLayout<TFormData>, value?: TFormData, controlRenderer?: TControlRenderer, headerRenderer?: TControlRenderer, onSubmit: (value: TFormData, form?: UseFormReturn<FieldValues>) => any }) {

    const form = useForm({ mode: "onChange", values: value as any });

    function onSubmitProxy(value: TFormData) {
        onSubmit(value, form);
    }

    return (
        <div className='flex flex-col justify-center items-stretch w-full'>
            <form className='flex flex-col justify-center gap-4 items-stretch'
                onSubmit={form.handleSubmit(onSubmitProxy as any)}>

                {headerRenderer && headerRenderer(form.formState)}

                <>{layout.map((row, rowNumber) =>
                    <div key={rowNumber} className='flex flex-row justify-between items-start gap-12'>
                        {row.map((name: any, index: number) => {
                            if (typeof name === 'function') {
                                return name();
                            }
                            const fieldOptions = config[name as keyof TFormData];
                            const { label, type, validators, options, disabled } = fieldOptions;
                            return <div className='flex-1' key={name as string}>
                                {(() => {
                                    const id = `${name}-${index}-${Date.now()}`;
                                    switch (type) {
                                        case 'select':
                                            return <select disabled={disabled} className={`grow w-full focus:outline-none placeholder-slate text-sm py-5 px-4 border border-solid border-light-gray ${disabled ? 'cursor-not-allowed' : 'cursor-default'}`} placeholder={label} {...form.register(name, { ...validators })}>
                                                {(options || []).map((option, optionIndex) => <option value={option.value} key={`${name}-${optionIndex}`}>{option.display}</option>)}
                                            </select>
                                        case 'checkbox':
                                            return <div className='flex flex-row justify-start items-center w-full '>
                                                <input disabled={disabled} id={id} className={`focus:outline-none placeholder-slate text-sm py-5 px-4 border border-solid border-light-gray ${disabled ? 'cursor-not-allowed' : 'cursor-default'}`} placeholder={label} type='checkbox' {...form.register(name, { ...validators })} />
                                                <label className='px-4 text-sm' htmlFor={id}>{label}</label>
                                            </div>
                                        default:
                                            return <>
                                                <input disabled={disabled} className={`grow w-full focus:outline-none placeholder-slate text-sm py-5 px-4 border border-solid border-light-gray ${disabled ? 'cursor-not-allowed' : 'cursor-default'}`} placeholder={label} type={type} {...form.register(name, { ...validators })} />
                                            </>
                                    }
                                })()}
                                <div className='text-xs text-error p-1 h-[1.5rem]'>{form.formState.errors[name] ? <span>{getErrorMessage((form.formState.errors[name] as any), validators)}</span> : ' '}</div>
                            </div>
                        })}
                    </div>
                )}</>

                {controlRenderer && controlRenderer(form.formState)}
            </form>
        </div>
    );
}
