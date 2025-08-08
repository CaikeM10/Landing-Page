import React, { useState } from "react";
import styles from "./styles.module.scss";
import router from "next/router";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    instagram: "",
    site: "",
    msg_send: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, budget, instagram, site } = formData;

    if (!name || !email || !phone) {
      alert("Por favor, preencha todos os campos antes de enviar!");
      return;
    }

    // O seu código original de formatação de telefone
    const cleanedPhone = phone.replace(/\D/g, "");
    const formattedPhone = cleanedPhone.startsWith("55")
        ? cleanedPhone
        : `55${cleanedPhone}`;

    const msg_send = `Olá ${name}! Você poderia explicar um pouco como seria o seu site?`;

    const payload = {
      name,
      email,
      phone: formattedPhone,
      msg_send,
    };

    try {
      const response = await fetch(
          "/api/orcamento", // <--- AGORA APONTA PARA A SUA NOVA API ROUTE
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
      );

      if (response.ok) {
        router.push("/thankYou");
      } else {
        alert("Erro ao enviar o formulário. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      alert("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className={styles.conatiner}>
      <div className={styles.content}>
        <div className={styles.close}>
          <img src="/XSquare.svg" alt="x" onClick={onClose} />
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
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <button type="submit">RECEBER ORÇAMENTO GRÁTIS</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;