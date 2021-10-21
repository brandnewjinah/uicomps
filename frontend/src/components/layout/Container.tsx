import React, { FC } from "react";
import styled from "styled-components";

//token
import { breakpoint, neutral, spacing } from "../token";

export interface Props {
  padding?: string;
  open?: boolean;
}

type StyleProps = {
  padding?: string | undefined;
  open?: boolean;
};

export const Main: FC<Props> = ({ children, padding }) => {
  return <MainContainer padding={padding}>{children}</MainContainer>;
};

const MainContainer = styled.main<StyleProps>`
  width: 100%;
  padding: ${(props) => props.padding};

  @media ${breakpoint.minlg} {
    margin-left: 260px;
  }
`;

export const Side: FC<Props> = ({ children, padding, open }) => {
  return <SideContainer open={open}>{children}</SideContainer>;
};

const SideContainer = styled.div<StyleProps>`
  background-color: ${neutral[100]};
  /* display: block; */
  display: ${(props) => (props.open ? "block" : "none")};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  max-height: 100%;
  overflow-y: auto;

  .nav {
    display: flex;
    flex-direction: column;
    padding: ${spacing.xl};
  }

  @media ${breakpoint.minlg} {
    display: block;
    max-width: 260px;

    button {
      display: none;
    }
  }
`;

export const NavItem: FC<Props> = ({ children, padding }) => {
  return <NavItemContainer padding={padding}>{children}</NavItemContainer>;
};

const NavItemContainer = styled.div<StyleProps>`
  width: 100%;
  padding: ${spacing.m} 0;
`;

export const Nav: FC<Props> = ({ children, padding }) => {
  return <NavContainer padding={padding}>{children}</NavContainer>;
};

const NavContainer = styled.nav<StyleProps>`
  width: 100%;
  padding: ${spacing.m} 0;

  @media ${breakpoint.minlg} {
    display: none;
  }
`;
