import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import Visit from '../Pages/Visits'
import axios from 'axios';


//Page Visit full

test('read postits DDBB add to board, fire click to add new user postit on board', async () => {

    const formName = "User";
    const formMessage = "testing user message";

    const fakePostits = [
        { "DateStamp": "2021-05-22", "NameUser": "Daniel", "TextUser": "Holaa dani" },
        { "DateStamp": "2021-05-23", "NameUser": "Javi", "TextUser": "Holaa javi" },
        { "DateStamp": "2021-05-24", "NameUser": "Laura", "TextUser": "Holaa laura" },
    ];

    const userPostit = {
        "DateStamp": "2021-05-26",
        "NameUser": formName,
        "TextUser": formMessage
    };

    const axiosGetSpy = jest.spyOn(axios, 'post');

    axiosGetSpy.mockResolvedValueOnce({ data: fakePostits });
    axiosGetSpy.mockResolvedValueOnce({ data: userPostit });

    await act(async () => {
        render(<Visit />);
        expect(screen.getByLabelText('postBoard').childElementCount).toBe(1);
    });

    const nombre = screen.getByLabelText('Nombre');
    const mensaje = screen.getByLabelText('Mensaje');
    const button = screen.getByRole('button', { name: 'Enviar' });

    fireEvent.change(nombre, { target: { value: formName } });
    fireEvent.change(mensaje, { target: { value: formMessage } });

    expect(nombre.value).toBe("User");
    expect(mensaje.value).toBe("testing user message");

    const container = screen.getByLabelText('postBoard')

    expect(axiosGetSpy).toBeCalledWith('http://localhost/dbmanager.php', {
        action: 'readDDBB'
    });

    expect(axiosGetSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByLabelText('postBoard').childElementCount).toBe(4);


    await act(async () => {
        fireEvent.click(button);
    });

    expect(axiosGetSpy).toBeCalledWith('http://localhost/dbmanager.php', {
        action: 'writeDDBB',
        nombre: formName,
        mensaje: formMessage
    });

    expect(axiosGetSpy).toHaveBeenCalledTimes(2);
    axiosGetSpy.mockRestore();

    expect(screen.getByLabelText('postBoard').childElementCount).toBe(5);

    await screen.findByText('Daniel');
    await screen.findByText('Javi');
    await screen.findByText('Laura');
    await screen.findByText('User');

})