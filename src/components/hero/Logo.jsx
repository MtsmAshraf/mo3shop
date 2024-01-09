import { Link } from 'react-router-dom'
import styles from "./logo.module.css"
const Logo = ({inverted}) => {
  return (
    <div>
        <Link to="/" className={inverted ? styles.logo + " " + styles.inverted : styles.logo }>
            <p>Mo3</p>
            <span>Shop</span>
        </Link>
    </div>
  )
}

export default Logo
