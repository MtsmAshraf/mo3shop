import { Link } from "react-router-dom"
import styles from "./Item.module.css"
const Item = (props) => {
  return (
    <div className={styles.item} onClick={window.scrollTo(0,0)}>
        <Link to={`/product/${props.id}`}>
            <div className={styles.itemImg}>
                <img src={props.image} lazy alt="item-img"/>
            </div>
            <div className={styles.details}> 
                <p className={styles.itemName}>
                    {props.name.split(" ").slice(0,3).join(" ")}
                </p>
                <p className={styles.itemDescription}>
                    {props.name}
                </p>
                <div className={styles.prices}>
                    <span className={styles.newPrice}>${props.newPrice}</span>
                    <span className={styles.oldPrice}>${props.oldPrice}</span>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Item
