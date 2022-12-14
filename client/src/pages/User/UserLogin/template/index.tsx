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

const UserLoginTemplate = () => {
  const initialValue = { inputUserId: '', inputPassword: '' };

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
  ];
  return (
    <PublicContainer>
      <UI.Container>
        <PageHeader>{TITLE.LOGIN}</PageHeader>
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
              {TITLE.LOGIN}
            </Button>
            <Button styletype="link" size="link" to={URL.HOME}>
              {TITLE.HOME}
            </Button>
          </FormFooter>
        </Form>
      </UI.Container>
    </PublicContainer>
  );
};

export default UserLoginTemplate;
