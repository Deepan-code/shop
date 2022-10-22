import { Container } from 'react-bootstrap';
import { Header } from './components/header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { About, Home, Products, Services } from './components/views';
import { AppRoutes } from './routes/routes';

function App() {
  return (
    <div className="App">


      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path={AppRoutes.home} element={<Home />} />
            <Route exact path={AppRoutes.products} element={<Products />} />
            <Route exact path={AppRoutes.services} element={<Services />} />
            <Route exact path={AppRoutes.about} element={<About />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
