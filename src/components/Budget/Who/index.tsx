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
                        <img src="/" alt="three" />
                        <img src="/
                            " alt="one" />
                    </div>
                    <div className={styles.text}>
                        <h3>sobre</h3>
                        <h2>
                            quem é <span>Caike Marinho</span>
                        </h2>
                        <p>
                            Caike Marinho é um jovem empreendedor e acadêmico  de Análise e Desenvolvimento de Sistemas.   Desde cedo, ele sempre teve
                            curiosidade por aprender coisas novas em 2022 conheceu a programação, tecnologia e inovação, o que o levou a criar sua própria empresa de Desenvolvimento Web.
                        </p>
                        <p>
                            Foi lá que ele descobriu sua paixão pela criação de
                            Sites, Landing Pages e Sistemas e decidiu investir nesse ramo. Com muita
                            dedicação e esforço, Caike junto com os seus amigos em 2025 fundaram a empresa CodeCrat para impulsionar negócios online.
                        </p>
                        <p>
                            Obtendo RESULTADOS REAIS, desde então ele tem se dedicado a ajudar empresas a
                            crescerem online, oferecendo soluções personalizadas e de alta qualidade. 
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
