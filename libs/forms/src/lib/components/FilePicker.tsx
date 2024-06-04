import { PropsWithChildren, FC, useRef, useState, ChangeEvent } from 'react';
import { FieldValues, FormState, useForm } from 'react-hook-form';

import '../../index.css';

export type TFilePickerData = { file: File, content: string };
export type TFilePickerWithFilesRenderer = (params: { formState: FormState<FieldValues>, handleReset: () => any, data: TFilePickerData }) => any;
export type TFilePickerWithoutFilesRenderer = (params: { browse: () => any }) => any;

export const FilePicker: FC<PropsWithChildren<{ accept: string, onSubmit: (value: TFilePickerData) => any, className?: string, withFilesRenderer: TFilePickerWithFilesRenderer, controlRenderer: TFilePickerWithoutFilesRenderer }>> = ({ accept, className, controlRenderer, withFilesRenderer, children }) => {
    const form = useForm();
    const ref = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>();
    const [fileString, setFileString] = useState<string>('');
    const { ref: registerRef, onChange, ...inputProps } = form.register('file', { required: true });

    async function handleReset() {
        form.reset();
        setFile(null);
        setFileString('');
    }

    function handleUploadedFile(event: ChangeEvent<HTMLInputElement>) {
        const _file = (event?.target?.files || [])[0];
        if (_file) {
            const reader = new FileReader();

            reader.onerror = (error) => {
                console.warn({ error });
            };

            reader.onload = (e: ProgressEvent<FileReader>) => {
                const fileString: any = e?.target?.result;

                if (fileString) {
                    setFileString(fileString);
                    setFile(_file);
                }
            };

            reader.readAsDataURL(_file);
        }
    }

    function browse() {
        ref.current?.click();
    }

    return <>
        <div className={`${className || ''}`}>
            {file
                ? withFilesRenderer({ data: { file, content: fileString }, handleReset, formState: form.formState })
                : <>
                    {controlRenderer({ browse })}
                    <form>
                        <input accept={accept} onChange={handleUploadedFile} style={{ display: 'none' }} type="file"  {...inputProps} ref={(e) => {
                            registerRef(e);
                            (ref.current as any) = e;
                        }} />
                    </form>
                </>
            }
            {file && children}
        </div >
    </>;
}
