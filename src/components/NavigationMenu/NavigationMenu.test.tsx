import { render, screen } from "@testing-library/react";
import NavigationMenu from "./NavigationMenu";
import { BrowserRouter } from "react-router-dom";

it("should see if the home text is appearing on the screen", async () => {
    
    render(<BrowserRouter><NavigationMenu /></BrowserRouter>);

    const button = screen.getByText(/HOME/i)

    expect(button).toBeInTheDocument();

});

it("should see if the beer text is appearing on the screen", async () => {
    
    render(<BrowserRouter><NavigationMenu /></BrowserRouter>);

    const button = screen.getByText(/BEERS/i)

    expect(button).toBeInTheDocument();

});