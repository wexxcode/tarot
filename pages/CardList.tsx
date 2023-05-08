import Card from "@/components/Card"
import { useFetch } from "@/hooks/useFetch"
import { useEffect, useState } from "react"

const cardsMock = [{
      "title": "O Mago",
      "subtitle": "Arcano Maior",
      "number": "I",
      "color": "Vermelho",
      "description": "Representa o poder da manifestação, o domínio da mente e o controle sobre as energias espirituais e físicas.",
      "image": ""
    },
    {
      "title": "A Sacerdotisa",
      "subtitle": "Arcano Maior",
      "number": "II",
      "color": "Azul",
      "description": "Representa o mistério, o conhecimento oculto, a intuição e a conexão com o subconsciente.",
      "image": ""
    },
    {
      "title": "A Imperatriz",
      "subtitle": "Arcano Maior",
      "number": "III",
      "color": "Verde",
      "description": "Representa a fertilidade, a maternidade, a criação, a abundância e o amor.",
      "image": ""
    },
    {
      "title": "O Imperador",
      "subtitle": "Arcano Maior",
      "number": "IV",
      "color": "Dourado",
      "description": "Representa o poder, a autoridade, a estrutura, a estabilidade e a organização.",
      "image": ""
    },
    {
      "title": "O Hierofante",
      "subtitle": "Arcano Maior",
      "number": "V",
      "color": "Azul claro",
      "description": "Representa a tradição, a religião, o ensinamento, a orientação e a sabedoria espiritual.",
      "image": ""
    },
    {
      "title": "Os Enamorados",
      "subtitle": "Arcano Maior",
      "number": "VI",
      "color": "Rosa",
      "description": "Representa o amor, a paixão, o desejo, a escolha e a união.",
      "image": ""
    },
    {
      "title": "O Carro",
      "subtitle": "Arcano Maior",
      "number": "VII",
      "color": "Laranja",
      "description": "Representa a vitória, a superação, a determinação, o controle e o sucesso.",
      "image": ""
    },
    {
      "title": "A Justiça",
      "subtitle": "Arcano Maior",
      "number": "VIII",
      "color": "Roxo",
      "description": "Representa a equidade, a verdade, a integridade, o equilíbrio e a justiça.",
      "image": ""
    },
    {
      "title": "O Eremita",
      "subtitle": "Arcano Maior",
      "number": "IX",
      "color": "Cinza",
      "description": "Representa a solidão, a introspecção, a busca pela verdade, o conhecimento e a sabedoria.",
      "image": ""
    },
    {
      "title": "A Roda da Fortuna",
      "subtitle": "Arcano Maior",
      "number": "X",
      "color": "Amarelo",
      //corrigir
      "description": "Representa a solidão, a introspecção, a busca pela verdade, o conhecimento e a sabedoria.",
      "image": ""
    }
  ]

const CardLIst: React.FC = () => {
  const [colors, setColors] = useState(['#0c0e1a', '#182239', '#233239', '#364b4b', '#84937d', '#5f7263', '#729677', '#88a759', '#63996e', '#d4d796'])

  const data = cardsMock;

  useEffect(()=>{
    const shuffleColors = colors;
    for (let i = shuffleColors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleColors[i], shuffleColors[j]] = [shuffleColors[j], shuffleColors[i]];
    }

    setColors(shuffleColors)
  },[])


  if(!data) {
    return<p>Carregando... Esperando a resposta do universo</p>
  }

  return(
    <div className="d-flex flex-wrap justify-content-center">
      { data.map((data, index) => (
            <Card
              key={Math.random()}
              title={data.title}
              subtitle={data.subtitle}
              number={data.number}
              color={data.color}
              image={data.image}
              description={data.description}
              background={colors[index]}
              data={data}
            />
        ))
      }
    </div>)
}

export default CardLIst;