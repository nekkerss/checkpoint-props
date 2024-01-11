import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playerslist from './compent/playerslist';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

function App() {
  return (
    <div >
       <Container>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#">my fav players</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
      <Playerslist/>
    </div>
  );
}

export default App;
