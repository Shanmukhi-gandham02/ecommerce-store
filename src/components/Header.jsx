import React, {useRef, useEffect} from 'react'

import { NavLink, useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useAuth from '../custom-hooks/useAuth'

import '../styles/header.css'
import logo from '../assets/images/app-logo.jpg'
import userIcon from '../assets/images/user-icon.png'

import {Container, Row} from 'reactstrap'
import { motion } from 'framer-motion'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase.config'
import { toast } from 'react-toastify'

const links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'products',
        display: 'Products'
    },
    {
        path: 'cart',
        display: 'Cart'
    }
]

const Header = () => {

    const {currentUser} = useAuth();

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const profileActionRef = useRef(null);

    const navigate = useNavigate();
    const totalQty = useSelector(state=>state.cart.totalQty);

    const stickyHeader = () =>{
        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ){
                //console.log(headerRef.current.classList, 'class')
                headerRef.current.classList.add('sticky__header')
            }
            else{

                headerRef.current.classList.remove('sticky__header')
                //console.log(headerRef.current.classList, 'classremovedd')
            }
        });
    };

    const logout = () => {
        signOut(auth).then(() => {
            toast.success('Logged out');
            navigate('/home');
        }).catch(error => {
            toast.error(error.message);
        })
    }

    useEffect(()=>{
        stickyHeader();
        return () => window.removeEventListener('scroll', stickyHeader);
    })

    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    const navigateToCart = () => {
        navigate('/cart');
    };
    
    const toggleProfileActions = () => profileActionRef.current.classList.toggle('show__profileActions');

  return (
    <header className="header" ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>ShopNest</h1>
                        </div>
                    </div>

                    <div className="navigation" ref={menuRef} onClick={menuToggle}>
                        <ul className="menu">
                            {links.map((link, index) => (
                                <li className="nav__item" key={index}>
                                <NavLink 
                                    to={link.path} 
                                    className={(navClass) => navClass.isActive ? 'nav__active' : ''} 
                                    >
                                    {link.display}
                                </NavLink>
                            </li>
                            ))

                            }
                        </ul>
                    </div>

                    <div className="nav__icons">
                        <span className="cart__icon" onClick={navigateToCart}>
                            <i className="ri-shopping-bag-line"></i>
                            <span className="badge">{totalQty}</span>
                        </span>
                        
                        <div className='profile' >
                            <motion.img 
                                whileTap={{scale: 1.2}} 
                                src={currentUser ? currentUser.photoURL : userIcon} 
                                alt=""
                                onClick={toggleProfileActions}
                            />

                            <div 
                                className="profile__actions" 
                                ref={profileActionRef} 
                                onClick={toggleProfileActions}
                            >
                                {
                                    currentUser ? <span onClick={logout}>Logout</span> : 
                                    <div className='d-flex align-items-center justify-content-center flex-column'>
                                        <Link to='/signup'>Signup</Link>
                                        <Link to='/login'>Login</Link>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="mobile__menu">
                            <span onClick={menuToggle}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>

                   
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header