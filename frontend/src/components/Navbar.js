import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


function BrandExample() {
  return (
    <>
      <Navbar className='navFont' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Green Trip
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;