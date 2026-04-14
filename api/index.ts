import { translate } from '../src/index.js';

const langList = [
    { code: 'auto', name: 'Auto-detect' },
    { code: 'af', name: 'Afrikaans' }, { code: 'sq', name: 'Albanian' }, { code: 'am', name: 'Amharic' }, { code: 'ar', name: 'Arabic' }, { code: 'hy', name: 'Armenian' }, { code: 'az', name: 'Azerbaijani' }, { code: 'eu', name: 'Basque' }, { code: 'be', name: 'Belarusian' }, { code: 'bn', name: 'Bengali' }, { code: 'bs', name: 'Bosnian' }, { code: 'bg', name: 'Bulgarian' }, { code: 'ca', name: 'Catalan' }, { code: 'ceb', name: 'Cebuano' }, { code: 'ny', name: 'Chichewa' }, { code: 'zh-CN', name: 'Chinese (Simplified)' }, { code: 'zh-TW', name: 'Chinese (Traditional)' }, { code: 'co', name: 'Corsican' }, { code: 'hr', name: 'Croatian' }, { code: 'cs', name: 'Czech' }, { code: 'da', name: 'Danish' }, { code: 'nl', name: 'Dutch' }, { code: 'en', name: 'English' }, { code: 'eo', name: 'Esperanto' }, { code: 'et', name: 'Estonian' }, { code: 'tl', name: 'Filipino' }, { code: 'fi', name: 'Finnish' }, { code: 'fr', name: 'French' }, { code: 'fy', name: 'Frisian' }, { code: 'gl', name: 'Galician' }, { code: 'ka', name: 'Georgian' }, { code: 'de', name: 'German' }, { code: 'el', name: 'Greek' }, { code: 'gu', name: 'Gujarati' }, { code: 'ht', name: 'Haitian Creole' }, { code: 'ha', name: 'Hausa' }, { code: 'haw', name: 'Hawaiian' }, { code: 'iw', name: 'Hebrew' }, { code: 'hi', name: 'Hindi' }, { code: 'hmn', name: 'Hmong' }, { code: 'hu', name: 'Hungarian' }, { code: 'is', name: 'Icelandic' }, { code: 'ig', name: 'Igbo' }, { code: 'id', name: 'Indonesian' }, { code: 'ga', name: 'Irish' }, { code: 'it', name: 'Italian' }, { code: 'ja', name: 'Japanese' }, { code: 'jw', name: 'Javanese' }, { code: 'kn', name: 'Kannada' }, { code: 'kk', name: 'Kazakh' }, { code: 'km', name: 'Khmer' }, { code: 'rw', name: 'Kinyarwanda' }, { code: 'ko', name: 'Korean' }, { code: 'ku', name: 'Kurdish (Kurmanji)' }, { code: 'ky', name: 'Kyrgyz' }, { code: 'lo', name: 'Lao' }, { code: 'la', name: 'Latin' }, { code: 'lv', name: 'Latvian' }, { code: 'lt', name: 'Lithuanian' }, { code: 'lb', name: 'Luxembourgish' }, { code: 'mk', name: 'Macedonian' }, { code: 'mg', name: 'Malagasy' }, { code: 'ms', name: 'Malay' }, { code: 'ml', name: 'Malayalam' }, { code: 'mt', name: 'Maltese' }, { code: 'mi', name: 'Maori' }, { code: 'mr', name: 'Marathi' }, { code: 'mn', name: 'Mongolian' }, { code: 'my', name: 'Myanmar (Burmese)' }, { code: 'ne', name: 'Nepali' }, { code: 'no', name: 'Norwegian' }, { code: 'or', name: 'Odia (Oriya)' }, { code: 'ps', name: 'Pashto' }, { code: 'fa', name: 'Persian' }, { code: 'pl', name: 'Polish' }, { code: 'pt', name: 'Portuguese' }, { code: 'pa', name: 'Punjabi' }, { code: 'ro', name: 'Romanian' }, { code: 'ru', name: 'Russian' }, { code: 'sm', name: 'Samoan' }, { code: 'gd', name: 'Scots Gaelic' }, { code: 'sr', name: 'Serbian' }, { code: 'st', name: 'Sesotho' }, { code: 'sn', name: 'Shona' }, { code: 'sd', name: 'Sindhi' }, { code: 'si', name: 'Sinhala' }, { code: 'sk', name: 'Slovak' }, { code: 'sl', name: 'Slovenian' }, { code: 'so', name: 'Somali' }, { code: 'es', name: 'Spanish' }, { code: 'su', name: 'Sundanese' }, { code: 'sw', name: 'Swahili' }, { code: 'sv', name: 'Swedish' }, { code: 'tg', name: 'Tajik' }, { code: 'ta', name: 'Tamil' }, { code: 'tt', name: 'Tatar' }, { code: 'te', name: 'Telugu' }, { code: 'th', name: 'Thai' }, { code: 'tr', name: 'Turkish' }, { code: 'tk', name: 'Turkmen' }, { code: 'uk', name: 'Ukrainian' }, { code: 'ur', name: 'Urdu' }, { code: 'ug', name: 'Uyghur' }, { code: 'uz', name: 'Uzbek' }, { code: 'vi', name: 'Vietnamese' }, { code: 'cy', name: 'Welsh' }, { code: 'xh', name: 'Xhosa' }, { code: 'yi', name: 'Yiddish' }, { code: 'yo', name: 'Yoruba' }, { code: 'zu', name: 'Zulu' }
];

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
        .btn {
            display: inline-block;
            margin-top: 2rem;
            padding: 0.75rem 1.5rem;
            background: var(--primary);
            color: white;
            text-decoration: none;
            border-radius: 0.5rem;
            font-weight: 600;
            transition: opacity 0.2s;
        }
        .btn:hover { opacity: 0.9; }
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
        
        <a href="/gui" class="btn">Open GTranslater GUI</a>
        
        <p style="margin-top: 2rem; font-size: 0.8rem;">Powered by senzme/gtranslate</p>
    </div>
</body>
</html>`;

const guiPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTranslater | Modern GUI</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #4285f4;
            --bg: #f8f9fa;
            --text: #202124;
            --border: #dadce0;
            --shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15);
        }
        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
        }
        header {
            width: 100%;
            padding: 1rem 2rem;
            background: white;
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            box-sizing: border-box;
        }
        header h1 {
            font-size: 1.5rem;
            margin: 0;
            color: #5f6368;
            font-weight: 400;
        }
        header span { color: var(--primary); font-weight: 600; }

        main {
            width: 100%;
            max-width: 1200px;
            padding: 2rem;
            box-sizing: border-box;
        }

        .controls {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
            background: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            border: 1px solid var(--border);
        }

        select {
            padding: 0.5rem;
            border: none;
            background: none;
            font-family: inherit;
            font-size: 1rem;
            cursor: pointer;
            outline: none;
            color: #3c4043;
            max-width: 200px;
        }

        .swap-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s;
        }
        .swap-btn:hover { background: #f1f3f4; }

        .translator-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            height: 350px;
        }

        @media (max-width: 768px) {
            .translator-container { grid-template-columns: 1fr; height: auto; }
            .translator-box { height: 250px; }
        }

        .translator-box {
            background: white;
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: box-shadow 0.2s;
        }
        .translator-box:focus-within { box-shadow: var(--shadow); border-color: transparent; }

        textarea {
            width: 100%;
            height: 100%;
            border: none;
            resize: none;
            font-family: inherit;
            font-size: 1.35rem;
            outline: none;
            color: var(--text);
        }

        .output-box { background: #f1f3f4; }
        .output-text { font-size: 1.35rem; color: var(--text); white-space: pre-wrap; overflow-y: auto; }

        .bottom-actions {
            position: absolute;
            bottom: 0.75rem;
            left: 0.75rem;
            right: 0.75rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .icon-btn {
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            color: #5f6368;
            transition: background 0.2s, color 0.2s, transform 0.2s;
            display: flex;
        }
        .icon-btn:hover { background: #f1f3f4; color: var(--text); }
        .icon-btn.active { 
            color: #d93025; 
            background: #fce8e6; 
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 48, 37, 0.4); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(217, 48, 37, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(217, 48, 37, 0); }
        }

        #char-count { margin-left: auto; font-size: 0.8rem; color: #70757a; }

        .loading-shimmer {
            background: linear-gradient(90deg, #f1f3f4 25%, #e8eaed 50%, #f1f3f4 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
    </style>
</head>
<body>
    <header>
        <h1><span>G</span>Translater</h1>
    </header>

    <main>
        <div class="controls">
            <select id="src-lang"></select>
            <button class="swap-btn" id="swap-langs" title="Swap languages">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z" fill="currentColor"/></svg>
            </button>
            <select id="dest-lang"></select>
        </div>

        <div class="translator-container">
            <div class="translator-box">
                <textarea id="input-text" placeholder="Type to translate..."></textarea>
                <div class="bottom-actions">
                    <button class="icon-btn" id="mic-btn" title="Powerful Voice Input (Continuous)">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="currentColor"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="currentColor"/></svg>
                    </button>
                    <span id="char-count">0 / 5000</span>
                </div>
            </div>
            <div class="translator-box output-box">
                <div id="output-text" class="output-text"></div>
                <div class="bottom-actions">
                    <button class="icon-btn" id="copy-btn" title="Copy translation">
                        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </main>

    <script>
        const langs = \${JSON.stringify(langList)};
        const input = document.getElementById('input-text');
        const output = document.getElementById('output-text');
        const srcSelect = document.getElementById('src-lang');
        const destSelect = document.getElementById('dest-lang');
        const micBtn = document.getElementById('mic-btn');
        const copyBtn = document.getElementById('copy-btn');
        const swapBtn = document.getElementById('swap-langs');
        const charCount = document.getElementById('char-count');

        // Populate languages
        langs.forEach(l => {
            const opt1 = document.createElement('option');
            opt1.value = l.code;
            opt1.textContent = l.name;
            srcSelect.appendChild(opt1);

            if (l.code !== 'auto') {
                const opt2 = document.createElement('option');
                opt2.value = l.code;
                opt2.textContent = l.name;
                destSelect.appendChild(opt2);
            }
        });

        srcSelect.value = 'auto';
        destSelect.value = 'hi';

        let timeout = null;

        input.addEventListener('input', () => {
            charCount.innerText = \`\${input.value.length} / 5000\`;
            clearTimeout(timeout);
            timeout = setTimeout(doTranslate, 400);
        });

        async function doTranslate() {
            const text = input.value.trim();
            if (!text) {
                output.innerText = '';
                return;
            }

            output.classList.add('loading-shimmer');
            try {
                const res = await fetch(\`/?text=\${encodeURIComponent(text)}&to=\${destSelect.value}&from=\${srcSelect.value}\`);
                const data = await res.json();
                output.innerText = data.text || 'Error';
            } catch (e) {
                output.innerText = 'Translation failed.';
            } finally {
                output.classList.remove('loading-shimmer');
            }
        }

        swapBtn.addEventListener('click', () => {
            if (srcSelect.value === 'auto') return;
            const temp = srcSelect.value;
            srcSelect.value = destSelect.value;
            destSelect.value = temp;
            doTranslate();
        });

        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(output.innerText);
            copyBtn.style.color = '#22c55e';
            setTimeout(() => copyBtn.style.color = '', 1000);
        });

        // Powerful Continuous Voice Input
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            let recognizing = false;

            micBtn.addEventListener('click', () => {
                if (recognizing) {
                    recognition.stop();
                } else {
                    recognition.start();
                }
            });

            recognition.onstart = () => {
                recognizing = true;
                micBtn.classList.add('active');
            };
            recognition.onend = () => {
                recognizing = false;
                micBtn.classList.remove('active');
                doTranslate(); // Final translate on end
            };
            recognition.onresult = (event) => {
                let finalTranscript = '';
                let interimTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }

                if (finalTranscript || interimTranscript) {
                    input.value = (input.value + ' ' + finalTranscript + interimTranscript).trim();
                    charCount.innerText = \`\${input.value.length} / 5000\`;
                    
                    // Throttle translation during voice input
                    clearTimeout(timeout);
                    timeout = setTimeout(doTranslate, 1000);
                }
            };
            recognition.onerror = (event) => {
                console.error('Speech error:', event.error);
                micBtn.classList.remove('active');
            };
        } else {
            micBtn.title = 'Voice input not supported in this browser';
            micBtn.style.opacity = '0.3';
            micBtn.style.cursor = 'not-allowed';
        }

        // Handle language changes
        srcSelect.addEventListener('change', doTranslate);
        destSelect.addEventListener('change', doTranslate);
    </script>
</body>
</html>\`;

export default async function handler(req: any, res: any) {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;
  const { text, to = 'en', from = 'auto' } = req.query as { text?: string; to?: string; from?: string };

  // Handle GUI page
  if (path === '/gui') {
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(guiPage);
  }

  // Handle API request
  if (text) {
    try {
      const result = await translate(text, { to, from } as any);
      res.status(200).json(result);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      res.status(500).json({ error: message });
    }
    return;
  }

  // Handle Landing Page
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(landingPage);
}
