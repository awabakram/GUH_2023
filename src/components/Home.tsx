import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css"
import Button from "react-bootstrap/Button"
import Carousel from "react-bootstrap/Carousel"
import testImage from "../assets/images/testImage.png"

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className={styles.topBar}>
      <h1 className={styles.title}>Website Name</h1>
      <div className={styles.login}>
        <Button variant="primary" size="lg" onClick={() => navigate('./dashboard')}>
          Login
        </Button>
      </div>
    </div>
    <div className={styles.carousel}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item className={styles.image} interval={7000}>
        <img src={testImage} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img src={testImage} alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={7000}>
        <img src={testImage} alt="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}
