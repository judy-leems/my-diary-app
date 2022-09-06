import styled, { css } from 'styled-components';
import { InputText, Label } from '@components/index';

export const InputTextElement = styled(InputText)``;
export const LabelElement = styled(Label)``;

export const Container = styled.div`
  position: relative;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0px;
  }

  ${LabelElement} {
    background: yellow;
  }
  ${InputTextElement} {
    background: red;
  }
  ${LabelElement} + ${InputTextElement} {
    margin-top: 10px;
  }
`;
