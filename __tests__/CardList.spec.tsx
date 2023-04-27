import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import CardList from '@/pages/CardList';
import { useFetch } from '../hooks/useFetch';

jest.mock('../hooks/useFetch');

const mockUseFetch = useFetch as jest.MockedFunction<typeof useFetch>;

const mockData = {
    "nhits": 10,
    "cards": [
        {
            "name": "Page of Swords",
            "name_short": "swpa",
            "value": "page",
            "value_int": 11,
            "suit": "swords",
            "type": "minor",
            "meaning_up": "Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
            "meaning_rev": "More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.",
            "desc": "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment."
        }
    ]
}

describe('CardList', () => {
  it('CardList component renderiza com dados undefined', async () => {
    mockUseFetch.mockReturnValue({ data: undefined, error: null });
    render(<CardList />);

    await waitFor(() => {
      expect(screen.queryByText('Carregando... Esperando a resposta do universo')).toBeInTheDocument()
    })
  });

  it('CardList component renderiza com dados validos', async () => {

    mockUseFetch.mockReturnValue({ data: mockData , error: null });
    render(<CardList />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 4, name: 'Page of Swords' })).toBeInTheDocument()
    })
  });
})