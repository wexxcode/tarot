import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';

interface IHeader {
  title: string;
}

const Header: React.FC<IHeader> = ({
  title
}) => {
  const { user } = useContext(AuthContext);
  
  return(
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand mx-auto order-lg-1">{title} - 🚧 Em construção</div>
          {
            user?.name ? <div className="">{user?.name}</div> : ''
          }
        </div>
      </nav>
    </header>
  )
}

export default Header;