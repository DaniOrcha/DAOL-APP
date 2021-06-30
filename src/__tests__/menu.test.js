
import { render, fireEvent, screen } from '@testing-library/react'
import { Menu } from '../Components/menu';
import { BrowserRouter as Router } from 'react-router-dom';


import linksPortfolio from '../storage/portfolio.json';

test('Menu', async () => {

    render(
        <Router>
            <Menu />
        </Router>
    )

    const menu = screen.getByLabelText('menu');
    const panel = screen.getByLabelText('panel');

    fireEvent.mouseEnter(menu);
    expect(panel).toHaveAttribute('aria-expanded', "true"); 

    linksPortfolio.forEach(element => {

        expect(screen.getByText(element.tittle)).toBeInTheDocument();
    });

    fireEvent.mouseLeave(menu); 
    expect(panel).toHaveAttribute('aria-expanded', "false");
 

});