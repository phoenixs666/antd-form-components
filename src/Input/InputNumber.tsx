import {
  InputNumber as AntdInputNumber,
  InputNumberProps as AntdInputNumberProps,
  Slider,
} from 'antd';
import { valueType } from 'antd/lib/statistic/utils';
import style from './index.module.less';

export interface InputNumberProps extends AntdInputNumberProps {
  range?: Array<number>;
  showSlider?: boolean;
  sliderWidth?: number;
}

/**
 * 数字输入框
 * @param props
 * @returns
 */
const InputNumber = ({
  value,
  range,
  showSlider,
  sliderWidth,
  onChange,
  ...restProps
}: InputNumberProps) => {
  const vNumber = value !== undefined ? convertValueTypeToNumber(value) : value;
  const handleChange = (value: valueType) => {
    if (range?.length === 2 && value) {
      let v = convertValueTypeToNumber(value);
      if (v < range[0]) v = range[0];
      else if (v > range[1]) v = range[1];
      onChange && onChange(v);
    } else onChange && onChange(value);
  };
  const handleSliderChange = (v: number) => onChange && onChange(v);

  return (
    <div className={style.inputNumber}>
      <div className={style.input}>
        <AntdInputNumber value={value} onChange={handleChange} {...restProps} />
      </div>
      {showSlider && range && (
        <div
          className={style.inputNumberSlider}
          style={!!sliderWidth ? { width: sliderWidth } : undefined}
        >
          <Slider
            value={vNumber}
            defaultValue={1}
            onChange={handleSliderChange}
            min={range[0]}
            max={range[1]}
            step={0.01}
          />
        </div>
      )}
    </div>
  );
};

function convertValueTypeToNumber(v: valueType) {
  if (v === undefined) return v;
  else if (v === '') return 0;
  else return parseFloat(v as any);
}

export default InputNumber;
