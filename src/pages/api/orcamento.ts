import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

const prisma = new PrismaClient();

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  try {
    const { name, email, phone, msg_send } = req.body;

    // Salvar os dados no banco de dados
    const novoOrcamento = await prisma.orcamento.create({
      data: {
        name,
        email,
        phone,
        msg_send,
      },
    });

    // Configurar e-mail com SendGrid
    const msg = {
      to: process.env.EMAIL_USER as string,
      from: process.env.EMAIL_FROM as string,
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

    // Tentar enviar o e-mail com SendGrid
    try {
      await sgMail.send(msg);
    } catch (emailError: any) {
      console.error('Erro ao enviar o e-mail:', emailError.response?.body || emailError);
    }

    return res.status(200).json({ message: 'Dados salvos e e-mail enviado com sucesso!', data: novoOrcamento });

  } catch (error) {
    console.error('Erro ao salvar no banco de dados:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  } finally {
    await prisma.$disconnect();
  }
}