import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

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

    // Envia uma resposta de sucesso
    return res.status(200).json({ message: 'Dados salvos com sucesso!', data: novoOrcamento });

  } catch (error) {
    console.error('Erro ao salvar no banco de dados:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  } finally {
    await prisma.$disconnect();
  }
}