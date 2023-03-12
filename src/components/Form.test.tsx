import { render, screen } from "@testing-library/react";
import React from "react";

//Jest

test('When input field is blank, new partner can not be add', () => {
    render(<Form />);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
})