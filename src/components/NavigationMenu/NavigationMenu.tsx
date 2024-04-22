import { Link } from "react-router-dom";
import "./NavigationMenu.scss";


const NavigationMenu = () => {
  
    return (
        <>
            <nav className="navigationBar">
                <ul>
                    <li className="navigationBar__Logo">BEER PAGE</li>

                    <Link to={"/beers"}><li className="navigationBar__Beerpage">BEERS</li></Link>
                    <Link to={"/"}><li className="navigationBar__Homepage">HOME</li></Link>

                </ul>
            </nav>
        </>
    )
}

export default NavigationMenu;