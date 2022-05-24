import { valueType } from 'antd/lib/statistic/utils';
import { useState } from 'react';
import style from './index.module.less';
import InputNumber, { InputNumberProps } from './InputNumber';

interface InputLengthProps extends Omit<InputNumberProps, 'value' | 'onChange'> {
  value?: valueType;
  onChange?: (v?: valueType) => void;
}

const unit = 'px';

/**
 * 尺寸数字输入
 * @param props
 * @returns
 */
const InputLength = ({ value, onChange, ...restProps }: InputLengthProps) => {
  const [val, setVal] = useState<valueType>();
  const handleChange = (v: valueType) => {
    setVal(v);
  };
  const handleBlur = () => {
    if (val === undefined || val === null) onChange && onChange(undefined);
    else onChange && onChange(val.toString() + unit);
  };
  const handleStep = (v: valueType) => {
    setVal(v);
    onChange && onChange(v.toString() + unit);
  };

  return (
    <div className={style.inputLength}>
      <div className={style.lengthNumber}>
        <InputNumber
          {...restProps}
          value={convertStrToNum(value)}
          onChange={handleChange}
          onBlur={handleBlur}
          onStep={handleStep}
        />
      </div>
      <div className={style.lengthUnit}>px</div>
    </div>
  );
};

function convertStrToNum(str?: string | number) {
  if (!str) return undefined;
  return parseFloat(String(str).replace('px', '').replace('%', ''));
}

export default InputLength;
