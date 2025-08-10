import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

// Configura o transporter do Nodemailer usando as variáveis de ambiente
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465, // <-- Mude a porta para 465
  secure: true, // <-- Mude secure para 'true'
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  try {
    const { name, email, phone, msg_send } = req.body;

    // Salvar os dados no banco de dados usando o Prisma
    const novoOrcamento = await prisma.orcamento.create({
      data: {
        name,
        email,
        phone,
        msg_send,
      },
    });

    // Enviar e-mail de notificação (após salvar no banco)
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Remetente
      to: process.env.EMAIL_USER, // Destinatário (seu próprio e-mail)
      subject: `Novo Pedido de Orçamento de ${name}`,
      html: `
        <p>Olá Caike,</p>
        <p>Um novo pedido de orçamento foi enviado através da sua landing page.</p>
        <p><strong>Detalhes do Contato:</strong></p>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${phone}</li>
          <li><strong>Mensagem:</strong> ${msg_send || 'Nenhuma mensagem adicional.'}</li>
        </ul>
        <p>Atenciosamente,</p>
        <p>Sua Landing Page</p>
      `,
    };

    // Tenta enviar o e-mail
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Erro ao enviar o e-mail:', emailError);
      // O e-mail falhou, mas a gente ainda retorna sucesso para o formulário
      // já que os dados foram salvos no banco.
    }

    // Envia uma resposta de sucesso
    return res.status(200).json({ message: 'Dados salvos e e-mail enviado com sucesso!', data: novoOrcamento });

  } catch (error) {
    console.error('Erro ao salvar no banco de dados:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  } finally {
    await prisma.$disconnect();
  }
}