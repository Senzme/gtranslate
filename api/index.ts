import { translate } from '../src/index.js';

const landingPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gtranslate API | Live</title>
    <style>
        :root {
            --primary: #4f46e5;
            --bg: #0f172a;
            --text: #f8fafc;
            --card: #1e293b;
        }
        body {
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
        }
        .container {
            max-width: 600px;
            padding: 2rem;
            background: var(--card);
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            color: #94a3b8;
            line-height: 1.6;
        }
        .code-box {
            background: #000;
            padding: 1rem;
            border-radius: 0.75rem;
            text-align: left;
            margin-top: 2rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.9rem;
            overflow-x: auto;
            border: 1px solid #334155;
        }
        .status {
            display: inline-flex;
            align-items: center;
            padding: 0.25rem 0.75rem;
            background: rgba(34, 197, 94, 0.2);
            color: #4ade80;
            border-radius: 9999px;
            font-size: 0.875rem;
            margin-bottom: 2rem;
        }
        .status::before {
            content: '';
            width: 8px;
            height: 8px;
            background: #22c55e;
            border-radius: 50%;
            margin-right: 8px;
            box-shadow: 0 0 10px #22c55e;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="status">API is Live</div>
        <h1>gtranslate</h1>
        <p>Your free and unlimited translation API is successfully deployed and ready to use.</p>
        
        <div class="code-box">
            <span style="color: #6366f1;">GET</span> /?text=<span style="color: #fbbf24;">Hello</span>&to=<span style="color: #fbbf24;">ru</span>
        </div>
        
        <p style="margin-top: 2rem; font-size: 0.8rem;">Powered by senzme/gtranslate</p>
    </div>
</body>
</html>`;

export default async function handler(req: any, res: any) {
  const { text, to = 'en', from = 'auto' } = req.query as { text?: string; to?: string; from?: string };

  if (!text) {
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(landingPage);
  }

  try {
    const result = await translate(text, { to, from } as any);
    res.status(200).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    res.status(500).json({ error: message });
  }
}
