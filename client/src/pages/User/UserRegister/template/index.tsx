import React, { useState } from 'react';
import { TITLE, ID, PLACEHOLDER } from '@constants/string';
import { URL } from '@constants/url';
import {
  PageHeader,
  PublicContainer,
  Button,
  Form,
  FormItem,
  FormFooter,
} from '@components/index';
import * as UI from './style';

interface valueObject {
  [key: string]: any;
}

const UserRegisterTemplate = () => {
  const initialValue = {
    inputUserId: '',
    inputName: '',
    inputNickName: '',
    inputPassword: '',
    inputPasswordConfirm: '',
    inputPhone: '',
    inputRole: '',
  };

  const [formValues, setFormValues] = useState<valueObject>(initialValue);

  const handleSubmit = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const inputData = [
    {
      htmlFor: ID.INPUT_USERID,
      type: 'text',
      labelTitle: TITLE.USERID,
      id: ID.INPUT_USERID,
      name: ID.INPUT_USERID,
      value: formValues.inputUserId,
      maxLength: undefined,
      autoComplete: 'off',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_USERID,
    },
    {
      htmlFor: ID.INPUT_NAME,
      type: 'text',
      labelTitle: TITLE.NAME,
      id: ID.INPUT_NAME,
      name: ID.INPUT_NAME,
      value: formValues.inputName,
      maxLength: 10,
      autoComplete: 'off',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_NAME,
    },
    {
      htmlFor: ID.INPUT_NICKNAME,
      type: 'text',
      labelTitle: TITLE.NICKNAME,
      id: ID.INPUT_NICKNAME,
      name: ID.INPUT_NICKNAME,
      value: formValues.inputNickName,
      maxLength: 10,
      autoComplete: 'off',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_NICKNAME,
    },
    {
      htmlFor: ID.INPUT_PASSWORD,
      type: 'password',
      labelTitle: TITLE.PASSWORD,
      id: ID.INPUT_PASSWORD,
      name: ID.INPUT_PASSWORD,
      value: formValues.inputPassword,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_PASSWORD,
    },
    {
      htmlFor: ID.INPUT_PASSWORD_CONFIRM,
      type: 'password',
      labelTitle: TITLE.PASSWORD_CONFIRM,
      id: ID.INPUT_PASSWORD_CONFIRM,
      name: ID.INPUT_PASSWORD_CONFIRM,
      value: formValues.inputPasswordConfirm,
      maxLength: 20,
      autoComplete: 'current-password',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_PASSWORD_CONFIRM,
    },
    {
      htmlFor: ID.INPUT_PHONE,
      type: 'text',
      labelTitle: TITLE.PHONE,
      id: ID.INPUT_PHONE,
      name: ID.INPUT_PHONE,
      value: formValues.inputPhone,
      maxLength: 11,
      autoComplete: 'off',
      onChange: handleChange,
      placeholder: PLACEHOLDER.INPUT_PHONE,
    },
  ];
  return (
    <PublicContainer>
      <UI.Container>
        <PageHeader>{TITLE.REGISTER}</PageHeader>
        <Form onSubmit={handleSubmit}>
          {inputData.map((item, index) => {
            return (
              <FormItem key={`${item.id}-${index}`}>
                <UI.LabelElement
                  htmlFor={item.htmlFor}
                  labelTitle={item.labelTitle}
                />
                <UI.InputTextElement
                  type={item.type}
                  id={item.id}
                  name={item.name}
                  value={item.value}
                  maxLength={item.maxLength}
                  autoComplete={item.autoComplete}
                  onChange={item.onChange}
                  placeholder={item.placeholder}
                />
              </FormItem>
            );
          })}
          <FormFooter>
            <Button styletype="primary" size="large" block>
              {TITLE.REGISTER}
            </Button>
            <Button to={URL.HOME}>{TITLE.HOME}</Button>
          </FormFooter>
        </Form>
      </UI.Container>
    </PublicContainer>
  );
};

export default UserRegisterTemplate;
