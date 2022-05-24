import { FileUploadSelector } from '@phoenixs/fileupload';

export interface VideoSelectorProps {
  value?: string;
  onChange?: (v: string) => void;
}

export const VideoSelector = ({ value, onChange }: VideoSelectorProps) => {
  const handleChange = (v?: string[]) => onChange && v && onChange(v[0]);
  return (
    <div>
      <FileUploadSelector
        formName="videos"
        text="打开视频库"
        modalTitle="视频库"
        value={value ? [value] : []}
        onChange={handleChange}
      />
    </div>
  );
};
