
import { render, fireEvent, screen } from '@testing-library/react'

import {
  Card, CardRef, ImgWithDescription, ImgWithLens,
  BlockProyect, BlockProyect2sideAndLens, PostIt, FormMessenger
} from '../Components/cards';

import { BrowserRouter as Router } from 'react-router-dom';


test('Card', async () => {

  const fakeCard = {
    "link": "/Unity",
    "src": "/resources/portfolio/Ico.png",
    "tittle": "Unity",
    "description": "Juegos 2D y 3D"
  };

  render(
    <Router>
      <Card
        {...fakeCard}
      />
    </Router>
  );

  expect(screen.getByText(fakeCard.tittle));
  expect(screen.getByText(fakeCard.description));
  expect(screen.getByRole('img', { src: fakeCard.src }));
  expect(screen.getByRole('link')).toHaveAttribute('href', fakeCard.link);

})




test('CardRef', async () => {

  const fakeCard = {
    "tittle": "Robots Battles",
    "link": "https://play.google.com/store/apps/details?id=com.DAOL.RobotsBattles",
    "src": "../resources/portfolio/Ico.png",
    "description": "3D"
  };

  render(
    <Router>
      <CardRef
        {...fakeCard}
      />
    </Router>
  );

  expect(screen.getByText(fakeCard.tittle));
  expect(screen.getByText(fakeCard.description));
  expect(screen.getByRole('img', { src: fakeCard.src }));
  expect(screen.getByRole('link')).toHaveAttribute('href', fakeCard.link);

})




test('ImgWithDescription', async () => {

  const fakeProyect = {
    "Robot": {
      "title": "Estación de paletizado con Robot Kuka 2400/10:",
      "desc": [
        "Proyecto para una instalación robotizada de selección y paletizado de cajas."
      ],
      "img": {
        "src": "../resources/portfolio/robotkuka.PNG",
        "description": "Croquis estación robotizada"
      }
    }
  };

  const obj = fakeProyect.Robot;

  render(
    <ImgWithDescription
      src={obj.img.src}
      description={obj.img.description}
    />
  );

  expect(screen.getByText(fakeProyect.Robot.img.description));
  expect(screen.getByRole('img', { src: fakeProyect.Robot.img.src }));

})



test('ImgWithLens: create lens, remove ico, remove lens', async () => {

  const fakeImg = {
    "img":
    {
      "src": "../resources/iot/iotWeb.png",
      "id": "iotWeb",
      "class": "image rectangle-vertical"
    }
  };

  render(
    <ImgWithLens
      srcImg={fakeImg.img.src}
      id={fakeImg.img.id}
      class={fakeImg.img.class}
    />
  );

  expect(screen.getByLabelText('lensContainer').childElementCount).toBe(2);
  expect(screen.getByLabelText('ico')).toBeInTheDocument();
  const ico = screen.getByLabelText('ico');

  fireEvent.mouseEnter(screen.getByLabelText("lensContainer"));
  expect(ico).not.toBeInTheDocument();
  expect(screen.getByLabelText('lens')).toBeInTheDocument();
  const lens = screen.getByLabelText('lens');

  fireEvent.mouseLeave(screen.getByLabelText("lensContainer"));
  fireEvent.mouseLeave(screen.getByLabelText("lens"));
  expect(lens).not.toBeInTheDocument();
  expect(screen.getByLabelText('lensContainer').childElementCount).toBe(1);
})



test('BlockProyect', async () => {

  const fakeProyect = {
    "Robot": {
      "title": "Estación de paletizado con Robot Kuka 2400/10:",
      "desc": [
        "Proyecto para una instalación robotizada de selección y paletizado de cajas."
      ],
      "img": {
        "src": "../resources/portfolio/robotkuka.PNG",
        "description": "Croquis estación robotizada"
      }
    }
  };

  const obj = fakeProyect.Robot;

  render(
    <BlockProyect
      {...obj}
    />
  );

  expect(screen.getByText(fakeProyect.Robot.title));
  expect(screen.getByText(fakeProyect.Robot.desc));
  expect(screen.getByRole('img', { src: fakeProyect.Robot.img.src }));
  expect(screen.getByText(fakeProyect.Robot.img.description));
})




test('BlockProyect2sideAndLens', async () => {

  const fakeProyect = {
    "Server": {
      "title": "Servidor Web de Temperatura y Humedad:",
      "desc": [
        "Dispositivo IoT servidor web.",
        "Conectado a internet mediante wifi.",
        "Cuando un cliente Web accede a la IP del dispositivo, éste envía como respuesta un documento HTML incluyendo los datos de temperatura y Humedad obtenidos mediante sensores.",
        "Diseño íntegro. PCB, soldaduras, programación y carcasa en impresión 3D."
      ],
      "imgLef": [
        {
          "src": "../resources/iot/iotWeb.png",
          "id": "iotWeb",
          "class": "image rectangle-vertical"
        }
      ],
      "imgRight": [
        {
          "src": "../resources/electronic/gallery/20.jpg",
          "id": "iot1",
          "class": "image square"
        },
        {
          "src": "../resources/electronic/gallery/21.jpg",
          "id": "iot2",
          "class": "image square"
        }
      ]
    }
  };

  const obj = fakeProyect.Server;

  render(
    <BlockProyect2sideAndLens
      {...obj}
    />
  );

  expect(screen.getByText(fakeProyect.Server.title));

  fakeProyect.Server.desc.forEach(element => {
    expect(screen.getByText(element));
  });

  fakeProyect.Server.imgLef.forEach(element => {
    expect(screen.getByLabelText(element.id));
  });

  fakeProyect.Server.imgRight.forEach(element => {
    expect(screen.getByLabelText(element.id));
  });

})



test('postits', async () => {

  const fakePostits = [
    { "DateStamp": "2021-05-22", "NameUser": "Daniel", "TextUser": "Hola, esto es un mensaje de prueba y tal" },
    { "DateStamp": "2021-05-22", "NameUser": "Carlos", "TextUser": "Holaa soy Carlos" }
  ];
  render(
    <PostIt
      obj={fakePostits}
    />
  );
  await screen.findByText('Daniel', { exact: true });
  await screen.findByText('Holaa soy Carlos', { exact: true });
}) 


test('FormMessenger: throw class Messenger should delete textboxs', async () => {

  render(
    <FormMessenger
      header="Deja tu mensaje: "
      action="only for test form"
    />);

  const form = screen.getByLabelText('form');
  const nombre = screen.getByLabelText('Nombre');
  const mensaje = screen.getByLabelText('Mensaje');
  const button = screen.getByRole('button', { name: 'Enviar' });

  fireEvent.change(nombre, { target: { value: 'user' } });
  fireEvent.change(mensaje, { target: { value: 'test form' } });

  expect(nombre.value).toBe('user');
  expect(mensaje.value).toBe('test form');

  fireEvent.click(button);

  expect(nombre.value).toBe('');
  expect(mensaje.value).toBe('');

})

