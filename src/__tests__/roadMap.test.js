
import { render, fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';

import { RoadMap } from '../Components/RoadMap';
import roadData from '../storage/roadMap.json';
import roadController from '../Classes/roadController'

//mocked class ignore lines animations which is tested in main page.
jest.mock('../Classes/mainController', () => jest.requireActual('../__mocks__/mainController'))


test('RoadMap: expand container, show tree, assert data, restore', async () => {

  render(
    <RoadMap
    />
  );

  const container = screen.getByLabelText("container");
  const RMTree = screen.getByLabelText("tree");

  expect(screen.getByText("RoadMap"));
  expect(RMTree).toHaveAttribute('aria-hidden', "true");
  expect(RMTree).toHaveClass('hide')

  fireEvent.mouseEnter(screen.getByLabelText("container"));

  expect(container).toHaveAttribute('aria-expanded', "true");
  expect(RMTree).toHaveAttribute('aria-hidden', "false");
  expect(RMTree).not.toHaveClass('hide')

  expect(screen.getByText("Ruta de aprendizaje"));

  const cardData = screen.getByLabelText("CardData");
  const date = screen.getByText("Ruta de aprendizaje");
  const icons = screen.getAllByLabelText("icons");

  icons.forEach(element => {
    expect(element).toHaveAttribute('aria-expanded', "false");
    expect(element).not.toHaveClass('Show')
  });

  fireEvent.mouseEnter(cardData);

  icons.forEach(element => {
    expect(element).toHaveAttribute('aria-expanded', "true");
    expect(element).toHaveClass('Show')
  });

  expect(date).toHaveTextContent("Actual");
  expect(screen.getByText("Actual"));

  for (let i = 0; i < icons.length; i++) {
    await act(async () => {
      roadController.setData(i, 0);
    });
    expect(cardData).toHaveTextContent(roadData[i].year);
    expect(cardData).toHaveTextContent(roadData[i].txt);
    expect(cardData).toHaveTextContent(roadData[i].desc[0]);
  }

  fireEvent.mouseLeave(screen.getByLabelText("container"));

  expect(container).toHaveAttribute('aria-expanded', "false");
  expect(RMTree).toHaveAttribute('aria-hidden', "true");
  expect(RMTree).toHaveClass('hide');

  jest.resetModules();

})