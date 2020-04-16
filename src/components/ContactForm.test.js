import React from 'react';
import {render, fireEvent, getByTestId} from '@testing-library/react';
import ContactForm from './ContactForm';

test('form renders', () => {
    render(<ContactForm/>);
})
test('inputs are visible', () => {
 
    const { getByLabelText } = render(<ContactForm />);

    getByLabelText(/First Name*/i); 
    getByLabelText(/Last Name*/i);
    getByLabelText(/Email*/i);
    getByLabelText(/Message/i)
  });
  test('Contact form adds new contact', () => {
    const { getByLabelText, findByTestId } = render(<ContactForm />);
  
    const firstNameInput = getByLabelText(/First Name*/i);
    const lastNameInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);
  
    fireEvent.change(firstNameInput, {
      target: { name: 'firstName', value: 'devo' },
    });
    fireEvent.change(lastNameInput, {
      target: { name: 'lastName', value: 'hall' },
    });
    fireEvent.change(emailInput, {
      target: { name: 'email', value: 'devoughnh@gmail.com' },
    });
    fireEvent.change(messageInput, {
      target: { name: 'message', value: 'message' },
    });
  
    fireEvent.click(document.getElementById('submit'));
  });
  