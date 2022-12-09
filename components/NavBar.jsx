import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Navbar.Brand className='navbar_font' href="#home">
            <img
              alt="Logo My Green Trip"
              src="img/logo.png"
              width="40"
              height="50"
              className="d-inline-block"
            />{' '}
            My Green Trip
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;