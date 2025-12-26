# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Google SMTP ile Form Maili (Vercel Uyumlu)

Bu projede iletişim formu, Vercel üzerinde çalışan bir serverless API üzerinden Google SMTP ile mail gönderir.

### 1) Gmail/Google Workspace App Password oluşturma

1. Google hesabınızda **2 Adımlı Doğrulama**yı açın.
2. Google Hesabı > Güvenlik > **Uygulama Şifreleri** bölümünden yeni bir şifre oluşturun.
3. Oluşan 16 haneli şifreyi not edin (SMTP şifresi olarak kullanılır).

Not: Gmail, "Less secure apps" kullanımını kapattı. App Password gerekir.

### 2) Ortam değişkenleri

Yerel geliştirme için proje kökünde `.env.local` oluşturun:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=youremail@gmail.com
SMTP_PASS=Your Password
SMTP_FROM="Vitanimal <youremail@gmail.com>"
SMTP_TO=info@vitanimal.com
```

Vercel üzerinde aynı değişkenleri **Project Settings > Environment Variables** bölümüne ekleyin.

### 3) Vercel kurulumu

Bu repo Vercel'e deploy edildiğinde `/api/contact` endpoint’i otomatik olarak serverless function olarak çalışır.

- Form submit: `POST /api/contact`
- Gövde (JSON):
  - `name`, `email`, `phone`, `message`

### 4) Notlar

- Gmail tarafı `SMTP_FROM` alanını çoğu zaman `SMTP_USER` ile aynı hesap olacak şekilde bekler.
- `SMTP_TO` belirtilmezse gönderimler `SMTP_USER` adresine gider.
- Hata alırsanız önce ortam değişkenlerini ve App Password’ü kontrol edin.

## GitHub + Vercel Deploy Rehberi (Türkçe)

Bu bölüm, projeyi GitHub’a yükleyip Vercel’e bağlayarak canlıya almayı anlatır.

### 1) GitHub hesabı açma

1. https://github.com adresine girin.
2. **Sign up** ile hesap oluşturun.
3. E‑posta doğrulamasını tamamlayın.

### 2) Repo oluşturma ve projeyi GitHub’a gönderme

GitHub’da yeni bir repo oluşturun (ör. `b-vitanimal`). Ardından proje kökünde:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/vitanimal42-bot/b-vitanimal.git
git push -u origin main
```

Not: `.env` dosyasını **commit etmeyin**. Gerekirse `.gitignore` dosyasına `.env` ekleyin.

### 3) Vercel hesabı açma ve GitHub ile bağlama

1. https://vercel.com adresine gidin.
2. **Sign up** → **Continue with GitHub** seçin.
3. Vercel’in GitHub erişim iznini onaylayın.

### 4) Vercel’de projeyi içe aktarma

1. Vercel dashboard → **Add New…** → **Project**.
2. GitHub’daki repoyu seçin.
3. **Framework Preset** otomatik olarak algılanır (Vite).
4. **Root Directory**: proje kökü (varsayılan).

### 5) Environment Variables (SMTP)

Vercel → Project → **Settings** → **Environment Variables** bölümüne aşağıdakileri ekleyin:

```
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
SMTP_FROM
SMTP_TO
```

Değerler `.env` dosyanızdakiyle aynı olmalı. Bu değerler **Production** için işaretlenmeli.

### 6) Deploy

1. **Deploy**’a basın.
2. Vercel build alır ve yayına çıkar.

### 7) Deploy sonrası kontrol

1. Canlı siteyi açın.
2. İletişim formundan test mesajı gönderin.
3. Mail geliyorsa kurulum tamamdır.
