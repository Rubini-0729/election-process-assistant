import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Flashcard from '../components/Flashcard';
import '@testing-library/jest-dom';

describe('Flashcard Component', () => {
  const props = {
    frontContent: 'What is a ballot?',
    backContent: 'A document used to cast a vote.'
  };

  test('renders front content initially', () => {
    render(<Flashcard {...props} />);
    expect(screen.getByText(props.frontContent)).toBeInTheDocument();
  });

  test('flips to back content on click', () => {
    render(<Flashcard {...props} />);
    const card = screen.getByRole('button');
    fireEvent.click(card);
    expect(screen.getByText(props.backContent)).toBeInTheDocument();
  });

  test('has correct accessibility attributes', () => {
    render(<Flashcard {...props} />);
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label');
    expect(card).toHaveAttribute('tabIndex', '0');
  });
});
