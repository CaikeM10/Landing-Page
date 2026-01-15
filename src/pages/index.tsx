import About from "@/components/Budget/About";
import Banner from "@/components/Budget/Banner";
import Footer from "@/components/Budget/Footer";
import HeaderFixed from "@/components/Budget/HeaderFixed";
import Services from "@/components/Budget/Services";
import SwiperComponent from "@/components/Budget/Swiper";
import Who from "@/components/Budget/Who";
import StickFooter from "@/components/Portuguese/StickFooter";
import styles from "@/styles/orcamento.module.scss";

export default function Desafio() {
  const pageTitle = "curso";

  const handleWhatsappFloatingClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "whatsapp_click", {
        event_category: "contato",
        event_label: "floating_button",
        origin: "floating",
      });
    }

    window.open("https://wa.me/5588999172635", "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.container}>
      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <a
        href="https://wa.me/5588999172635"
        className={styles.whatsappButton}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappFloatingClick}
      >
        <img src="/whats2.svg" alt="WhatsApp" />
      </a>

      <HeaderFixed />
      <Banner />
      <About />
      <Who />
      <Services />
      <SwiperComponent />
      <Footer />
      <StickFooter title={pageTitle} buttonText="ENTRAR EM CONTATO" />
    </section>
  );
}
