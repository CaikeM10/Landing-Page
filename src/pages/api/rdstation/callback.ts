// pages/api/rdstation/callback.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Apenas para validação inicial da URL
  res.status(200).json({ message: "Callback ativo e funcionando!" });
}
