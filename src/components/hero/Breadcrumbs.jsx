import { Link } from "react-router-dom"
import styles from "./breadcrumbs.module.css"
const Breadcrumbs = ({product}) => {
  return (
    <div className={styles.breadcrumbs}>
        <Link to='/'>Home </Link>
        >
        <Link to={"/" + product.category}> {product.category} </Link>
        >
        <span> {product.name}</span>
    </div>
  )
}

export default Breadcrumbs
