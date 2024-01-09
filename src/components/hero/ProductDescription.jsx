import styles from "./product-description.module.css"
const ProductDescription = () => {
  return (
    <div className={styles.productDescription}>
        <div className={styles.descriptionHeader}>
            <div>
                <input type="radio" name="description-review" id="description" checked/>
                <label htmlFor="description">Description</label>
            </div>
            <div>
                <input type="radio" name="description-review" id="review"/>
                <label htmlFor="review">Reviews (122)</label>
            </div>
        </div>
        <div className={styles.description}>
            a perfect fusion of comfort and style. Crafted from premium, breathable fabric, this tee provides a relaxed fit for all-day wear. Its timeless design effortlessly pairs with any outfit, making it a wardrobe staple. From casual outings to weekend lounging
        </div>
    </div>
  )
}

export default ProductDescription
