import styled from 'styled-components';
import { InputText, Label } from '@components/index';

export const InputTextElement = styled(InputText)``;
export const LabelElement = styled(Label)``;

export const Container = styled.div`
  & ${LabelElement} + ${InputTextElement} {
    margin-top: 10px;
  }
`;
