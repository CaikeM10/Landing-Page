import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name } = formData;

    if (!name) {
      alert("Por favor, preencha seu nome antes de enviar!");
      return;
    }

    const message = `Olá! Meu nome é ${name} e gostaria de solicitar um orçamento para meu site.`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/88999172635?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.content}>
        <div className={styles.close}>
          <Image
            src="/XSquare.svg"
            alt="fechar"
            width={24}
            height={24}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className={styles.backgroundImage}></div>

        <div className={styles.text}>
          <h3>
            Peça agora um <span>orçamento</span> grátis
          </h3>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={formData.name}
            onChange={handleInputChange}
          />
          <button type="submit">FALAR NO WHATSAPP</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
