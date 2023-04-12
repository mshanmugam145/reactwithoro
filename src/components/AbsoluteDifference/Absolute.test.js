import { render, screen, fireEvent } from '@testing-library/react';
import AbsoluteDifferencePage from './index';

describe('AbsoluteDifferencePage', () => {
  test('renders input and validate button', () => {
    render(<AbsoluteDifferencePage />);
    const inputElement = screen.getByRole('textbox');
    const validateButton = screen.getByRole('button', { name: 'Validate' });
    expect(inputElement).toBeInTheDocument();
    expect(validateButton).toBeInTheDocument();
  });

  test('adds valid input to the list', () => {
    render(<AbsoluteDifferencePage />);
    const inputElement = screen.getByRole('textbox');
    const validateButton = screen.getByRole('button', { name: 'Validate' });
    fireEvent.change(inputElement, { target: { value: '1,2,3,4' } });
    fireEvent.click(validateButton);
    expect(screen.getByText('1,2,3,4')).toBeInTheDocument();
  });

  test('shows error for invalid input', () => {
    render(<AbsoluteDifferencePage />);
    const inputElement = screen.getByRole('textbox');
    const validateButton = screen.getByRole('button', { name: 'Validate' });
    fireEvent.change(inputElement, { target: { value: '1,2,3' } });
    fireEvent.click(validateButton);
    expect(screen.getByText('Array is not in 2*n')).toBeInTheDocument();
  });

  test('calculates min difference for valid input', () => {
    render(<AbsoluteDifferencePage />);
    const inputElement = screen.getByRole('textbox');
    const validateButton = screen.getByRole('button', { name: 'Validate' });
    fireEvent.change(inputElement, { target: { value: '1,2,3,4' } });
    fireEvent.click(validateButton);
    const calculateButton = screen.getByRole('button', { name: 'Get the min diff' });
    fireEvent.click(calculateButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});
