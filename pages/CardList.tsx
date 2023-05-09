import Card from "@/components/Card"
import { cardsMock } from "data"
import { useEffect, useState } from "react"

const CardLIst: React.FC = () => {
  const [colors, setColors] = useState(['#0c0e1a', '#182239', '#233239', '#364b4b', '#84937d', '#5f7263', '#729677', '#88a759', '#63996e', '#d4d796'])
  const [cards, setCards] = useState(cardsMock);
  
  useEffect(()=>{
    const shuffleColors = colors;
    for (let i = shuffleColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleColors[i], shuffleColors[j]] = [shuffleColors[j], shuffleColors[i]];
    }

    setColors(shuffleColors)
  },[])

  useEffect(()=>{
    const sortCards = cardsMock.sort(() => Math.random() - 0.5);
    setCards(sortCards.slice(0, 10))
  },[])


  if(!cards) {
    return<p>Carregando... Esperando a resposta do universo</p>
  }

  return(
    <div className="d-flex flex-wrap justify-content-center">
      { cards.map((card, index) => (
          <Card
            key={Math.random()}
            title={card.title}
            subtitle={card.subtitle} 
            number={card.number}
            color={card.color}
            image={card.image}
            description={card.description}
            background={colors[index]}
            suit={card.suit}  
            data={card}
          />
        ))
      }
    </div>)
}

export default CardLIst;