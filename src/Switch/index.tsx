import React from 'react';
import style from './index.module.less';

export interface SelectOption<T = any> {
  label: string;
  value: T;
}

interface SwitchProps<T> {
  options?: SelectOption<T>[];
  width?: number | string;
  value?: T;
  onChange?: (v: T) => void;
  optionRender?: (option: SelectOption<T>, index: number, isActive: boolean) => React.ReactNode;
}

const DefaultSwitchOptions = [
  { label: '否', value: false as any },
  { label: '是', value: true as any },
];

/**
 * 表单组件 - Switch
 * @param props
 * @returns
 */
export function Switch<T>({
  value,
  width,
  options = DefaultSwitchOptions,
  optionRender,
  onChange,
}: SwitchProps<T>) {
  const index =
    value === undefined ? 0 : options.map((option) => option.value).indexOf(value as any);
  const itemWidth = 100 / options.length;

  return (
    <div className={style.switch} style={{ width }}>
      <div
        className={style.slide}
        style={{
          left: index < 1 ? '4px' : itemWidth * index + '%',
          width: `calc(${itemWidth}% - ${8 / options.length}px)`,
        }}
      ></div>
      {options.map((option, i) =>
        !optionRender ? (
          <div
            key={i}
            className={style.item + ' ' + (index === i ? style.itemActive : '')}
            style={{ width: itemWidth + '%' }}
            onClick={() => onChange && onChange(option.value)}
          >
            {option.label}
          </div>
        ) : (
          <div
            style={{ width: itemWidth + '%', zIndex: 1 }}
            onClick={() => onChange && onChange(option.value)}
          >
            {optionRender(option, i, index === i)}
          </div>
        ),
      )}
    </div>
  );
}
