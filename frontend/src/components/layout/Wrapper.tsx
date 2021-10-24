import React, { FC } from "react";
import styled from "styled-components";

//token
import { neutral, spacing } from "../token";

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

  label {
    display: inline-block;
    color: ${neutral[500]};
    font-weight: 600;
    margin-bottom: ${spacing.xxs};
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flexCenter {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center {
    text-align: center;
  }

  .half {
    max-width: 500px;
  }

  .fourhalf {
    flex: 0 0 47.5%;
  }

  .five {
    flex: 0 0 49.5%;
  }
`;

export default Wrapper;
