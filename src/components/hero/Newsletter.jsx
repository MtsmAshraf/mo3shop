import Button from './Button'
import styles from './newsletter.module.css'
const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
        <h1>Get Exclusive Offers On Your Email</h1>
        <span>Subscribe to our newsletter and stay updated</span>
        <form>
            <input type='email' placeholder='Your Email'/>
            <Button to="/men" inverted={true}>Subscribe</Button>
        </form>
    </div>
  )
}

export default Newsletter
