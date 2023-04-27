import Card from "@/components/Card"
import { useFetch } from "@/hooks/useFetch"
import { useImage } from "@/hooks/useImage"

type CardType = {
  name: string,
  name_short: string,
  value: string,
  value_int: number,
  suit: string,
  type: string,
  meaning_up: string,
  meaning_rev: string,
  desc: string
}

interface ICard {
  nhits: number,
  cards: CardType[]
}

const CardLIst: React.FC = () => {
  const { data } = useFetch<ICard>('https://tarot-api.onrender.com/api/v1/cards/random?n=10');

  if(!data) {
    return<p>Carregando... Esperando a resposta do universo</p>
  }

  return(
    <ul className="d-flex flex-wrap">
      { data.cards.map(card => (
          <li className="w-25 m-2" key={Math.random()}>
            <Card
              name={card.name}
              name_short={card.name_short}
              value={card.value}
              value_int={card.value_int}
              suit={card.suit}
              type={card.type}
              meaning_up={card.meaning_up}
              meaning_rev={card.meaning_rev}
              desc={card.desc}
            />
          </li>
        ))
      }
    </ul>)
}

export default CardLIst;