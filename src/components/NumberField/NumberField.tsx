import React, { FC, useState } from "react";

import * as Element from "./styles";

interface Props {
  value: string;
  onChange: (value) => void;
}

const NumberField: FC<Props> = (props) => {
  const { value, onChange } = props;
  const pattern = /^[0-9]*$/;

  return (
    <Element.FormControl className="position-relative">
      <Element.InputForm
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder=""
        value={value}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value === "" || pattern?.test(e.target.value)) {
            onChange(e.target.value);
          }
        }}
      />
      <Element.ControlBtn
        className="btn position-absolute discount-btn"
        onClick={() => {
          if (parseInt(value) > 0) {
            onChange((parseInt(value) - 1).toString());
          }
        }}
      >
        <Element.ArrowDownIcon />
      </Element.ControlBtn>
      <Element.ControlBtn
        onClick={() => {
          if (parseInt(value) >= 0) {
            onChange((parseInt(value) + 1).toString());
          } else {
            onChange("1");
          }
        }}
        className="btn position-absolute add-btn"
      >
        <Element.ArrowUpIcon />
      </Element.ControlBtn>
    </Element.FormControl>
  );
};

export default NumberField;
