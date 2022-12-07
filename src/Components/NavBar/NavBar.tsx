import { NavBarButtonStyled, NavBarFrameStyled } from "./NavBar.styles";
import {Link} from 'react-router-dom';
export default () => {
    return (
        <NavBarFrameStyled data-testid='NavBarFrame'>
            <Link to='/' data-testid='home-button-link-id'>
                <NavBarButtonStyled
                    initial = {{
                        width: '90px',
                        opacity:0
                    }}
                    animate={{
                        opacity:1
                    }}
                    whileHover={{
                        width:'120px'
                    }}
                    whileTap={{
                        width: '90px',
                    }}
                >
                    Home
                </NavBarButtonStyled>
            </Link>
        </NavBarFrameStyled>
    );
}