import { useState } from 'react';
import ModalForm from '../../Modal';
import styles from './styles.module.scss';

const BannerMobile = () => {
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
                <div className={styles.titleBanner}>
                    <div className={styles.gridBackground}>
                        <button className={styles.orcamento}>
                            • Orçamento Grátis!• 
                        </button>
                        <h1>
                            Crie seu site ideal e veja seu negócio crescer
                            online.
                        </h1>
                        <img src="/line.svg" alt="line" />
                        <p>
                            Um site profissional, rápido e otimizado para atrair
                            mais clientes e aumentar suas vendas.
                        </p>
                        <button
                            className={styles.button}
                            onClick={handleModalOpen}
                        >
                            FAZER ORÇAMENTO GRATUITO
                        </button>
                    </div>
                </div>
            </section>
            {isModalOpen && <ModalForm onClose={handleModalClose} />}
        </>
    );
};

export default BannerMobile;
