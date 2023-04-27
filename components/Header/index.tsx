import React from 'react';

interface IHeader {
  titulo: string;
  name?: string;
}

const Header: React.FC<IHeader> = ({
  titulo,
  name
}) => {
  return(
    <nav>
      <h2>{titulo}</h2>
    </nav>
  )
}

export default Header;