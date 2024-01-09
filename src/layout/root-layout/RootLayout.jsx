import { Link, NavLink, Outlet } from "react-router-dom"
import styles from "./styles/root-layout.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from "../../components/hero/Button"
import Logo from "../../components/hero/Logo"
import { useSelector } from "react-redux"
import allProducts from "../../Assests/all_product"

const RootLayout = () => {
  const cartItems = useSelector((state) => state.cart.value)
  var totalNoOfItems = 0;
  allProducts.map((ele) => {
    if(cartItems[ele.id]){
      totalNoOfItems += cartItems[ele.id];
    }
  })
  
  return (
    <div>
      <header>
        <Logo inverted={true}/>
        <nav>
          <NavLink onClick={() => {console.log(document.querySelector("header a.active"))}} to="/">Shop</NavLink>
          <NavLink onClick={() => {console.log(document.querySelector("header a.active"))}} to="/men">Men</NavLink>
          <NavLink onClick={() => {console.log(document.querySelector("header a.active"))}} to="/women">Women</NavLink>
          <NavLink onClick={() => {console.log(document.querySelector("header a.active"))}} to="/kids">Kids</NavLink>
        </nav>
        <div className={styles.loginNCart}>
          <Button noMargin={true} inverted={true} to="/login">
          <p className={styles.loginIcon} ><FontAwesomeIcon icon="fa-solid fa-right-to-bracket" /></p>
            <span>Login</span>
          </Button>
          <NavLink to="/cart">
            <span className={styles.cartIcon}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <span>{totalNoOfItems}</span>
            </span>
          </NavLink>
        </div>
      </header>
      <Outlet />
      <footer>
        <Logo />
        <div className={styles.otherLinks}>
          <Link to="/">Company</Link>
          <Link to="/">Products</Link>
          <Link to="/">Offices</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
        </div>
        
        <div className={styles.socialLinks}>
          <Link to="/">
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
          </Link>
        </div>
        <div className={styles.copyRights}>
          <p>Copyrights &copy; <a href="https://moatasim-ashraf.netlify.app" target="_blank" rel="noreferrer">Moatasim</a> 2023</p>
        </div>
      </footer>
    </div>
  )
}

export default RootLayout
