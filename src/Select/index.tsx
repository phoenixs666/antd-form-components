import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';
import { SelectValue } from 'antd/lib/select';
import style from './index.module.less';

export interface SelectProps<T> extends AntdSelectProps<T> {}

/**
 * 下拉框组件
 * @param props
 * @returns
 */
export function Select<T extends SelectValue>(props: SelectProps<T>) {
  const { ...restProps } = props;
  return (
    <div className={style.select}>
      <AntdSelect<T> {...restProps} />
    </div>
  );
}
