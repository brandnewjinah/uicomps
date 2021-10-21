import React, { ChangeEvent, FC, useState } from "react";
import { useField, ErrorMessage } from "formik";

//import styles and assets
import styled, { css } from "styled-components";
import { Eye, EyeOff } from "../assets/Icons";
import { neutral, spacing, typeScale } from "./token";

export interface Props {
  label?: string;
  name: string;
  value?: string;
  error?: string;
  type?: "text" | "password" | "number";
  placeholder?: string;
  align?: string;
  disabled?: boolean;
  rows?: number;
  handleInput: (text: string) => void;
  handleChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

type StyleProps = {
  align?: string | undefined;
};

export const Input: FC<Props> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [isPassword, setIsPassword] = useState(true);

  return (
    <Wrapper>
      {label && (
        <label htmlFor={field.name} aria-hidden="true">
          {label}
        </label>
      )}

      <Container>
        <InputTag
          className={`${meta.touched && meta.error && "error"}`}
          {...field}
          {...props}
          name={field.name}
          aria-label={field.name}
        />
      </Container>
      <ErrorMessage name={field.name} component="div" className="errorTxt" />
    </Wrapper>
  );
};

const Global = css<StyleProps>`
  width: 100%;
  font-size: 1rem;
  border-radius: ${spacing.xxxs};
  border: 1px solid #d2d2d7;
`;

const Wrapper = styled.div<StyleProps>`
  label {
    display: inline-block;
    color: ${neutral[500]};
    font-weight: 600;
    margin-bottom: ${spacing.xxs};
  }

  .error {
    border-color: #dc3545;
    background-color: rgba(255, 0, 0, 0.05);
  }

  .errorTxt {
    color: red;
    font-size: ${typeScale.helper};
    margin: ${spacing.xs} 0;
  }
`;

const InputTag = styled.input<StyleProps>`
  ${Global}
  /* height: 3rem; */
  padding: ${spacing.xs};
  appearance: none;
  text-align: ${(props) => (props.align === "right" ? "right" : "left")};

  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 125, 250, 0.6);
    border-radius: ${spacing.xxxs};
    outline: none;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 0.925rem;
    color: ${neutral[200]};
  }
`;

const Container = styled.div`
  position: relative;

  .pw {
    position: absolute;
    top: 0.85rem;
    right: 0.75rem;
    display: flex;
    cursor: pointer;
  }
`;
