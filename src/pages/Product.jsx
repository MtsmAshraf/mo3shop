import { useSelector } from "react-redux"
import styles from "./styles/product.module.css"
import { useParams } from "react-router-dom"
import Breadcrumbs from "../components/hero/Breadcrumbs"
import ProductDisplay from "../components/hero/ProductDisplay"
import ProductsGroup from "../components/hero/ProductsGroup"
import { useEffect } from "react"
import ProductDescription from "../components/hero/ProductDescription"
import Item from "../components/hero/Item"
const Product = () => {
  const allProducts = useSelector((state) => state.allProducts.value)
  const { productId } = useParams()
  const product = allProducts.find((item) => {
    return item.id === parseInt(productId)
  })
  return (
    <div>
        <Breadcrumbs product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <ProductsGroup category={product.category}>
          {allProducts.map((item,index) => {
            if(item.category === product.category){
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
          })}
        </ProductsGroup>
    </div>
  )
}

export default Product
