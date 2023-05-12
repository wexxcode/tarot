import React from 'react';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({
  title
}) => {
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand mx-auto order-lg-1">{title}</div>
        </div>
      </nav>
    </header>
  )
}

export default Header;