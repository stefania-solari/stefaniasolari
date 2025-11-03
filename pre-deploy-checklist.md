# ✅ Pre-Deploy Checklist

Controlla questi punti prima di fare il deployment su Vercel.

---

## 🔍 1. Build Locale

```bash
npm run build
```

**✅ Deve completare senza errori**

**❌ Se fallisce:**
- Controlla errori TypeScript
- Verifica import mancanti
- Testa `npm run dev` prima

---

## 🖼️ 2. Contenuti

### Portfolio Projects

- [ ] **Progetti ART** (6): Descrizioni complete, immagini funzionanti
  - [ ] POSTHUMAN
  - [ ] LIQUID DREAMS
  - [ ] EVOLVING GARDEN
  - [ ] RETUNING
  - [ ] ELEGY
  - [ ] TESSUTO

- [ ] **Progetti DESIGN** (1): Case study dettagliato
  - [ ] IMAGINAR (con role, challenge, concept, process, outcomes)

- [ ] Tutte le **immagini** caricano correttamente (Unsplash o GitHub)
- [ ] Ogni progetto ha almeno **1 immagine**
- [ ] **Anno** corretto per ogni progetto
- [ ] **Categorie** appropriate (MOBILE AR, VR, INSTALLATION, etc.)

### About Section

- [ ] **Bio** aggiornata con il tuo profilo professionale
- [ ] **Skills** riflettono le tue competenze attuali
- [ ] Tono professionale ma personale

### CV

- [ ] **Header** con nome e contatti corretti
- [ ] **9 posizioni lavorative** (2008-2025):
  - [ ] CRURATED (2024-present)
  - [ ] UNIT9 (2022-2024)
  - [ ] BV TECH (2021-2022)
  - [ ] BEPART (2020-2023)
  - [ ] JoinPad (2016-2021)
  - [ ] ildoppiosegno (2012)
  - [ ] Freelance (2010-2016)
  - [ ] Marc Fraser Design (2009)
  - [ ] Design Innovation srl (2008)

- [ ] **3 gradi accademici**:
  - [ ] MSc Digital Arts (La Salle BCN, 2024-2025)
  - [ ] Master Code (Talent Garden, 2016)
  - [ ] BSc Product Design (Politecnico Milano, 2006-2009)

- [ ] **Skills section** completa
- [ ] CV **stampabile** correttamente (Ctrl+P / Cmd+P per testare)

### Contact

- [ ] **Email**: stefania_solari@hotmail.it (corretto)
- [ ] **LinkedIn**: URL completo e funzionante
- [ ] Footer con anno corretto (2025)

---

## 🎨 3. Design & UX

### Navigazione

- [ ] **Header** sticky funziona
- [ ] Click su "STEFANIA SOLARI" torna alla home
- [ ] Scroll to sections funziona (WORK, ABOUT, CV, CONTACT)
- [ ] **Filtri** ALL / DESIGN / ART funzionano
- [ ] Transizioni smooth tra filtri

### Projects

- [ ] **Grid view** mostra progetti correttamente
- [ ] **Hover effects** funzionano
- [ ] **Click** apre ProjectDetail full-screen
- [ ] **Arrows** (← →) per navigare tra progetti
- [ ] **Esc** chiude ProjectDetail
- [ ] **Scroll** smooth in ProjectDetail
- [ ] Immagini in **aspect-ratio** corretto

### Responsive

- [ ] **Desktop** (1920px+): Layout corretto
- [ ] **Laptop** (1440px): No horizontal scroll
- [ ] **Tablet** (768px): Grid 1 colonna
- [ ] **Mobile** (375px): Tutto leggibile, no overflow

---

## ⚡ 4. Performance

```bash
npm run preview
```

Apri DevTools → Lighthouse → Run test

**Target:**
- [ ] **Performance**: > 90
- [ ] **Accessibility**: > 95
- [ ] **Best Practices**: > 90
- [ ] **SEO**: > 90

**Fix comuni:**
- Comprimi immagini (WebP, ~1600px max)
- Lazy loading immagini (già implementato)
- Minify CSS/JS (Vite lo fa automaticamente)

---

## 🔒 5. Sicurezza & Privacy

- [ ] No **API keys** hardcoded nel codice
- [ ] No **credentials** nei file
- [ ] `.gitignore` include `.env`, `node_modules`, `dist`
- [ ] Email nel footer è corretta (non placeholder)

---

## 🌐 6. SEO & Metadata

Controlla `/index.html`:

```html
<title>Stefania Solari — Portfolio</title>
<meta name="description" content="Head of Design specializing in Art+Technology..." />
```

- [ ] **Title** corretto
- [ ] **Description** professionale (150-160 caratteri)
- [ ] **Favicon** presente (opzionale)
- [ ] **Open Graph tags** (opzionale, per social sharing)

---

## 📱 7. Browser Testing

Testa su:

- [ ] **Chrome** (latest)
- [ ] **Firefox** (latest)
- [ ] **Safari** (macOS/iOS)
- [ ] **Edge** (latest)

**Features da testare:**
- Animazioni smooth
- Fonts caricano (IBM Plex Mono)
- Images caricano
- No console errors (F12)

---

## 📄 8. Files Deployment

- [x] ✅ `.gitignore` creato
- [x] ✅ `vercel.json` presente
- [x] ✅ `package.json` corretto
- [x] ✅ `README.md` aggiornato
- [x] ✅ `DEPLOYMENT.md` creato
- [ ] `vite.config.ts` configurato

---

## 🧪 9. Final Test

### Test Scenario 1: New Visitor

1. Apri sito
2. Leggi Hero
3. Scroll a WORK
4. Click filtro DESIGN → vedi solo DESIGN projects
5. Click filtro ART → vedi solo ART projects
6. Click progetto → apre full-screen
7. Arrows per navigare progetti
8. Esc per chiudere

**✅ Tutto funziona?**

### Test Scenario 2: Recruiter/CERN

1. Apri sito
2. Scroll to ABOUT → legge bio
3. Scroll to CV → legge esperienza
4. Click "View Full CV" → apre CV detail
5. Print/Save CV (Ctrl+P / Cmd+P)
6. Scroll to CONTACT → trova email/LinkedIn

**✅ Informazioni complete e professionali?**

---

## 🚀 10. Ready to Deploy!

Se tutti i check sono ✅:

```bash
# Commit finale
git add .
git commit -m "Pre-deployment: All checks passed"

# Push a GitHub
git push origin main
```

Poi segui **DEPLOYMENT.md** per Vercel setup!

---

## 📋 Post-Deploy Checks

Dopo il deploy su Vercel:

- [ ] **URL live** funziona
- [ ] **HTTPS** abilitato
- [ ] Tutti i **links** funzionanti
- [ ] Immagini caricano
- [ ] No **console errors** in produzione
- [ ] **Mobile** responsive
- [ ] **Performance** buona (Lighthouse)
- [ ] Share URL con amici → feedback

---

## 🎉 Deploy Complete!

**Next Steps:**

1. **Share URL**:
   - LinkedIn post con screenshot
   - CERN application
   - Email signature

2. **Monitor**:
   - Vercel Analytics (pageviews)
   - User feedback
   - Errori in Vercel dashboard

3. **Iterate**:
   - Aggiungi nuovi progetti
   - Aggiorna CV man mano
   - A/B test descrizioni

---

**Buon lavoro!** 🚀✨
