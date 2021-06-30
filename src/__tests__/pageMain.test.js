
import { render, fireEvent, screen } from '@testing-library/react'  
import MainPage from '../Pages/MainPage'; 
import { BrowserRouter as Router } from 'react-router-dom'; 


function testReposeState(container, line, card) {
    expect(container).toHaveAttribute('aria-expanded', "false");
    expect(line).toHaveAttribute('aria-hidden', "false");
    expect(line).not.toHaveClass('hide');
    expect(card).toHaveAttribute('aria-hidden', "true");
    expect(card).toHaveClass('hide'); 
}

function testOnMouseEnter(container, line, card) { 
    expect(container).toHaveAttribute('aria-expanded', "true");
    expect(line).toHaveAttribute('aria-hidden', "true");
    expect(line).toHaveClass('hide');
    expect(card).toHaveAttribute('aria-hidden', "false");
    expect(card).not.toHaveClass('hide'); 
}
 

test('MainPage: expose components on mouse over & hide/show lines anim', async () => {

    render(
        <Router>
            <MainPage
            />
        </Router>
    );


    const mainContaners = screen.getAllByLabelText("container"); 
  
    const RMContainer = mainContaners[0];
    expect(RMContainer).toHaveTextContent("RoadMap");
    const RMLine = RMContainer.children[0];
    const RMCard = RMContainer.children[2]; 

    const PFContainer = mainContaners[1];
    expect(PFContainer).toHaveTextContent("Portfolio" ); 
    const PFLine = PFContainer.children[0];
    const PFCard = PFContainer.children[2]; 

    const aboutContainer = mainContaners[2];
    expect(aboutContainer).toHaveTextContent("Sobre mi");  
    const aboutLine = aboutContainer.children[0];
    const aboutCard = aboutContainer.children[2]; 
  

    testReposeState(RMContainer, RMLine, RMCard);
    fireEvent.mouseEnter(RMContainer);  
    testOnMouseEnter(RMContainer, RMLine, RMCard);
    fireEvent.mouseLeave(RMContainer);
    testReposeState(RMContainer, RMLine, RMCard);
   
    testReposeState(PFContainer, PFLine, PFCard);
    fireEvent.mouseEnter(PFContainer);  
    testOnMouseEnter(PFContainer, PFLine, PFCard);
    fireEvent.mouseLeave(PFContainer);
    testReposeState(PFContainer, PFLine, PFCard);

    testReposeState(aboutContainer, aboutLine, aboutCard);
    fireEvent.mouseEnter(aboutContainer);  
    testOnMouseEnter(aboutContainer, aboutLine, aboutCard);
    fireEvent.mouseLeave(aboutContainer);
    testReposeState(aboutContainer, aboutLine, aboutCard);  

})
