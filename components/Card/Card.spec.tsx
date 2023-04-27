import React from 'react'
import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
  it('should render Card component', () => {
    const textMock = {
        name: 'Two of Wands',
        name_short: 'swac', 
        value: 'knight', 
        value_int: 1, 
        suit: 'swords',
        type: 'minor',
        meaning_up: 'Gain, riches; family matters, archives, extraction, the abode of a family.',
        meaning_rev: 'Desire, cupidity, envy, jealousy, illusion',
        desc: "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place."
    }

    render(
      <Card 
        name={textMock.name}
        name_short={textMock.name_short} 
        value={textMock.value} 
        value_int={textMock.value_int}
        suit={textMock.suit}
        type={textMock.type}
        meaning_up={textMock.meaning_up}
        meaning_rev={textMock.meaning_rev}
        desc={textMock.desc}
      />
    );

    const nameELement = screen.getByText(/Two of Wand*/);
    expect(nameELement).toBeInTheDocument();
    
    const descElement = screen.getByText(/A youth and maiden are pledging one another, and*/);
    expect(descElement).toBeInTheDocument();
  })
})