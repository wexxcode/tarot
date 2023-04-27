import { useImage } from '@/hooks/useImage';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal';

type Card = {
  name: string,
  name_short: string,
  value: string,
  value_int: number,
  suit: string,
  type: string,
  meaning_up: string,
  meaning_rev: string,
  desc: string,
  
}

interface SearchResult {
  page: number;
  per_page: number;
      photos: [{
        id: number;
        width: number;
        height: number;
        url: string;
        photographer: string;
        photographer_url: string;
        photographer_id: number;
        avg_color: string;
        src: {
          original: string;
          large2x: string;
          large: string;
          medium: string;
          small: string;
          portrait: string;
          landscape: string;
          tiny: string;
        };
        liked: boolean;
        alt: string;
        }
    ],
  total_results: number;
  next_page: string;
}

const Card: React.FC<Card> = ({
  name,
  name_short,
  value,
  value_int,
  suit,
  type,
  meaning_up,
  meaning_rev,
  desc,
}) => {
  const [background, setBackground] = useState<SearchResult >()
  const { data: dataImage } = useImage(`https://api.pexels.com/v1/search?query=tarot card ${name}&per_page=1`);
  console.log('data image',dataImage);

  useEffect(()=> {
    setBackground(dataImage);
  }, [dataImage])

  console.log('meu estadoooo', background?.photos[0].src.medium);

  const beforeStyle = {
    content: "''",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${background?.photos[0].src.medium})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const divStyle = {
    height: '500px',
    width: '100%',
    color: 'white',
    zIndex: 1000
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <section style={beforeStyle} className="card p-4 shadow">
      <div style={divStyle}>
        <h4>{name}</h4>
        <h3>{name_short}</h3>
        <span>value: {value}</span>
        <hr />
        <span><b>value_int:</b> {value_int}</span>
        <hr />
        <span><b>suit:</b> {suit}</span>

        <hr />
        <span><b>type:</b> {type}</span>
        <hr />
        <span style={{ overflowY: 'scroll', textOverflow: 'ellipsis', height: '77px'}}><b>meaning_up:</b> {meaning_up}</span>
        <br />
        <br />
        <span style={{ overflowY: 'scroll', textOverflow: 'ellipsis', height: '77px'}}><b>meaning_rev:</b> {meaning_rev}</span>
        <p className='d-none'>desc:  {desc}</p>
        <button onClick={handleOpenModal}>Mais informações</button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Informações adicionais">
        <div style={{color: 'black'}}>
        <h4>{name}</h4>
        <h3>{name_short}</h3>
        <span>value: {value}</span>
        <hr />
        <span><b>value_int:</b> {value_int}</span>
        <hr />
        <span><b>suit:</b> {suit}</span>

        <hr />
        <span><b>type:</b> {type}</span>
        <hr />
        <span><b>meaning_up:</b> {meaning_up}</span>
        <br />
        <br />
        <span><b>meaning_rev:</b> {meaning_rev}</span>
        <p>desc:  {desc}</p>
      </div>
        </Modal>
      </div>
    </section>
  )
}

export default Card;