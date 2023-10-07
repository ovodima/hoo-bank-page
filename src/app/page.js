import Bussines from "./Components/Bussines";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Stats from "./Components/Stats";
import Billing from "./components/Billing";
import CTA from "./components/CTA";
import CardDeal from "./components/CardDeal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";




import styles from "./constants/style";



export default function Home() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Bussines />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
