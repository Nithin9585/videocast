import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(501).json({ error: 'Google Speech-to-Text is disabled in this project.' });
}
