// jest.mock('@emailjs/browser', () => ({
//     send: jest.fn(() => Promise.resolve({ status: 200, text: "OK" })),
//     init: jest.fn(),
// }));

import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import { act } from "react";

test('check home page', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', {name: /home/i});
    expect(headerElement).toBeInTheDocument();
});

test('check about page', () => {
    render(<App/>);
    userEvent.click(screen.getAllByRole('button', {name: /about/i})[0]);
    const headerElement = screen.getByRole('heading', {name: /about/i});
    expect(headerElement).toBeInTheDocument();
});

test('check projects page', () => {
    render(<App/>);
    userEvent.click(screen.getAllByRole('button', {name: /projects/i})[0]);
    const headerElement = screen.getByRole('heading', {name: /projects/i});
    expect(headerElement).toBeInTheDocument();
});

test('check contacts page', () => {
    render(<App/>);
    userEvent.click(screen.getAllByRole('button', {name: /contact/i})[0]);
    const headerElement = screen.getByRole('heading', {name: /contact/i});
    expect(headerElement).toBeInTheDocument();
});

test('send contact email', async () => {
    // await act(async () => {
    //     render(<App />);
    // });
    render(<App/>);
    //Switch to Contact Page
    await userEvent.click(screen.getAllByRole('button', {name: /contact/i})[0]);

    //Input Contact Information
    const nameInput = screen.getByLabelText(/name/i);
    // nameInput.value = 'John Doe';
    // fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    await userEvent.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');

    const emailInput = screen.getByLabelText(/email/i);
    // emailInput.value = 'johndoe@email.com';
    // fireEvent.change(emailInput, { target: { value: 'johndoe@email.com' } });
    await userEvent.type(emailInput, 'johndoe@email.com');
    expect(emailInput).toHaveValue('johndoe@email.com');

    const messageInput = screen.getByLabelText(/message/i);
    messageInput.value = 'John Doe would like to hire you!';
    fireEvent.change(messageInput, { target: { value: 'John Doe would like to hire you!' } });
    // await userEvent.type(messageInput, 'John Doe would like to hire you!');
    expect(messageInput).toHaveValue('John Doe would like to hire you!');
    const submitInput = screen.getByDisplayValue(/send email/i);
    //Test should pass as all input data is correct.
    await userEvent.click(submitInput);
    await act(async () => {
        await userEvent.click(submitInput);
    });
    // const message = await screen.findByText(/your email has been successfully sent!/i, {}, { timeout: 2000 });
    // expect(message).toBeInTheDocument();
});