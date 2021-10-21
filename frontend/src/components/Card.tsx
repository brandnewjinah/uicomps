import React, { FC } from "react";
import styled from "styled-components";

//import token
import { spacing } from "./token";

export interface Props {
  padding?: string;
  margin?: string;
  size?: "full" | "half";
}

type StyleProps = {
  padding?: string | undefined;
  margin?: string | undefined;
  size?: string | undefined;
};

export const LoginCard: FC<Props> = ({ children, padding, size }) => {
  return <LoginBox>{children}</LoginBox>;
};

const LoginBox = styled.article<StyleProps>`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  background-color: #fff;
  padding: ${spacing.xxl};
`;
