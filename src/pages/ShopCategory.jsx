import { useSelector } from "react-redux"
import styles from "./styles/shop-category.module.css"
import ProductsGroup from "../components/hero/ProductsGroup"
import Item from "../components/hero/Item"
import Button from "../components/hero/Button"
const ShopCategory = ({banner,category}) => {
  const allProducts = useSelector(
    (state) => state.allProducts.value
  )
  console.log(allProducts)
  return (
    <div className={styles.shopCategory}>
        <div className={styles.banner}>
          <img src={banner} alt="banner"/>
        </div>
        <ProductsGroup category={category}>
          {
            allProducts.map((item,index) => {
              if(item.category === category){
                return(
                  <Item 
                          key={index}
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          oldPrice={item.old_price}
                          newPrice={item.new_price}
                      />
                )
              }
            })
          }
        </ProductsGroup>
        <div className={styles.loadMoreBtn}>
          <Button>Load more</Button>
        </div>
          
      </div>
  )
}

export default ShopCategory
