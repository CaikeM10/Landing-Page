import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import Services from "@/components/Budget/Services";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  const pageTitle = "orçamento";

  return (
    <section className={styles.container}>
      <a
        href="https://wa.me/5541999179672"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/whats2.svg" alt="WhatsApp" />
      </a>
      <Banner></Banner>
      <About></About>
      <Who />
      <Services />
      <SwiperComponent />
      <Footer></Footer>
      <StickFooter title={pageTitle} buttonText="ENTRAR EM CONTATO" />
    </section>
  );
}
