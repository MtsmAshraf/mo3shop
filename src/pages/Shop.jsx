import Hero from '../components/hero/Hero'
import ProductsGroup from '../components/hero/ProductsGroup'
import styles from "./styles/shop.module.css"
import hand_img from "../Assests/imgs/waving-hand.png"
import female_kid from "../Assests/imgs/female-kid.png"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from '../components/hero/Button'

import data from "../Assests/data"
import newCollections from "../Assests/new_collections"
import Item from '../components/hero/Item'
import Newsletter from '../components/hero/Newsletter'


const Shop = () => {
  return (
    <div className={styles.shop}>
        <Hero className={styles.hero}>
          <div className={styles.left}>
          <span>NEW ARRIVAL ONLY</span>
          <div>
              <p>new</p>
              <img src={hand_img} alt="Hand-Pic" />
          </div>
          <p>collections</p>
          <p className={styles.lastP}>for everyone</p>
          <Button to="/men">
              <span>Latest collection</span>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
          </Button>
          </div>
          <div className={styles.right}>
              <img src={female_kid} alt="female-kid-Pic" />
          </div>
        </Hero>
        <ProductsGroup category="women" from="data">
          {
            data.map((item, index) => {
                return (
                    <Item 
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        oldPrice={item.old_price}
                        newPrice={item.new_price}
                    />
                )
            })
          }
        </ProductsGroup>
        <Hero>
          <div className={styles.left}>
            <p>Exculsive</p>
            <p>Offers for you</p>
            <span className={styles.lastP}>ONLY ON BEST SELLER PRODUCTS</span>
            <Button to="/men">
                <span>Check Now</span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right"/>
            </Button>
          </div>
          <div className={styles.right}>
            <img src={female_kid} alt="female-kid-Pic" />
          </div>
        </Hero>
        <ProductsGroup category="women" from="data">
          {
            newCollections.map((item, index) => {
                return (
                    <Item 
                        key={index}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        oldPrice={item.old_price}
                        newPrice={item.new_price}
                    />
                )
            })
          }
        </ProductsGroup>
        <Newsletter></Newsletter>
    </div>
  )
}

export default Shop
