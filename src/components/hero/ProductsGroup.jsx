import styles from "./products-group.module.css"
const ProductsGroup = ({from, category , children}) => {
  return (
    <div className={styles.ProductsGroup}>
        <h3>POPULAR IN {category ? category.toUpperCase() : "this month"}</h3>
        <div className={styles.group}>
            {children}
        </div>
    </div>
  )
}

export default ProductsGroup
