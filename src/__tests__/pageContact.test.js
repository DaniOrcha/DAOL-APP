
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import Contact from '../Pages/Contact'

import axios from 'axios';
import { Response } from '../Services/dbManager'
import { act } from 'react-dom/test-utils';


 test('getMyData: send mail, response mock show, button dessapear', async () => {

  const axiosSpy = jest.spyOn(axios, 'post');

  render(
    <Contact />
  );

  const button = screen.getByRole('button', { name: 'Mostrar Datos' }); 
  fireEvent.click(button);

  act(() => {
    axiosSpy.mockResolvedValue(Response([{
      myEmail: 'test@mail.com',
      myPhone: '(+33) 123456789'
    }]));
  });

  expect(screen.getByText('test@mail.com')).toBeInTheDocument();
  expect(screen.getByText('(+33) 123456789')).toBeInTheDocument();
  expect(button).not.toBeInTheDocument();

  const NameUser = "User" 
  const nombre = screen.getByLabelText('Nombre');
  const mensaje = screen.getByLabelText('Mensaje');
  const buttone = screen.getByRole('button', { name: 'Enviar' });

  fireEvent.change(nombre, { target: { value: NameUser } });
  fireEvent.change(mensaje, { target: { value: 'mensaje' } });

  expect(nombre.value).toBe(NameUser);
  expect(mensaje.value).toBe('mensaje');

  fireEvent.click(buttone);

  act(() => {
    axiosSpy.mockResolvedValueOnce(Response([NameUser]));
  });

  expect(screen.getByText('Gracias ' + NameUser + ' por su mensaje')).toBeInTheDocument();


})


 
