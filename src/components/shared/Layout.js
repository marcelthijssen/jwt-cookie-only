import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Layout = ({children}) => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to="/">HEADER: JWT HTTP-Only Cookie</Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar>
            <Container>{children}</Container>
        </>
    );
};


export default Layout;