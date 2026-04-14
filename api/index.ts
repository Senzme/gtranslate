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
    <title>GTranslater API | Premium Translation Service</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-base: #0a0b10;
            --text-main: #f8fafc;
            --text-dim: #94a3b8;
            --primary: #6366f1;
            --glass-bg: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.1);
        }
        body {
            font-family: 'Outfit', sans-serif;
            background-color: var(--bg-base);
            color: var(--text-main);
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            overflow: hidden;
        }
        .bg-orbs {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: -1;
            filter: blur(80px);
            opacity: 0.5;
        }
        .orb { position: absolute; border-radius: 50%; animation: move linear infinite; }
        .orb-1 { width: 400px; height: 400px; background: #6366f1; top: -100px; left: -100px; animation-duration: 40s; }
        .orb-2 { width: 300px; height: 300px; background: #a855f7; bottom: -50px; right: -50px; animation-duration: 35s; }
        @keyframes move {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, 50px) scale(1.1); }
            100% { transform: translate(0, 0) scale(1); }
        }
        .container {
            max-width: 550px;
            width: 90%;
            padding: 3rem 2rem;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            border-radius: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            border: 1px solid var(--glass-border);
            text-align: center;
            position: relative;
        }
        .status {
            display: inline-flex;
            align-items: center;
            padding: 0.4rem 1rem;
            background: rgba(34, 197, 94, 0.15);
            color: #4ade80;
            border-radius: 99px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 2rem;
            border: 1px solid rgba(74, 222, 128, 0.3);
        }
        .status::before {
            content: '';
            width: 8px; height: 8px;
            background: #22c55e;
            border-radius: 50%;
            margin-right: 8px;
            box-shadow: 0 0 10px #22c55e;
        }
        h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: 700;
            background: linear-gradient(to right, #818cf8, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p { color: var(--text-dim); line-height: 1.6; font-size: 1.1rem; }
        .btn {
            display: inline-block;
            margin-top: 2.5rem;
            padding: 1rem 2rem;
            background: var(--primary);
            color: white;
            text-decoration: none;
            border-radius: 1rem;
            font-weight: 700;
            transition: all 0.3s;
            box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 15px 30px rgba(99, 102, 241, 0.5); }
        .code-box {
            background: rgba(0,0,0,0.3);
            padding: 1.2rem;
            border-radius: 1rem;
            text-align: left;
            margin-top: 2rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.95rem;
            border: 1px solid var(--glass-border);
            color: #bbc4d0;
        }
    </style>
</head>
<body>
    <div class="bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
    </div>
    <div class="container">
        <div class="status">API is Live</div>
        <h1>GTranslater</h1>
        <p>Premium translation API, now with a stunning modern GUI. Free, unlimited, and lightning-fast.</p>
        
        <div class="code-box">
            <span style="color: #818cf8;">GET</span> /?text=<span style="color: #fbbf24;">Hello</span>&to=<span style="color: #fbbf24;">hi</span>
        </div>
        
        <a href="/" class="btn">Open Premium GUI</a>
        
        <p style="margin-top: 2.5rem; font-size: 0.85rem; opacity: 0.7;">Powered by Senzme</p>
    </div>
</body>
</html>`;

const guiPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GTranslater | Premium AI Translator</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Shared */
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --radius: 1.2rem;
            
            /* Dark Theme (Default) */
            --bg-base: #0a0b10;
            --bg-gradient: linear-gradient(135deg, #0a0b10 0%, #161b22 100%);
            --glass-bg: rgba(255, 255, 255, 0.05);
            --glass-border: rgba(255, 255, 255, 0.1);
            --text-main: #f8fafc;
            --text-dim: #94a3b8;
            --primary: #6366f1;
            --primary-glow: rgba(99, 102, 241, 0.3);
            --card-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
            --input-bg: rgba(0, 0, 0, 0.2);
        }

        body.light-mode {
            /* Light Theme */
            --bg-base: #f8fafc;
            --bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            --glass-bg: rgba(255, 255, 255, 0.7);
            --glass-border: rgba(99, 102, 241, 0.2);
            --text-main: #1e293b;
            --text-dim: #64748b;
            --primary: #4f46e5;
            --primary-glow: rgba(79, 70, 229, 0.2);
            --card-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
            --input-bg: rgba(255, 255, 255, 0.5);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            user-select: none;
        }

        body {
            font-family: 'Outfit', sans-serif;
            background: var(--bg-base);
            background-attachment: fixed;
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            transition: var(--transition);
        }

        /* Animated Background Orbs */
        .bg-orbs {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            filter: blur(80px);
            opacity: 0.6;
        }
        .orb {
            position: absolute;
            border-radius: 50%;
            animation: move linear infinite;
        }
        .orb-1 { width: 400px; height: 400px; background: #6366f1; top: -100px; left: -100px; animation-duration: 40s; opacity: 0.4; }
        .orb-2 { width: 300px; height: 300px; background: #a855f7; bottom: -50px; right: -50px; animation-duration: 35s; animation-direction: reverse; opacity: 0.3; }
        .orb-3 { width: 250px; height: 250px; background: #ec4899; top: 40%; left: 50%; animation-duration: 45s; opacity: 0.2; }

        @keyframes move {
            0% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, 50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0, 0) scale(1); }
        }

        header {
            padding: 1.5rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--glass-border);
            position: sticky;
            top: 0;
            z-index: 100;
            background: var(--glass-bg);
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: -1px;
            background: linear-gradient(to right, #6366f1, #a855f7);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .theme-toggle {
            background: var(--glass-bg);
            border: 1px solid var(--glass-border);
            padding: 0.6rem;
            border-radius: 50%;
            cursor: pointer;
            color: var(--text-main);
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: var(--card-shadow);
        }
        .theme-toggle:hover {
            transform: rotate(15deg) scale(1.1);
            background: var(--primary);
            color: white;
            border-color: transparent;
        }

        main {
            flex: 1;
            width: 100%;
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .controls-card {
            background: var(--glass-bg);
            backdrop-filter: blur(16px);
            border: 1px solid var(--glass-border);
            border-radius: 1.2rem;
            padding: 0.5rem 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.8rem;
            box-shadow: var(--card-shadow);
            z-index: 50;
        }

        /* Custom Dropdown Styling */
        .custom-dropdown {
            flex: 1;
            position: relative;
            height: 44px;
        }

        .dropdown-trigger {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            color: var(--text-main);
            font-family: inherit;
            font-size: 1rem;
            font-weight: 600;
            padding: 0 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 0.8rem;
            transition: var(--transition);
        }
        .dropdown-trigger:hover {
            background: var(--input-bg);
        }
        .dropdown-trigger::after {
            content: '';
            width: 8px;
            height: 8px;
            border-right: 2px solid var(--text-dim);
            border-bottom: 2px solid var(--text-dim);
            transform: rotate(45deg);
            margin-left: 8px;
            transition: var(--transition);
        }
        .custom-dropdown.open .dropdown-trigger::after {
            transform: rotate(-135deg);
            margin-top: 5px;
        }

        .dropdown-menu {
            position: absolute;
            top: calc(100% + 8px);
            left: 0;
            width: 320px;
            max-height: 450px;
            background: var(--bg-base);
            background-color: rgba(20, 22, 30, 0.98);
            backdrop-filter: blur(24px);
            border: 1px solid var(--glass-border);
            border-radius: 1.2rem;
            display: none;
            flex-direction: column;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
            z-index: 2000;
            overflow: hidden;
            animation: slideUp 0.2s ease-out;
        }
        body.light-mode .dropdown-menu {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .custom-dropdown.open .dropdown-menu {
            display: flex;
        }

        .dropdown-search {
            padding: 1rem;
            border-bottom: 1px solid var(--glass-border);
        }
        .dropdown-search input {
            width: 100%;
            background: var(--input-bg);
            border: 1px solid var(--glass-border);
            border-radius: 0.8rem;
            padding: 0.6rem 1rem;
            color: var(--text-main);
            font-family: inherit;
            font-size: 0.95rem;
            outline: none;
            transition: var(--transition);
        }
        .dropdown-search input:focus {
            border-color: var(--primary);
            box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .options-list {
            flex: 1;
            overflow-y: auto;
            padding: 0.5rem;
            scrollbar-width: thin;
        }
        .option-item {
            padding: 0.8rem 1rem;
            border-radius: 0.7rem;
            cursor: pointer;
            transition: var(--transition);
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--text-dim);
            font-weight: 500;
        }
        .option-item:hover {
            background: var(--input-bg);
            color: var(--text-main);
        }
        .option-item.selected {
            background: var(--primary);
            color: white;
        }
        .option-item.hidden {
            display: none;
        }

        .swap-btn {
            background: var(--primary);
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: white;
            transition: var(--transition);
            box-shadow: 0 4px 10px var(--primary-glow);
        }
        .swap-btn:hover { transform: rotate(180deg) scale(1.1); filter: brightness(1.2); }

        .translator-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            min-height: 400px;
        }

        .panel {
            background: var(--glass-bg);
            backdrop-filter: blur(16px);
            border: 1px solid var(--glass-border);
            border-radius: 1.5rem;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            position: relative;
            box-shadow: var(--card-shadow);
            transition: var(--transition);
            border-bottom: 4px solid transparent;
        }
        .panel:focus-within {
            border-bottom-color: var(--primary);
            transform: translateY(-2px);
        }

        textarea {
            width: 100%;
            height: 100%;
            background: transparent;
            border: none;
            resize: none;
            color: var(--text-main);
            font-family: inherit;
            font-size: 1.4rem;
            line-height: 1.5;
            outline: none;
            scrollbar-width: thin;
            user-select: text;
        }
        textarea::placeholder { color: var(--text-dim); }

        .output-container {
            font-size: 1.4rem;
            line-height: 1.5;
            color: var(--text-main);
            white-space: pre-wrap;
            overflow-y: auto;
            flex: 1;
            min-height: 150px;
            user-select: text;
        }

        .actions {
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            border-top: 1px solid var(--glass-border);
            padding-top: 1rem;
        }

        .action-btn {
            background: var(--input-bg);
            border: 1px solid var(--glass-border);
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-main);
            transition: var(--transition);
        }
        .action-btn:hover {
            background: var(--primary);
            color: white;
            transform: translateY(-2px);
            border-color: transparent;
        }
        .action-btn.active {
            background: #ef4444;
            color: white;
            animation: pulse-red 1.5s infinite;
        }

        @keyframes pulse-red {
            0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
            70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
            100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }

        .char-count {
            margin-left: auto;
            font-size: 0.85rem;
            color: var(--text-dim);
            font-weight: 500;
        }

        /* Mobile Adjustments */
        @media (max-width: 800px) {
            .translator-grid { grid-template-columns: 1fr; }
            main { padding: 1rem; }
            .logo { font-size: 1.5rem; }
            .panel { padding: 1.2rem; min-height: 250px; }
            textarea, .output-container { font-size: 1.2rem; }
        }

        /* Shimmer Loading */
        .loading {
            position: relative;
            overflow: hidden;
        }
        .loading::after {
            content: "";
            position: absolute;
            top: 0; left: -100%;
            width: 200%; height: 100%;
            background: linear-gradient(90deg, transparent, var(--glass-border), transparent);
            animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer { 100% { transform: translateX(100%); } }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: var(--glass-border); border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--text-dim); }
    </style>
</head>
<body class="dark-mode">
    <div class="bg-orbs">
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        <div class="orb orb-3"></div>
    </div>

    <header>
        <div class="logo">GTranslater</div>
        <button class="theme-toggle" id="theme-btn" title="Toggle Light/Dark Mode">
            <svg id="theme-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></svg>
        </button>
    </header>

    <main>
        <div class="controls-card">
            <div class="custom-dropdown" id="src-dropdown">
                <button class="dropdown-trigger" id="src-trigger">Auto-detect</button>
                <div class="dropdown-menu">
                    <div class="dropdown-search"><input type="text" placeholder="Search languages..."></div>
                    <div class="options-list"></div>
                </div>
            </div>
            <button class="swap-btn" id="swap-langs" title="Swap languages">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16V4M7 4L3 8M7 4L11 8M17 8v12M17 20l-4-4M17 20l4-4"/></svg>
            </button>
            <div class="custom-dropdown" id="dest-dropdown">
                <button class="dropdown-trigger" id="dest-trigger">English</button>
                <div class="dropdown-menu">
                    <div class="dropdown-search"><input type="text" placeholder="Search languages..."></div>
                    <div class="options-list"></div>
                </div>
            </div>
        </div>

        <div class="translator-grid">
            <div class="panel">
                <textarea id="input-text" placeholder="Type or paste text here..."></textarea>
                <div class="actions">
                    <button class="action-btn" id="mic-btn" title="Voice Input">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                    </button>
                    <button class="action-btn" id="clear-btn" title="Clear Text">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                    <button class="action-btn" id="listen-src-btn" title="Listen">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                    <span class="char-count" id="char-count">0 / 5000</span>
                </div>
            </div>

            <div class="panel" id="output-panel">
                <div id="output-text" class="output-container"></div>
                <div class="actions">
                    <button class="action-btn" id="copy-btn" title="Copy to clipboard">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                    <button class="action-btn" id="listen-dest-btn" title="Listen Translation">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </main>

    <script>
        const langs = ${JSON.stringify(langList)};
        const input = document.getElementById('input-text');
        const output = document.getElementById('output-text');
        const micBtn = document.getElementById('mic-btn');
        const copyBtn = document.getElementById('copy-btn');
        const swapBtn = document.getElementById('swap-langs');
        const charCount = document.getElementById('char-count');
        const themeBtn = document.getElementById('theme-btn');
        const themeIcon = document.getElementById('theme-icon');
        const clearBtn = document.getElementById('clear-btn');
        const listenSrcBtn = document.getElementById('listen-src-btn');
        const listenDestBtn = document.getElementById('listen-dest-btn');
        const outputPanel = document.getElementById('output-panel');

        // Custom Dropdown Logic
        class DropdownController {
            constructor(id, defaultValue, onChange, allowAuto = true) {
                this.container = document.getElementById(id);
                this.trigger = this.container.querySelector('.dropdown-trigger');
                this.menu = this.container.querySelector('.dropdown-menu');
                this.search = this.container.querySelector('input');
                this.list = this.container.querySelector('.options-list');
                this.value = defaultValue;
                this.onChange = onChange;
                this.allowAuto = allowAuto;
                
                this.init();
            }

            init() {
                // Populate options
                langs.forEach(l => {
                    if (l.code === 'auto' && !this.allowAuto) return;
                    const item = document.createElement('div');
                    item.className = 'option-item' + (l.code === this.value ? ' selected' : '');
                    item.dataset.code = l.code;
                    item.textContent = l.name;
                    item.addEventListener('click', () => this.select(l.code));
                    this.list.appendChild(item);
                });

                // Set initial trigger text
                const current = langs.find(l => l.code === this.value);
                this.trigger.textContent = current ? current.name : this.value;

                // Toggle menu
                this.trigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const isOpen = this.container.classList.contains('open');
                    document.querySelectorAll('.custom-dropdown').forEach(d => d.classList.remove('open'));
                    if (!isOpen) {
                        this.container.classList.add('open');
                        this.search.focus();
                    }
                });

                // Search logic
                this.search.addEventListener('input', () => {
                    const q = this.search.value.toLowerCase();
                    this.list.querySelectorAll('.option-item').forEach(item => {
                        const match = item.textContent.toLowerCase().includes(q);
                        item.classList.toggle('hidden', !match);
                    });
                });

                // Close on click outside
                document.addEventListener('click', () => this.container.classList.remove('open'));
                this.menu.addEventListener('click', (e) => e.stopPropagation());
            }

            select(code) {
                this.value = code;
                const current = langs.find(l => l.code === code);
                this.trigger.textContent = current ? current.name : code;
                this.container.classList.remove('open');
                this.search.value = '';
                this.list.querySelectorAll('.option-item').forEach(item => {
                    item.classList.toggle('selected', item.dataset.code === code);
                    item.classList.remove('hidden');
                });
                this.onChange();
            }
        }

        const srcDropdown = new DropdownController('src-dropdown', 'auto', doTranslate, true);
        const destDropdown = new DropdownController('dest-dropdown', 'hi', doTranslate, false);

        // Theme Management
        const SUN_ICON = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22">';
        const MOON_ICON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z">';

        function setTheme(isLight) {
            if (isLight) {
                document.body.classList.add('light-mode');
                themeIcon.innerHTML = MOON_ICON;
            } else {
                document.body.classList.remove('light-mode');
                themeIcon.innerHTML = SUN_ICON;
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
        }

        themeBtn.addEventListener('click', () => {
            const isLight = !document.body.classList.contains('light-mode');
            setTheme(isLight);
        });

        // Initialize theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme === 'light');

        let timeout = null;

        input.addEventListener('input', () => {
            charCount.innerText = \`\${input.value.length} / 5000\`;
            clearTimeout(timeout);
            timeout = setTimeout(doTranslate, 600);
        });

        async function doTranslate() {
            const text = input.value.trim();
            if (!text) {
                output.innerText = '';
                return;
            }

            outputPanel.classList.add('loading');
            try {
                const res = await fetch(\`/?text=\${encodeURIComponent(text)}&to=\${destDropdown.value}&from=\${srcDropdown.value}\`);
                const data = await res.json();
                output.innerText = data.text || 'Error';
            } catch (e) {
                output.innerText = 'Translation failed.';
            } finally {
                outputPanel.classList.remove('loading');
            }
        }

        clearBtn.addEventListener('click', () => {
            input.value = '';
            output.innerText = '';
            charCount.innerText = '0 / 5000';
            input.focus();
        });

        swapBtn.addEventListener('click', () => {
            if (srcDropdown.value === 'auto') return;
            const temp = srcDropdown.value;
            srcDropdown.select(destDropdown.value);
            destDropdown.select(temp);
            doTranslate();
        });

        copyBtn.addEventListener('click', () => {
            if (!output.innerText) return;
            navigator.clipboard.writeText(output.innerText);
            const originalSvg = copyBtn.innerHTML;
            copyBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
            setTimeout(() => copyBtn.innerHTML = originalSvg, 1500);
        });

        // TTS
        function speak(text, lang) {
            if (!text) return;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang === 'auto' ? '' : lang;
            window.speechSynthesis.speak(utterance);
        }

        listenSrcBtn.addEventListener('click', () => speak(input.value, srcDropdown.value));
        listenDestBtn.addEventListener('click', () => speak(output.innerText, destDropdown.value));

            // Voice Input Fix for Mobile Duplication
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                const recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                let recognizing = false;
                let baseTranscript = ''; // Track confirmed text for this session

                micBtn.addEventListener('click', () => {
                    if (recognizing) {
                        recognition.stop();
                    } else {
                        baseTranscript = input.value; // Start from current input content
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
                    doTranslate();
                };
                recognition.onresult = (event) => {
                    let interimTranscript = '';
                    let newFinalTranscript = '';

                    // Only process results from the current resultIndex to avoid duplication
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            newFinalTranscript += transcript;
                        } else {
                            interimTranscript += transcript;
                        }
                    }

                    // Append new final results permanently to our session base
                    if (newFinalTranscript) {
                        baseTranscript += newFinalTranscript;
                    }

                    // Update input with confirmed text + any currently hearing interim text
                    input.value = baseTranscript + interimTranscript;
                    charCount.innerText = \`\${input.value.length} / 5000\`;
                    
                    clearTimeout(timeout);
                    timeout = setTimeout(doTranslate, 800);
                };
                recognition.onerror = () => micBtn.classList.remove('active');
            } else {
                micBtn.style.display = 'none';
            }
    </script>
</body>
</html>`;

export default async function handler(req: any, res: any) {
  const url = new URL(req.url, 'http://localhost');
  const path = url.pathname;
  const { text, to = 'en', from = 'auto' } = req.query as { text?: string; to?: string; from?: string };

  // Handle Landing Page (shifted to /gui)
  if (path === '/gui') {
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(landingPage);
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

  // Default to GUI Page (at root /)
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(guiPage);
}
