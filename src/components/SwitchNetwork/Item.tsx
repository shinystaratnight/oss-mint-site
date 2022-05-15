import React from 'react';
import * as Element from './styles';

interface Props {
  image: string;
  title: string;
}

const Item: React.FC<Props> = ({image, title}) => {
  return (
    <div className="col-6 mt-2">
      <Element.NetworkItem href="#" className="d-flex flex-column align-items-center">
        <img src={image} alt="" width={42} />
        <Element.NetworkItemName className="mt-2">{title}</Element.NetworkItemName>
      </Element.NetworkItem>
    </div>
  )
}

export default Item;
