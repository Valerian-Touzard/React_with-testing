/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./Card";
import CardProps from "./Card.type";

describe('first', () => {
    const cardProps: CardProps = {
        body: "lorem ipsum dolor sit amet",
        title: "maCarte",
        footer: "monFouter",
        buttonLabel: "monBouton"
    };

    it("doit fournir un rendu", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const card = screen.getByText("maCarte");
        expect(card).toBeInTheDocument();
    });

    it("doit afficher un titre dans une section avec class card-title", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const card = document.getElementsByClassName("card-title")[0];
        expect(card.textContent).toBe(cardProps.title);
    });

    it("doit afficher un body dans une section avec class card-body", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByClassName("card-body")[0];
        expect(element.textContent).toBe(cardProps.body);
    });

    it("doit afficher un footer dans une section avec class card-footer", () => {
        render(<Card title={cardProps.title} body={cardProps.body} footer={cardProps.footer}/>);
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element.textContent).toBe(cardProps.footer);
    });

    it("ne doit pas afficher un footer je n\'ais pas de props", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByClassName("card-footer")[0];
        expect(element).toBeUndefined();
    });

    it("doit avoir un bouton label quands j'envoie une props", () => {
        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel}/>);
        const element = screen.getByText(cardProps.buttonLabel as string);
        expect(element).toBeInTheDocument();
    });

    it("ne doit pas afficher un label bouton je n\'ais pas de props", () => {
        render(<Card title={cardProps.title} body={cardProps.body} />);
        const element = document.getElementsByTagName("buttonr")[0];
        expect(element).toBeUndefined();
    });

    it("doit appeller la fonction du bouton lors du click", () => {
        //Fonction espion
        const handleClick = jest.fn();

        render(<Card title={cardProps.title} body={cardProps.body} buttonLabel={cardProps.buttonLabel} 
            buttonAction={handleClick} />);
        const button = document.querySelector('button');
        
        // Clicker sur le bouton
        fireEvent.click(button!)

        // Vérifier que la fonction déclancher par le click est appelé
        expect(handleClick).toHaveBeenCalled();
    });
});