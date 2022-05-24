import { Input } from 'antd';
import { TextAreaProps } from 'antd/lib/input';
import style from './index.module.less';

export interface InputTextAreaProps extends TextAreaProps {}

/**
 * 多行文本
 * @param props
 * @returns
 */
const InputTextArea = (props: InputTextAreaProps) => {
  return (
    <div className={style.input}>
      <Input.TextArea {...props} />
    </div>
  );
};

export default InputTextArea;
