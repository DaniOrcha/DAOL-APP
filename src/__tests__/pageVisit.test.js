import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Visit from '../Pages/Visits';

import axios from 'axios';

import { Response } from '../Services/dbManager'


test('read postits DDBB add to board, fire click to add new user postit on board', async () => {

    const formName = "User";
    const formMessage = "testing user message";

    const fakePostits = [
        { "DateStamp": "2021-05-22", "NameUser": "Daniel", "TextUser": "Holaa dani" },
        { "DateStamp": "2021-05-23", "NameUser": "Javi", "TextUser": "Holaa javi" },
        { "DateStamp": "2021-05-24", "NameUser": "Laura", "TextUser": "Holaa laura" },
    ];

    const userPostit = [{
        "DateStamp": "2021-05-26", "NameUser": formName, "TextUser": formMessage
    }];


    const axiosSpy = jest.spyOn(axios, 'post');

    render(
        <Visit />
    );

    expect(screen.getByLabelText('postBoard').childElementCount).toBe(1);

    act(() => {

        axiosSpy.mockResolvedValueOnce(Response(fakePostits));
        expect(axiosSpy).toBeCalledWith('http://localhost/dbmanager.php', {
            action: 'readPostits'
        });
        expect(axiosSpy).toHaveBeenCalledTimes(1);
        expect(screen.getByLabelText('postBoard').childElementCount).toBe(1);

    });

    expect(screen.getByLabelText('postBoard').childElementCount).toBe(4);

    const nombre = screen.getByLabelText('Nombre');
    const mensaje = screen.getByLabelText('Mensaje');
    const button = screen.getByRole('button', { name: 'Enviar' });
    
    fireEvent.change(nombre, { target: { value: formName } });
    fireEvent.change(mensaje, { target: { value: formMessage } });
    expect(nombre.value).toBe(formName);
    expect(mensaje.value).toBe(formMessage);

    fireEvent.click(button); //rev

    act(() => {
        axiosSpy.mockResolvedValueOnce(Response(userPostit));
    }); 

    expect(axiosSpy).toBeCalledWith('http://localhost/dbmanager.php', {
        action: "writePostit",
        message: "testing user message",
        name: "User",
    });

    expect(axiosSpy).toHaveBeenCalledTimes(2);

    expect(screen.getByLabelText('postBoard').childElementCount).toBe(5);

    expect(screen.getByText('Daniel')).toBeInTheDocument();
    expect(screen.getByText('Javi')).toBeInTheDocument();
    expect(screen.getByText('Laura')).toBeInTheDocument();
    expect(screen.getByText('User')).toBeInTheDocument();


})