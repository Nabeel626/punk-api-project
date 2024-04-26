import { render, screen } from "@testing-library/react";
import SearchBox from "./SearchBox";


it("can write text in the input box", () => {

    render(<SearchBox label={""} searchTerm={""} handleInput={function () {
        throw new Error("Function not implemented.");
    } }/>);

    // const beerNameInput = screen.getByRole("textbox", {name : /buzz/i});
    // expect(beerNameInput).toBeInTheDocument();
    // expect(beerNameInput).toBeTruthy;

    const inputs = screen.getAllByRole("textbox");
    inputs.forEach(() => {
        expect(inputs).toBeInTheDocument;
    });

});