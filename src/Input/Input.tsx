import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import style from './index.module.less';

export interface InputProps extends AntdInputProps {}

/**
 * 表单组件 - 输入框
 * @param props
 * @returns
 */
const Input = ({ style: styleProps, ...restProps }: InputProps) => {
  return (
    <div className={style.input} style={styleProps}>
      <AntdInput autoComplete="off" {...restProps} />
    </div>
  );
};

export default Input;
