import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Cart from './pages/Cart';
import BookDetails from './pages/BookDetails'; 
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/books/:id" element={<BookDetails />} />
                    <Route path="/books/title/:title" element={<BookDetails />} />
                    <Route path="/cart" element={
                        <ProtectedRoute>
                            <Cart />
                        </ProtectedRoute>
                    } />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
