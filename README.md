# GTranslater

A **free**, **unlimited**, and **stunning** translation application and API for Node.js. 

Now features a **Premium Glassmorphism GUI** with Dark/Light mode support and mobile-optimized voice recognition.

---

## 🚀 Live Demo
Visit the official deployment to experience the premium interface:  
👉 **[https://gtranslate.vercel.app/](https://gtranslate.vercel.app/)**

---

## ✨ Features

*   **Premium GUI**: A modern, responsive, and elegant Glassmorphism design available at the root URL.
*   **Dual Themes**: Seamless Dark and Light mode switching with preference persistence.
*   **Custom Searchable Dropdown**: Easily find languages from a searchable list of 100+ options.
*   **Voice Input**: Integrated microphone support, specially optimized to prevent duplication on mobile devices.
*   **Listen (TTS)**: Built-in text-to-speech for both source and translated text.
*   **Unlimited API**: Powerful and fast translation backend without request limits.

---

## 🛠 Usage

### Web Interface (GUI)
Simply visit the root URL in your browser to use the high-end translator:  
`https://gtranslate.vercel.app/`

### API Documentation
GTranslater provides a simple JSON API. You can use it in your own projects by making a GET request.

#### Endpoint
`GET https://gtranslate.vercel.app/`

#### Parameters
| Parameter | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `text` | `string` | **Required**. The text you want to translate. | - |
| `to` | `string` | The target language code (e.g., `hi`, `fr`, `es`). | `en` |
| `from` | `string` | The source language code. Use `auto` for detection. | `auto` |

#### Example Request
```bash
curl "https://gtranslate.vercel.app/?text=Hello&to=hi"
```

#### Example Response
```json
{
  "text": "नमस्ते",
  "from": {
    "language": {
      "didYouMean": false,
      "iso": "en"
    }
  }
}
```

---

## 📦 Installation (Local Development)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Senzme/gtranslate.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run locally**:
   ```bash
   npm run dev
   ```

## 📄 License
MIT
