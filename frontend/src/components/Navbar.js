import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { SidebarData } from './SideBarData';
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

      <div className="sidebar">
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li 
                        key={key}
                        className="row"
                        id={window.location.pathname == val.link ? "active" : ""}
                        onClick={()=>{
                            window.location.pathname=val.link
                        }}>
                            <div id="title">
                                {val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
  );
}

export default BrandExample;