import React from "react";
import * as Element from "./styles";

interface Props {
  image: string;
  title: string;
  handleClick: () => void;
}

const Item: React.FC<Props> = ({ image, title, handleClick }) => {
  return (
    <div className="col-6 mt-2">
      <Element.ConnectItem
        href="#"
        className="d-flex flex-column align-items-center justify-content-between"
        onClick={handleClick}
      >
        <img src={image} alt="" width={42} />
        <Element.ConnectItemName className="mt-2">
          {title}
        </Element.ConnectItemName>
      </Element.ConnectItem>
    </div>
  );
};

export default Item;
