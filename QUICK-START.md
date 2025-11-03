# ⚡ Quick Start — Deploy in 5 minuti

Guida ultra-rapida per deployare il portfolio su Vercel.

---

## ✅ Cosa hai già

- [x] Portfolio completo e funzionante
- [x] CV con 9 posizioni (2008-2025)
- [x] 3 gradi accademici
- [x] 7 progetti (6 ART + 1 DESIGN)
- [x] `.gitignore` configurato
- [x] `vercel.json` pronto
- [x] `package.json` corretto

**Tutto è pronto!** Serve solo GitHub + Vercel.

---

## 🚀 Deploy in 3 Steps

### **STEP 1: GitHub (2 minuti)**

1. Vai su [github.com/new](https://github.com/new)
2. Nome repository: `stefania-solari-portfolio`
3. Public → Create repository
4. Copia i comandi che GitHub ti mostra, nella cartella del progetto:

```bash
git init
git add .
git commit -m "Initial commit: Portfolio ready"
git remote add origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git
git branch -M main
git push -u origin main
```

**✅ Portfolio su GitHub!**

---

### **STEP 2: Vercel (2 minuti)**

1. Vai su [vercel.com](https://vercel.com)
2. "Sign Up" → "Continue with GitHub"
3. "Add New..." → "Project"
4. Importa `stefania-solari-portfolio`
5. **NON cambiare niente** → "Deploy"

**⏱️ 60 secondi dopo: Portfolio live!**

URL: `https://stefania-solari-portfolio.vercel.app`

---

### **STEP 3: Verifica (1 minuto)**

1. Apri l'URL che Vercel ti dà
2. Testa:
   - ✅ Filtri ALL/DESIGN/ART funzionano
   - ✅ Click su progetto → apre full-screen
   - ✅ CV scaricabile
   - ✅ Mobile responsive

**🎉 Portfolio live!**

---

## 🔄 Updates futuri

Ogni volta che modifichi qualcosa:

```bash
git add .
git commit -m "Descrizione modifica"
git push
```

**Vercel deployer automaticamente!** ⚡

---

## 📱 Custom Domain (Opzionale)

Hai un dominio tipo `stefaniasolari.com`?

1. Vercel → Settings → Domains
2. Add domain → Segui istruzioni DNS
3. HTTPS automatico!

---

## 🎯 Next Steps

**Dopo il deploy:**

1. **Condividi URL**:
   - LinkedIn profile
   - Email signature
   - CERN application
   - Curriculum

2. **Monitor**:
   - Vercel Analytics (pageviews gratis)
   - User feedback

3. **Iterate**:
   - Aggiungi progetti UNIT9
   - Aggiorna CV man mano
   - Sostituisci Unsplash con tue immagini

---

## 📂 File Structure Finale

```
stefania-solari-portfolio/
├── README.md              ✅ Info progetto
├── DEPLOYMENT.md          ✅ Guida dettagliata
├── QUICK-START.md         ✅ Questa guida
├── pre-deploy-checklist.md ✅ Checklist
├── git-commands.md        ✅ Comandi Git
├── .gitignore             ✅ Ignora node_modules
├── vercel.json            ✅ Config Vercel
├── package.json           ✅ Dependencies
├── App.tsx                → Main app
├── components/            → React components
├── styles/                → Tailwind CSS
└── index.html             → Entry point
```

---

## 🆘 Problemi?

### Build fails in locale

```bash
# Controlla errori
npm run build

# Se fallisce, fix errori TypeScript
# Poi riprova
```

### GitHub push fails

```bash
# Usa HTTPS invece di SSH
git remote set-url origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git
git push
```

### Vercel deploy fails

- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Check package.json dependencies

---

## 💡 Tips

### Before deploy

```bash
# Test build locally
npm run build
npm run preview
```

### After deploy

- Test su mobile (responsive)
- Test su diversi browser (Chrome, Safari, Firefox)
- Condividi con amici per feedback
- Check Lighthouse score (>90)

---

## 🎓 Per CERN Application

**URL Portfolio:** `https://stefania-solari-portfolio.vercel.app`

**Highlights:**
- ✅ 17+ anni esperienza (2008-2025)
- ✅ Head of Design (Crurated)
- ✅ MSc Digital Arts (La Salle BCN 2024-2025)
- ✅ BSc Product Design (Politecnico Milano)
- ✅ Art+Science projects (VR, TouchDesigner, generative)
- ✅ Museum experience (The Met, Smithsonian via UNIT9)
- ✅ Government projects (Australian Gov)
- ✅ Full-stack development (Unity C#, Laravel, TouchDesigner)

---

## 📧 Contact

**Stefania Solari**  
📧 stefania_solari@hotmail.it  
💼 [LinkedIn](https://www.linkedin.com/in/stefaniasolari)  
🌐 [Portfolio URL dopo deploy]

---

**Ready to go live!** 🚀✨

**Estimated time:** 5 minuti totali
**Cost:** $0 (Vercel Hobby plan gratis)
**Auto-updates:** ✅ Ogni push a GitHub
**HTTPS:** ✅ Automatico
**CDN:** ✅ Globale incluso
