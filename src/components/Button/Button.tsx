import React, { FC } from "react";

import * as Element from "./styles";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<Props> = (props) => {
  const { children, onClick, disabled } = props;

  return (
    <Element.ButtonDom disabled={disabled} className="btn" onClick={onClick}>
      {children}
      <Element.RightIcon />
    </Element.ButtonDom>
  );
};

export default Button;
