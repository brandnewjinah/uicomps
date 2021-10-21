import React, { FC } from "react";
import styled from "styled-components";

export interface Props {
  padding?: string;
  open?: boolean;
  className?: string;
}

type StyleProps = {
  padding?: string | undefined;
  open?: boolean;
};

const Wrapper: FC<Props> = ({ children, padding }) => {
  return <WrapperContainer padding={padding}>{children}</WrapperContainer>;
};

const WrapperContainer = styled.div<StyleProps>`
  width: 100%;
  height: 100%;

  .flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center {
    text-align: center;
  }
`;

export default Wrapper;
