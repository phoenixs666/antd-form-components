// import { PageData } from '../../../core/interface';
// import { useState } from 'react';
// import style from './index.module.less';
// import { PageSelector } from './PageSelector';
// import {
//   SortableContainer,
//   SortableElement,
//   SortableHandle,
// } from 'react-sortable-hoc';
// import {
//   CloseCircleOutlined,
//   MenuOutlined,
//   PlusCircleOutlined,
// } from '@ant-design/icons';
// import update from 'immutability-helper';

// export interface MultiplePageSelectorProps {
//   value?: PageData[];
//   onChange?: (v?: PageData[]) => void;
// }

// /**
//  * 多页面选择器
//  * @param props
//  * @returns
//  */
// export const MultiplePageSelector = ({
//   value,
//   onChange,
// }: MultiplePageSelectorProps) => {
//   const [pageDatas, setPageDatas] = useState<PageData[]>(value || []);
//   const [addedItem, setAddedItem] = useState<PageData>();
//   const innerValue = value || pageDatas;
//   return (
//     <>
//       <PageList
//         data={innerValue}
//         lockAxis="y"
//         useDragHandle
//         onSortEnd={({ oldIndex, newIndex }) => {
//           const temp = innerValue[oldIndex];
//           const res = update(innerValue, {
//             $splice: [
//               [oldIndex, 1],
//               [newIndex, 0, temp],
//             ],
//           });
//           setPageDatas(res);
//           onChange && onChange(res);
//         }}
//         onItemDelete={(key: string) => {
//           const res = innerValue.filter((page) => page.id !== key);
//           setPageDatas(res);
//           onChange && onChange(res);
//         }}
//         onItemChange={(v, index) => {
//           const res = innerValue.map((page, i) => (i === index ? v : page));
//           setPageDatas(res);
//           onChange && onChange(res);
//         }}
//       />
//       <div className={style.btnAdd}>
//         <div style={{ flex: 1 }}>
//           <PageSelector value={addedItem} onChange={(v) => setAddedItem(v)} />
//         </div>
//         <div
//           style={{ padding: '0 12px 0 0' }}
//           onClick={() => {
//             if (!addedItem) return;
//             const res = [...innerValue, addedItem];
//             setPageDatas(res);
//             onChange && onChange(res);
//             setAddedItem(undefined);
//           }}
//         >
//           <PlusCircleOutlined />
//         </div>
//       </div>
//     </>
//   );
// };

// interface PageListProps {
//   data?: PageData[];
//   onItemDelete?: (key: string) => void;
//   onItemChange?: (v: PageData, index: number) => void;
// }
// const PageList = SortableContainer<PageListProps>(
//   ({ data, onItemDelete, onItemChange }: PageListProps) => {
//     return (
//       <ul>
//         {data?.map((page, index) => (
//           <PageItem
//             key={index}
//             index={index}
//             data={page}
//             onDelete={onItemDelete}
//             onChange={(v) => onItemChange && onItemChange(v, index)}
//           />
//         ))}
//       </ul>
//     );
//   },
// );

// interface PageItemProps {
//   data?: PageData;
//   onDelete?: (key: string) => void;
//   onChange?: (v: PageData) => void;
// }
// const PageItem = SortableElement<PageItemProps>(
//   ({ data, onDelete, onChange }: PageItemProps) => {
//     return (
//       <li className={style.pageItem}>
//         <DragHandler />
//         <div className={style.pageItemContent}>
//           <PageSelector value={data} onChange={onChange} />
//         </div>
//         <div
//           style={{ padding: '4px 12px 4px 0', cursor: 'pointer' }}
//           onClick={() => onDelete && data?.id && onDelete(data.id)}
//         >
//           <CloseCircleOutlined />
//         </div>
//       </li>
//     );
//   },
// );

// const DragHandler = SortableHandle(() => (
//   <div style={{ padding: '4px 0px 4px 12px', cursor: 'pointer' }}>
//     <MenuOutlined />
//   </div>
// ));
