import React, { FC } from "react";
import styled from "styled-components";

import { spacing, neutral } from "./token";

interface Props {
  label?: string;
  field?: any;
}

export const Checkbox: FC<Props> = ({ field, label }) => {
  return (
    <Wrapper>
      <Input {...field} type="checkbox" />
      <label htmlFor={field.name} className="container">
        <span>{label}</span>
      </label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;

  + label {
    padding-left: ${spacing.xs};
  }
`;
