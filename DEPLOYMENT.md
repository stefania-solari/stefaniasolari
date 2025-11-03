# 🚀 Deployment Guide — GitHub + Vercel

Guida passo-passo per pubblicare il portfolio su GitHub e deployarlo su Vercel.

---

## ✅ Pre-requisiti

- Account GitHub (gratuito)
- Account Vercel (gratuito, sign-in con GitHub)
- Git installato sul tuo computer

---

## 📝 Step 1: Preparazione Locale

### 1.1 Testa il build locale

```bash
# Assicurati che tutto funzioni
npm run build

# Testa il build in locale
npm run preview
```

Se tutto va bene, vedrai il sito su `http://localhost:4173`

### 1.2 Verifica i file di configurazione

✅ `.gitignore` — Creato (ignora node_modules, dist, .env)  
✅ `vercel.json` — Presente (configurazione Vercel)  
✅ `package.json` — Corretto (nome, scripts, dependencies)

---

## 🐙 Step 2: Push su GitHub

### 2.1 Crea repository su GitHub

1. Vai su [github.com](https://github.com)
2. Click sul **"+"** in alto a destra → **"New repository"**
3. Compila:
   - **Repository name**: `stefania-solari-portfolio` (o il nome che preferisci)
   - **Description**: `Minimalist portfolio — Art+Technology, immersive design, interactive installations`
   - **Visibility**: **Public** (per Vercel gratuito)
   - ❌ **NON selezionare** "Add a README" (ce l'hai già)
4. Click **"Create repository"**

### 2.2 Collega il repository locale

GitHub ti mostrerà i comandi da eseguire. Nella tua cartella del progetto:

```bash
# Inizializza Git (se non ancora fatto)
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit: Portfolio ready for deployment"

# Collega a GitHub (sostituisci YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### 2.3 Verifica su GitHub

Vai su `https://github.com/YOUR-USERNAME/stefania-solari-portfolio`  
Dovresti vedere tutti i file caricati! 🎉

---

## ⚡ Step 3: Deploy su Vercel

### 3.1 Accedi a Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Click **"Sign Up"** → **"Continue with GitHub"**
3. Autorizza Vercel ad accedere a GitHub

### 3.2 Importa il progetto

1. Nella dashboard Vercel, click **"Add New..."** → **"Project"**
2. Vercel mostrerà i tuoi repository GitHub
3. Trova `stefania-solari-portfolio` e click **"Import"**

### 3.3 Configura il progetto

Vercel **auto-rileva** le impostazioni da `vercel.json`:

- ✅ **Framework Preset**: Vite
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `dist`
- ✅ **Install Command**: `npm install`

**NON cambiare niente!** Le impostazioni sono già corrette.

### 3.4 Deploy!

1. Click **"Deploy"**
2. Vercel:
   - Installa le dipendenze
   - Esegue il build
   - Pubblica il sito
   - Ti dà un URL tipo `stefania-solari-portfolio.vercel.app`

**Deploy completo in ~60 secondi!** 🚀

---

## 🌐 Step 4: Verifica il Sito Live

1. Vercel ti mostra un URL: `https://YOUR-PROJECT.vercel.app`
2. Click per aprire il sito live
3. Testa:
   - ✅ Navigazione tra sezioni
   - ✅ Filtri ALL / DESIGN / ART
   - ✅ Apertura progetti
   - ✅ Download CV
   - ✅ Responsive (mobile/desktop)

---

## 🔄 Step 5: Aggiornamenti Futuri

Ogni volta che modifichi il portfolio:

```bash
# Modifica i file (Projects.tsx, About.tsx, etc.)

# Commit changes
git add .
git commit -m "Add new project: [Nome progetto]"

# Push a GitHub
git push
```

**Vercel deployerà automaticamente!** Ogni push a `main` → nuovo deploy.

---

## ⚙️ Configurazioni Avanzate (Opzionali)

### Custom Domain

1. Vai su Vercel → Settings → Domains
2. Aggiungi il tuo dominio (es: `stefaniasolari.com`)
3. Configura DNS secondo le istruzioni Vercel
4. HTTPS automatico incluso!

### Environment Variables

Se aggiungi API keys in futuro:

1. Vercel → Settings → Environment Variables
2. Aggiungi variabili (es: `VITE_API_KEY`)
3. Vercel le inietta automaticamente al build

### Preview Deployments

Vercel crea **preview URLs** per ogni branch/PR:
- Branch `main` → Production URL
- Altri branch → Preview URLs temporanei
- Perfetto per testare prima di pubblicare!

---

## 🐛 Troubleshooting

### "Build failed"

**Check:**
1. `npm run build` funziona in locale?
2. `package.json` ha tutti i `dependencies`?
3. Nessun import mancante?

**Fix:**
```bash
# Test build locale
npm run build

# Se funziona, push a GitHub
git add .
git commit -m "Fix build"
git push
```

### "404 on refresh"

**Fix:** Il `vercel.json` già include rewrites per SPA. Se serve:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Immagini non caricano

**Check:**
- Unsplash URLs sono pubblici
- Se usi GitHub raw URLs, il repo è **public**
- URLs sono HTTPS (no HTTP)

---

## 📊 Monitoring

### Vercel Dashboard

- **Deployments**: Storico di tutti i deploy
- **Analytics**: Visite, performance (gratis fino a 100k pageviews/mese)
- **Logs**: Errori build/runtime

### GitHub Integration

- Vercel commenta sui PR con preview URLs
- Status checks su ogni commit
- Automatic rollback se build fallisce

---

## ✅ Checklist Finale

Prima di condividere il portfolio:

- [ ] Tutti i progetti hanno immagini (no placeholder)
- [ ] Bio e CV aggiornati
- [ ] Email e LinkedIn corretti
- [ ] Tutti i link funzionano
- [ ] Testato su mobile
- [ ] Testato su Chrome, Safari, Firefox
- [ ] CV scaricabile e ben formattato
- [ ] SEO: titolo e descrizione corretti (`index.html`)

---

## 🎉 Pronto!

Il tuo portfolio è:
- ✅ **Live** su URL pubblico Vercel
- ✅ **Versionato** su GitHub
- ✅ **Auto-deployed** ad ogni push
- ✅ **HTTPS** e CDN globale inclusi
- ✅ **Gratis** (Vercel Hobby plan)

**Prossimi step:**
1. Condividi URL con recruiter/gallerie/CERN
2. Aggiungi progetti man mano
3. Opzionale: Custom domain
4. Opzionale: Google Analytics

---

## 📧 Supporto

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)

---

**Buon deployment!** 🚀✨
