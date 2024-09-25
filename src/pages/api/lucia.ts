// pages/api/createUser.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Inicializa o cliente Prisma
const prisma = new PrismaClient();

// Inicializa o middleware CORS
const cors = initMiddleware(
  Cors({
    methods: ["GET", "POST", "OPTIONS"], // Permite apenas esses métodos
    origin: "http://127.0.0.1:5500", // Pode especificar uma URL específica do seu frontend ou deixar '*' para permitir de qualquer origem
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Chama o middleware CORS antes de processar a requisição
  await cors(req, res);

  if (req.method === "POST") {
    const { name, email, phone } = req.body;

    // Verifica se todos os campos estão presentes
    if (!name || !email || !phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Cria um novo usuário no banco de dados
      const user = await prisma.userLucia.create({
        data: {
          name,
          email,
          phone,
        },
      });

      return res.status(201).json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      return res.status(500).json({ error: "Failed to create user" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
