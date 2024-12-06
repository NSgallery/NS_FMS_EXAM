import './Header.css';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header(){
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Nav className='text-menu-header'>Navbar</Nav>
                <Link to="/home" className='text-menu'>Home</Link>
                <Link to="/login" className='text-menu'>Login</Link>
                <Link to="/register" className='text-menu'>Register</Link>
            </Navbar>
        </div>

    ); 
}

export default Header;