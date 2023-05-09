import React, { useEffect, useState, CSSProperties } from 'react';
import { imagens } from 'data';

type TarotCard = {
  title: string;
  subtitle: string;
  number: string;
  color: string;
  description: string;
  image: string;
  suit: string;
};

interface CardType {
  title: string;
  subtitle: string;
  number: string;
  color: string;
  description: string;
  image: string;
  background: string;
  suit: string;
  data: TarotCard;
}

const Card: React.FC<CardType> = ({
  title,
  subtitle,
  number,
  color,
  description,
  image,
  background,
  suit,
  data
}) => {
  const [backgroundCard, setBackgroundCard] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  function imageListComparison(title: string, array: string[]): string | null {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '').replace(/ç/g, "c").replace(/á/g, "a").replace(/ê/g, "e");
    const matches = array.filter(item => {
      const formattedItem = item.replace('.png', '').toLowerCase();
      return formattedItem.includes(formattedTitle);
    });
    return matches.length > 0 ? matches[0] : null;
  }
    
  useEffect(()=> {

    const result = imageListComparison(data.title, imagens)
    if (result !== null) {
      setBackgroundCard(result);
    }
  },[])

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }; 

  const bgStyle: CSSProperties = {
    width: '18rem',
    background: background,
  };

  const beforeStyle: CSSProperties = {
    content: '""',
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${'images/'+backgroundCard})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.4',
    mixBlendMode: 'overlay'
  };

  const changeColor = background === '#d4d796' ? '#0d0828' : 'white'

  const divStyle: CSSProperties = {
    height: '500px',
    color: 'white',
    zIndex: 1000,
    width: 'inherit',
  };
  
  return (
    <section className="card m-3 shadow rounded" style={bgStyle}>
      <div style={beforeStyle} className="shadow-lg shadow-inset"></div>
      <div style={divStyle} className="p-3 p-md-4">
        <header className="d-flex flex-column justify-content-end" style={{height: '75px'}}>
          <span>{suit}</span>
          <h3 className="card-title" style={{color: changeColor}}>{title}</h3>
        </header>
        <hr className="bg-danger" />
        <h5 style={{color: changeColor}}>{subtitle}</h5>
        <p style={{color: changeColor}}>{description}</p>
      </div>
    </section>
  )
}

export default Card;