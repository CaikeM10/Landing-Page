import React, { useState } from "react";
import styles from "./styles.module.scss";

const ModalForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    instagram: "",
    site: "",
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

    const payload = {
      name,
      email,
      phone,
      budget,
      instagram,
      site,
    };

    try {
      const response = await fetch(
        "https://webhookn8n.maistickets.com.br/webhook/rd-station",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Formulário enviado com sucesso!");
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
          <input
            type="text"
            name="budget"
            placeholder="Orçamento (opicional)"
            value={formData.budget}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="instagram"
            placeholder="Instagram (opicional)"
            value={formData.instagram}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="site"
            placeholder="Site (opicional)"
            value={formData.site}
            onChange={handleInputChange}
          />
          <button type="submit">RECEBER ORÇAMENTO GRÁTIS</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
