import styles from "./Hero.module.css"
import hand_img from "../../Assests/imgs/waving-hand.png"
import female_kid from "../../Assests/imgs/female-kid.png"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "./Button"
const Hero = (props) => {
  return (
    <div className={styles.hero}>
        {props.children}
    </div>
  )
}

export default Hero
