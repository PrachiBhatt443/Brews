import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Link, Routes, Route } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useStateValue } from '../../context/StateProvider';
import { actionType } from '../../context/reducer';
import { app } from '../../firebase.config';
import { MdShoppingBasket } from "react-icons/md";
import CartContainer from '../CartContainer';

function Navbar() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const login = async () => {
    try {
      if (!user) {
        const {
          user: { refreshToken, providerData },
        } = await signInWithPopup(firebaseAuth, provider);
        dispatch({
          type: actionType.SET_USER,
          user: providerData[0],
        });
        localStorage.setItem("user", JSON.stringify(providerData[0]));
        setError(null);
      } else {
        localStorage.clear();
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
      }
    } catch (error) {
      if (error.code === 'auth/popup-closed-by-user') {
        setError('Authentication popup was closed. Please try again.');
      } else {
        setError('An error occurred during authentication. Please try again.');
      }
      console.error('Authentication error:', error);
    }
  };

  const toggleCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.nav} ${isScrolled || location.pathname !== '/' ? styles.expanded : styles.default}`}>
      <div className={styles.logo}>BREWS</div>
      <ul className={styles.navList}>
        <Link to="/" className={styles.nav_items}>HOME</Link>
        <Link to="/menu" className={styles.nav_items}>MENU</Link>
        <Link to="/about" className={styles.nav_items}>ABOUT US</Link>
        <Link to="/facilities" className={styles.nav_items}>FACILITIES</Link>
      </ul>
      <Routes>
        {/* Define your routes here */}
        {/* <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/facilities" element={<Facilities />} /> */}
      </Routes>
      <div className={styles.basket}>
        {user && (
          <MdShoppingBasket style={{ fontSize: '32px' }} onClick={toggleCart} />
        )}
        {cartShow && <CartContainer />}
        <button className={styles.red} onClick={login}>
          {user ? 'Log Out' : 'Sign In'}
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}

export default Navbar;
