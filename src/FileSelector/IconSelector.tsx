import { FileUploadSelector } from '@phoenixs/fileupload';

export interface IconSelectorProps {
  value?: string;
  onChange?: (v: string) => void;
}

/**
 * 图标选择器
 * @param props
 * @returns
 */
export const IconSelector = ({ value, onChange }: IconSelectorProps) => {
  const handleChange = (v?: string[]) => onChange && v && onChange(v[0]);
  return (
    <div>
      <FileUploadSelector
        formName="icons"
        text="打开图标库"
        modalTitle="图标库"
        value={value ? [value] : []}
        onChange={handleChange}
      />
    </div>
  );
};
