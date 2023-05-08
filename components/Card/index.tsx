import React, { useEffect, useState, CSSProperties } from 'react';

type TarotCard = {
  title: string;
  subtitle: string;
  number: string;
  color: string;
  description: string;
  image: string;
};

interface CardType {
  title: string;
  subtitle: string;
  number: string;
  color: string;
  description: string;
  image: string;
  background: string;
  data: TarotCard;
}

const Card: React.FC<CardType> = ({
  title,
  subtitle,
  description,
  background,
  data
}) => {
  const [respostaA, setRespostaA] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagens = [
    'aestrela.png',
    'aforca.png',
    'aimperatriz.png',
    'ajustica.png',
    'alua.png',
    'amorte.png',
    'arodadafortuna.png',
    'asdepaus.png',
    'asumasacerdotiza.png',
    'atemperanca.png',
    'atorre.png',
    'cavaleirodepaus.png',
    'cincodepaus.png',
    'dezdepaus.png',
    'doisdepaus.png',
    'novedepaus.png',
    'ocarro.png',
    'odiabo.png',
    'oenforcado.png',
    'oeremita.png',
    'oimperador.png',
    'oitodepaus.png',
    'ojulgamento.png',
    'olouco.png',
    'omago.png',
    'omundo.png',
    'opapa.png',
    'osenamorads.png',
    'osol.png',
    'paginadepaus.png',
    'quatrodepaus.png',
    'rainhadepaus.png',
    'reidepaus.png',
    'seisdepaus.png',
    'setedepaus.png',
    'tresdepaus.png'
  ];

  function resposta(title: string, array: string[]): string | null {
    const formattedTitle = title.replace(/\s+/g, '').toLowerCase();
    const matches = array.filter(item => {
      const formattedItem = item.replace('.png', '').toLowerCase();
      return formattedItem.includes(formattedTitle);
    });
    return matches.length > 0 ? matches[0] : null;
  }
    
  useEffect(()=> {

    const result = resposta(data.title, imagens)
    if (result !== null) {
      setRespostaA(result);
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
    backgroundImage: `url(${'images/'+respostaA})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: '0.4',
    mixBlendMode: 'overlay'
  };

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
          <h3 className="card-title">{title}</h3>
        </header>
        <hr className="bg-danger" />
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </section>
  )
}

export default Card;