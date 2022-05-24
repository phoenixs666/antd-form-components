import { FileUploadSelector } from '@phoenixs/fileupload';

export interface AudioSelectorProps {
  value?: string;
  onChange?: (v: string) => void;
}

export const AudioSelector = ({ value, onChange }: AudioSelectorProps) => {
  const handleChange = (v?: string[]) => onChange && v && onChange(v[0]);
  return (
    <div>
      <FileUploadSelector
        formName="audios"
        text="打开音频库"
        modalTitle="音频库"
        value={value ? [value] : []}
        onChange={handleChange}
      />
    </div>
  );
};
