import { useState } from 'react';
import { SketchPicker } from 'react-color';
import style from './index.module.less';

interface ColorPickerProps {
  value?: string;
  defaultValue?: string;
  onChange?: (v: string) => void;
}

const decimalToHex = (alpha: number) => (alpha === 0 ? '00' : Math.round(255 * alpha).toString(16));

/**
 * 颜色选择器
 * @param props
 * @returns
 */
export const ColorPicker = ({ value, defaultValue, onChange }: ColorPickerProps) => {
  const [color, setColor] = useState(defaultValue);
  const [pickerVisible, setPickerVisible] = useState(false);

  return (
    <div className={style.colorPickerWrapper}>
      <div className={style.colorPicker}>
        <div
          className={style.pickerCube}
          style={{ background: value || color }}
          onClick={() => setPickerVisible(true)}
        />
        <div
          style={{
            flex: 1,
            minWidth: 1,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {(value || color)?.toUpperCase() || '默认'}
        </div>
      </div>
      {pickerVisible && (
        <>
          <div
            className={style.cover}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <SketchPicker
              color={value || color}
              onChangeComplete={(v) => {
                let c = v.hex + decimalToHex(v.rgb.a || 0);
                setColor(c);
                onChange && onChange(c);
              }}
            />
          </div>
          <div className={style.overlay} onClick={() => setPickerVisible(false)} />
        </>
      )}
    </div>
  );
};
