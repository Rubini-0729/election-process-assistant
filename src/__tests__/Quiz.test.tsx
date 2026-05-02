import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Quiz from '../components/Quiz';
import '@testing-library/jest-dom';

describe('Quiz Component', () => {
  test('renders the first question', () => {
    render(<Quiz />);
    expect(screen.getByText(/Question 1 of 3/i)).toBeInTheDocument();
    expect(screen.getByText(/What is the primary purpose of a primary election\?/i)).toBeInTheDocument();
  });

  test('advances to next question after selecting an answer', async () => {
    render(<Quiz />);
    const correctOption = screen.getByText(/To choose party candidates for the general election/i);
    
    fireEvent.click(correctOption);
    
    // Wait for the next question to appear (handles the setTimeout)
    await waitFor(() => {
      expect(screen.getByText(/Question 2 of 3/i)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  test('shows final score after all questions', async () => {
    render(<Quiz />);
    
    // Answer Question 1
    fireEvent.click(screen.getByText(/To choose party candidates for the general election/i));
    await waitFor(() => screen.getByText(/Question 2 of 3/i), { timeout: 2000 });

    // Answer Question 2
    fireEvent.click(screen.getByText(/Electors chosen by voters in each state/i));
    await waitFor(() => screen.getByText(/Question 3 of 3/i), { timeout: 2000 });

    // Answer Question 3
    fireEvent.click(screen.getByText(/No, registration is a prerequisite/i));
    
    await waitFor(() => {
      expect(screen.getByText(/Quiz Complete!/i)).toBeInTheDocument();
    }, { timeout: 2000 });
    
    expect(screen.getByText(/You scored/i)).toBeInTheDocument();
  });
});
