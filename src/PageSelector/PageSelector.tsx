// import Container from '../../../state';
// import { Select } from '../Select';
// import { PageData } from '../../../core/interface';

// export interface PageSelectorProps {
//   value?: PageData;
//   onChange?: (v: PageData) => void;
// }

// /**
//  * 页面选择器
//  * @param props
//  * @returns
//  */
// export const PageSelector = ({ value, onChange }: PageSelectorProps) => {
//   const shareState = Container.useContainer();
//   const options = shareState.pageDatas.map((page) => ({
//     key: page.id,
//     value: page.id,
//     label: page.name,
//   }));
//   const handleSelect = (v: string) => {
//     const selectedPage = shareState.pageDatas.find((page) => page.id === v);
//     onChange && selectedPage && onChange(selectedPage);
//   };
//   return (
//     <Select<string>
//       value={value?.id}
//       options={options}
//       onChange={handleSelect}
//       placeholder="选择页面"
//     />
//   );
// };
