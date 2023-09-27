import Container from 'react-bootstrap/Container';
import {Nav , Navbar , NavDropdown} from 'react-bootstrap';
import logo from '../img/logo.png';
import { BrowserRouter as Router,Routes, Route, Link ,Switch} from 'react-router-dom';
import '../css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './Home';
import Contact from './Contact';
import Servise from './Servise';
import Whoarewe from './Whoarewe';
function NavigationBar() {
  return (
    <Router>
      
      <Navbar expand="lg" className="nav" >
      <Container >
        <Navbar.Brand href="#home"><div className="logo">
            <img src={logo} alt=""/>
            <h1> حامينا</h1>
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-btn" >
          <Nav className="me-auto">
          
            <Nav.Link as={Link} to="/">الصفحة الرئيسية</Nav.Link>
            <Nav.Link as={Link} to="/الخدمات">الخدمات</Nav.Link>
            <Nav.Link as={Link} to="/تواصل-معنا">تواصل معنا</Nav.Link>
            <Nav.Link as={Link} to="/من-نحن">من نحن</Nav.Link>

          
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
            <Route path="/" Component={Home} />
            <Route path="/الخدمات" Component={Servise} />
            <Route path="/تواصل-معنا" Component={Contact} />
            <Route path="/من-نحن" Component={Whoarewe} />
            </Routes>
    </Router>

  );
}

export default NavigationBar;