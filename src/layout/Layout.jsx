import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <div className="container mt-4">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
