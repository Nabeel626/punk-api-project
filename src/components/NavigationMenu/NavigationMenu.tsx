import { Link } from "react-router-dom";
import "./NavigationMenu.scss";
import { RiBeerFill } from "react-icons/ri";


const NavigationMenu = () => {
  
    return (
        <>
            <nav className="navigationBar">
                <ul>
                    <li className="navigationBar__Logo"><RiBeerFill /> BEER BREWERY <RiBeerFill /> </li>

                    <Link to={"/punk-api-project/beers"}><li className="navigationBar__Beerpage">BEERS</li></Link>
                    <Link to={"/punk-api-project/"}><li className="navigationBar__Homepage">HOME</li></Link>

                </ul>
            </nav>
        </>
    )
}

export default NavigationMenu;