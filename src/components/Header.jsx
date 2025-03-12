import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/instituicoes">Instituições</Nav.Link>
            <Nav.Link href="/outros">Outros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;