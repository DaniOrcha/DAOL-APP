 
import React from 'react' 
import { render, fireEvent, screen } from '@testing-library/react' 

import Contact from '../Pages/Contact'
 

test('getMyData', async () => { 

  render(<Contact />);

  const linkElement = screen.getByRole('button', {name:  'Mostrar Datos' });

  fireEvent.click(linkElement);

  await screen.findByText('daniorcha@hotmail.com');
  await screen.findByText('(+34) 675840609');
   
}); 
 

test('send mail as alert message appear and form desappear', async () => {
  
  render(<Contact  />   );   

  window.alert = jest.fn();

  const form = screen.getByLabelText('form');
  const nombre = screen.getByLabelText('Nombre');
  const mensaje = screen.getByLabelText('Mensaje');
  const button = screen.getByRole('button', { name: 'Enviar' });   
 
  fireEvent.change(nombre, { target: { value: 'dani' } });
  fireEvent.change(mensaje, { target: { value: 'mensaje' } });

  expect(nombre.value).toBe('dani');
  expect(mensaje.value).toBe('mensaje'); 
  
  fireEvent.click(button); 
  
  expect(window.alert).toBeCalledWith('Mensaje enviado');
  expect(form).not.toBeInTheDocument();  

})


 
 