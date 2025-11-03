# 🐙 Git Commands — Quick Reference

Comandi pronti per copiare e incollare. Sostituisci `YOUR-USERNAME` con il tuo username GitHub.

---

## 🚀 First Time Setup (Solo una volta)

### 1. Crea repository su GitHub

1. Vai su [github.com/new](https://github.com/new)
2. Repository name: `stefania-solari-portfolio`
3. Description: `Minimalist portfolio — Art+Technology, immersive design, interactive installations`
4. Visibility: **Public**
5. ❌ NON selezionare "Add a README"
6. Click **"Create repository"**

### 2. Inizializza Git locale e push

```bash
# Vai nella cartella del progetto (se non ci sei già)
cd stefania-solari-portfolio

# Inizializza Git
git init

# Aggiungi tutti i file
git add .

# Primo commit
git commit -m "Initial commit: Portfolio ready for deployment"

# Aggiungi remote GitHub (SOSTITUISCI YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git

# Rinomina branch in 'main'
git branch -M main

# Push iniziale
git push -u origin main
```

**✅ Fatto!** Vai su GitHub e vedrai tutti i file caricati.

---

## 🔄 Updates — Ogni volta che modifichi il portfolio

### Workflow Standard

```bash
# 1. Controlla cosa è cambiato
git status

# 2. Aggiungi tutte le modifiche
git add .

# 3. Commit con messaggio descrittivo
git commit -m "Add new project: [Nome progetto]"

# 4. Push a GitHub
git push
```

**Vercel deployer automaticamente!** ⚡

---

## 📝 Esempi di Commit Messages

### Aggiungere progetti

```bash
git commit -m "Add new project: UNIT9 Museum Experience"
git commit -m "Add 3 new DESIGN projects from 2024"
git commit -m "Update IMAGINAR project with new screenshots"
```

### Aggiornare contenuti

```bash
git commit -m "Update CV: Add La Salle BCN Master degree"
git commit -m "Update About section with new bio"
git commit -m "Fix typo in POSTHUMAN description"
```

### Design changes

```bash
git commit -m "Improve mobile responsive layout"
git commit -m "Add smooth scroll animations"
git commit -m "Update color scheme in Hero section"
```

### Bug fixes

```bash
git commit -m "Fix: Project images not loading on mobile"
git commit -m "Fix: CV print layout on Safari"
git commit -m "Fix: Filter animation glitch"
```

---

## 🌿 Branches (Opzionale — Per features grandi)

### Creare branch per nuova feature

```bash
# Crea e passa a nuovo branch
git checkout -b feature/unit9-projects

# Lavora sulla feature, poi commit
git add .
git commit -m "Add UNIT9 projects section"

# Push branch a GitHub
git push -u origin feature/unit9-projects
```

### Merge branch in main

```bash
# Torna a main
git checkout main

# Merge feature branch
git merge feature/unit9-projects

# Push a GitHub
git push

# Elimina branch locale (opzionale)
git branch -d feature/unit9-projects
```

**Vercel crea preview URL automatici per ogni branch!**

---

## 🔙 Rollback — Annullare modifiche

### Annullare modifiche non ancora committate

```bash
# Vedi cosa è cambiato
git status

# Annulla modifiche a un file specifico
git checkout -- components/Projects.tsx

# Annulla TUTTE le modifiche
git reset --hard
```

### Tornare a un commit precedente

```bash
# Vedi storico commit
git log --oneline

# Torna a un commit specifico (SOSTITUISCI abc1234)
git reset --hard abc1234

# Force push (ATTENZIONE: sovrascrive storia!)
git push -f
```

**⚠️ Usa con cautela!** Force push cancella storia.

---

## 🔍 Comandi Utili

### Vedere lo stato corrente

```bash
# File modificati
git status

# Differenze non ancora committate
git diff

# Storico commit
git log --oneline

# Ultimi 5 commit
git log --oneline -5
```

### Informazioni repository

```bash
# URL remote GitHub
git remote -v

# Branch corrente
git branch

# Tutte le branch (locale + remote)
git branch -a
```

---

## 🐛 Troubleshooting

### "Permission denied (publickey)"

**Fix: Usa HTTPS invece di SSH**

```bash
# Controlla URL remote
git remote -v

# Se vedi git@github.com, cambia in HTTPS
git remote set-url origin https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git
```

### "fatal: refusing to merge unrelated histories"

**Fix:**

```bash
git pull origin main --allow-unrelated-histories
```

### "Your branch is behind 'origin/main'"

**Fix:**

```bash
# Pull changes da GitHub
git pull

# Risolvi conflitti se ci sono
# Poi commit e push
git add .
git commit -m "Merge remote changes"
git push
```

### "Cannot push to protected branch"

**Fix:** Vai su GitHub → Settings → Branches → rimuovi protezione da `main`

---

## ⚡ Quick Commands Cheat Sheet

```bash
# Status
git status

# Add all
git add .

# Commit
git commit -m "Message"

# Push
git push

# Pull
git pull

# Clone (per scaricare repo esistente)
git clone https://github.com/YOUR-USERNAME/stefania-solari-portfolio.git

# History
git log --oneline

# Undo changes
git reset --hard

# Create branch
git checkout -b branch-name

# Switch branch
git checkout main
```

---

## 📚 Resources

- **Git Docs**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Guides**: [docs.github.com](https://docs.github.com)
- **Git Cheat Sheet**: [education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)

---

## 🎉 Typical Workflow

```bash
# 1. Modifica file in VS Code

# 2. Testa in locale
npm run dev

# 3. Se tutto ok, build
npm run build

# 4. Commit e push
git add .
git commit -m "Add new project: [Nome]"
git push

# 5. Vercel auto-deploys!
# Check URL: https://your-project.vercel.app
```

---

**Happy coding!** 🚀✨
