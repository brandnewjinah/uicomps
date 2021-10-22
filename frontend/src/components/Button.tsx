import React, { FC } from "react";
import styled from "styled-components";

//layout components
import { Article, Div } from "./layout/Container";
import { spacing } from "./token";

export interface Props {
  color?: string;
  fontColor?: string;
  icon?: React.ComponentType;
  label?: string;
  type?: "button" | "submit" | "reset" | undefined;
  shape?: "text" | "outline" | undefined;
  handleClick?: () => void;
}

const Button: FC<Props> = ({
  color,
  fontColor,
  icon,
  label,
  shape,
  type,
  handleClick,
}) => {
  return (
    <Article padding={`${spacing.xxl} 0`} className="flexCenter">
      <ButtonContainer
        color={color}
        fontColor={fontColor}
        type={type}
        shape={shape}
        onClick={handleClick}
      >
        <div className="flexCenter">
          {icon && <Div padding={`0 ${spacing.xs} 0 0`}>{icon}</Div>}
          {label}
        </div>
      </ButtonContainer>
    </Article>
  );
};

const ButtonContainer = styled.button<Props>`
  width: ${(props) => (props.shape === "text" ? null : "100%")};
  font-weight: 600;
  color: ${(props) => (props.fontColor ? props.fontColor : "#fff")};
  background-color: ${(props) =>
    props.shape === "text" || props.shape === "outline"
      ? "transparent"
      : props.color};
  border-style: solid;
  border-color: ${(props) => props.shape === "outline" && props.color};
  border-width: ${(props) => (props.shape === "outline" ? "1px" : 0)};
  border-radius: ${spacing.xxxs};
  padding: ${spacing.s};
  transition: opacity 0.3s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export default Button;
