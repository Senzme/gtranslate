import { translate } from '../src/index.js';

export default async function handler(req, res) {
  const { text, to = 'en', from = 'auto' } = req.query;

  if (!text) {
    return res.status(400).json({ error: 'Missing "text" parameter' });
  }

  try {
    const result = await translate(text, { to, from });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
