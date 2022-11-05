import React from "react";
import { Container } from 'react-bootstrap';
import { Header } from './components/header/header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { About, Home, Products, Services } from './components/views';
import { AppRoutes } from './routes/routes';

export const Routing = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Routes>
                    <Route exact path={AppRoutes.home} element={<Home />} />
                    <Route exact path={AppRoutes.products} element={<Products />} />
                    <Route exact path={AppRoutes.services} element={<Services />} />
                    <Route exact path={AppRoutes.about} element={<About/>} />
                </Routes>
            </Container>
        </Router>
    )
}
