import { Link } from "react-router-dom"
import styles from "./Button.module.css"

const Button = (props) => {
  return (
    <Link to={props.to} className={props.inverted ? styles.Button + " " + styles.inverted : styles.Button }>
        {props.children}
    </Link>
  )
}

export default Button;
