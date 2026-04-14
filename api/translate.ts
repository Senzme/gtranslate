import { translate } from '../src/index.ts';

export default async function handler(req: any, res: any) {
  const { text, to = 'en', from = 'auto' } = req.query as { text?: string; to?: string; from?: string };

  if (!text) {
    return res.status(400).json({ error: 'Missing "text" parameter' });
  }

  try {
    const result = await translate(text, { to, from } as any);
    res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: message });
  }
}
