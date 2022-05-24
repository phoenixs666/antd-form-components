import { uploadService } from '@phoenixs/fileupload';
import Form from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';
import { ColorPicker, IconSelector, Input, InputLength, InputNumber, Select, Switch } from '../src';

uploadService.basePath = 'https://file.home.com';
uploadService.clientId = 'form-components-demo';
uploadService.token =
  'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRxV0pGbHpvNzBnck5SU2txTU1NbyJ9.eyJpc3MiOiJodHRwczovL2Rldi14a3ZkNnFjdy51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjFjNDY1NTVmNjRkNGEwMDcyYjBhYzBlIiwiYXVkIjpbImh0dHBzOi8vbG9jYWxob3N0IiwiaHR0cHM6Ly9kZXYteGt2ZDZxY3cudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1MzE4ODYyNSwiZXhwIjoxNjU1NzgwNjI1LCJhenAiOiJ6Qnk3OWZ4T1FHRlBWU2xEbEtrWmd6WFV1RWdDb1JRVyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwgY29tbW9uIiwicGVybWlzc2lvbnMiOlsiYWRtaW4iLCJjb21tb24iXX0.dT5fVFDnWkf1xO8ug0pwwlDHLJiaIJZD473hjrV4ur9ZmwacFl_EeS2KRIh_qnY-8C9zbHPaPrHK05b5wEF54sIPzkXRkcgUT_8IMIPHxxq_xUiwBBI_w9q51L8bGqRBVePYNVEZVi7JH8fgj-aXbiRLHoR0-0cRHFPRqYdulvJgoSdLIWp0Njtz8e9KxJNlrjXXW_upr15819Ady3ICtpmqpoSsEMG2edC08sTQQNesCf4YWyoYdt4f_gVz1HiYjdvb7PWRL1ZIPWoChh1Zod2RmLFCr-mh8XjOMlV2ojx1iZjhXEJJYHqMJp6QH0_C6CKfmXQQ6EOr0XYfllVI5w';

export const Demo1 = () => {
  return (
    <>
      <Form>
        <FormItem name="color" label="颜色">
          <ColorPicker />
        </FormItem>
        <FormItem name="input" label="输入文字">
          <Input />
        </FormItem>
        <FormItem name="inputNumber" label="输入数字">
          <InputNumber />
        </FormItem>
        <FormItem name="inputLength" label="输入长度">
          <InputLength />
        </FormItem>
        <FormItem name="select" label="下拉选择">
          <Select
            options={[
              { value: '11', label: '11' },
              { value: '22', label: '22' },
            ]}
          />
        </FormItem>
        <FormItem name="switch" label="滑动选项">
          <Switch />
        </FormItem>
        <FormItem name="icon" label="图标选择">
          <IconSelector />
        </FormItem>
      </Form>
    </>
  );
};
