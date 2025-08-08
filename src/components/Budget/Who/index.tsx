import { useState } from 'react';
import ModalForm from '../Modal';
import styles from './styles.module.scss';

export default function Who() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <section className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.images}>
                        <img src="/atualizadoBanner.png" alt="three" />
                        <img src="/saudedigital.jpg" alt="one" />
                    </div>
                    <div className={styles.text}>
                        <h3>sobre</h3>
                        <h2>
                            quem é <span>Caike Marinho</span>
                        </h2>
                        <p>
                            Caike Marinho é um jovem empreendedor e acadêmico de Análise e Desenvolvimento de Sistemas com uma paixão por tecnologia, programação e inovação. Sua jornada no universo digital começou em 2022, quando a curiosidade por aprender coisas novas o levou a fundar sua própria empresa de Desenvolvimento Web.
                        </p>
                        <p>
                          Nesse período, ele descobriu sua vocação para a criação de sites, landing pages e sistemas, e decidiu investir profundamente nesse ramo. Com dedicação e esforço, em 2025, Caike se uniu a amigos para fundar a <strong>CodeCrat</strong>, com a missão de impulsionar negócios online.
                        </p>
                        <p>
                           Desde então, ele tem se dedicado a entregar resultados reais para seus clientes, oferecendo soluções personalizadas e de alta qualidade que ajudam empresas a crescerem no ambiente digital.
                        </p>
                        <button onClick={handleModalOpen}>
                            fazer orçamento     
                        </button>
                    </div>
                </div>
            </section>
            {isModalOpen && <ModalForm onClose={handleModalClose} />}
        </>
    );
}
