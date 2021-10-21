import React, { FC } from "react";
import styled from "styled-components";

//import token
import { neutral, spacing } from "./token";

export interface Props {
  primaryColor?: string;
  secondaryColor?: string;
  disabled?: boolean;
  error?: boolean;
  fullwidth?: boolean;
  icon?: boolean;
  label?: string;
  shape?: "pill" | "rounded" | "sharp";
  size?: "small";
  spacing?: string;
  textColor?: string;
  thin?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
}

export const FilledButton: FC<Props> = ({
  children,
  primaryColor,
  secondaryColor,
  disabled,
  error,
  fullwidth,
  icon,
  label,
  size,
  shape,
  spacing,
  type,
  handleClick,
}) => {
  return (
    <FilledContainer
      aria-label={label}
      role="button"
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      size={size}
      shape={shape}
      disabled={disabled}
      fullwidth={fullwidth}
      spacing={spacing}
      type={type}
      onClick={handleClick}
    >
      <Flex>
        {icon && children}
        <p className="spacing">{label}</p>
      </Flex>
    </FilledContainer>
  );
};

const Button = styled.button<Props>`
  font-weight: 600;
  width: ${(props) => (props.fullwidth ? "100%" : null)};
  border-radius: ${(props) =>
    props.shape === "pill"
      ? "2em"
      : props.shape === "rounded"
      ? spacing.xxxs
      : 0};

  padding: ${(props) => (props.size === "small" ? ".25em .5em" : spacing.s)};
  transition: opacity 0.3s ease-out;
  cursor: pointer;

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
  }
`;

const FilledContainer = styled(Button)<Props>`
  font-size: ${(props) => (props.size === "small" ? ".875rem" : "1rem")};
  background-color: ${(props) =>
    props.secondaryColor ? props.secondaryColor : props.primaryColor};
  border: none;
  color: ${(props) => (props.secondaryColor ? props.primaryColor : `#fff`)};
  cursor: pointer;

  .spacing {
    padding: ${(props) => `${props.spacing} 0`};
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background-color: ${neutral[300]};
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.5em;
  }
`;
