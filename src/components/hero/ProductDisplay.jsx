import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./product-display.module.css"
import { useDispatch } from "react-redux"
import { addToCartG , removeFromCartG } from "../../store/cart/cartSlice"
import Button from "./Button"
const ProductDisplay = ({product}) => {
    const dispatch = useDispatch(); 
  return (
    <div className={styles.productDisplay}>
        <div className={styles.productImgs}>
            <div className={styles.main}><img src={product.image} alt="product-img"/></div>
            <div><img src={product.image} alt="product-img"/></div>
            <div><img src={product.image} alt="product-img"/></div>
            <div><img src={product.image} alt="product-img"/></div>
            <div><img src={product.image} alt="product-img"/></div>
        </div>
        <div className={styles.productDetails}>
            <h2>{product.name}</h2>
            <div className={styles.productRatings}>
                <div className={styles.stars}>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </div>
                <span>(150)</span>
            </div>
            <div className={styles.productPrices}>
                <span className={styles.newPrice}>${product.new_price}</span>
                <span className={styles.oldPrice}>${product.old_price}</span>
            </div>
            <p className={styles.productDescription}>
                a perfect fusion of comfort and style. Crafted from premium, breathable fabric, this tee provides a relaxed fit for all-day wear. Its timeless design effortlessly pairs with any outfit, making it a wardrobe staple. From casual outings to weekend lounging
            </p>
            <span className={styles.sizesLabel}>Select Size</span>
            <div className={styles.ProductSizes}>
                <div>
                    <input type="radio" id="s" name="selected_size" value="s" />
                    <label for="s">S</label>
                </div>
                <div>
                    <input type="radio" id="m" name="selected_size" value="m" />
                    <label for="m">M</label>
                </div>
                <div>
                    <input type="radio" id="l" name="selected_size" value="l" />
                    <label for="l">L</label>
                </div>
                <div>
                    <input type="radio" id="xl" name="selected_size" value="xl" />
                    <label for="xl">XL</label>
                </div>
                <div>
                    <input type="radio" id="xxl" name="selected_size" value="xxl" />
                    <label for="xxl">XXL</label>
                </div>
            </div>
            <button className={styles.addToCart} onClick={() => {dispatch(addToCartG(product.id))}}>ADD TO CART</button>
            <div className={styles.productCategory}><span>Category: </span>{product.category}</div>
            <div className={styles.productTags}><span>Tags: </span>Modern, Fashion, Trendy</div>
            <div className={styles.checkout}>
                <Button to="/cart" inverted={true}>Checkout</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
