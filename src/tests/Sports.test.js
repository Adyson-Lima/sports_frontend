import {screen, render} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Sports from '../pages/Sports';

describe('Testes da tela Sports', () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Sports/>
      </BrowserRouter>
    );
  });

  it('Existe card em Sports?', () => {
    expect(screen.getByTestId('mycard')).toBeInTheDocument();
  });

});