import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Rendu du composant dans le test bed (conteneur de test)
  render(<App />);
  // l'élément qui contient le textt "learn react" (regexp)
  const linkElement = screen.getByText(/learn react/i);
  // On test que l'élément est présent dans le DOM
  expect(linkElement).toBeInTheDocument();
});
