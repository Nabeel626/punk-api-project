import "./NavigationMenu.scss";


const NavigationMenu = () => {
  
    return (
        <>
            <nav className="navigationBar">
                <ul>
                    <li className="navigationBar__Logo">BEER PAGE</li>
                    <li className="navigationBar__Beerpage">BEERS</li>
                    <li className="navigationBar__Homepage">HOME</li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationMenu;