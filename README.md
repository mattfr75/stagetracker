# StageTracker — Prototype Web

Prototype interactif de l'application StageTracker.
Développé sans Figma — Claude Code + Pencil.

## Déploiement sur Vercel

### Option A — Drag & Drop (le plus simple)
1. Va sur [vercel.com](https://vercel.com) et connecte-toi
2. Clique sur **"Add New Project"**
3. Choisis **"Upload"** (ou drag-and-drop le dossier)
4. Dépose ce dossier entier
5. Vercel détecte automatiquement un site statique → **Deploy**
6. Tu obtiens une URL type `stagetracker.vercel.app`

### Option B — Via GitHub (recommandé pour les mises à jour)
```bash
# 1. Créer un repo GitHub
git init
git add .
git commit -m "StageTracker prototype v1"
git remote add origin https://github.com/TON_USERNAME/stagetracker.git
git push -u origin main

# 2. Sur Vercel → Import Git Repository → sélectionner le repo
# → Deploy automatique à chaque push
```

## Structure
```
stagetracker/
├── index.html          # App principale (7 écrans)
├── css/
│   ├── tokens.css      # 41 design tokens Hybrid Fox
│   └── styles.css      # Composants et styles globaux
├── js/
│   └── app.js          # Navigation et interactions
└── assets/
    └── logo.png        # Logo StageTracker
```

## Écrans disponibles
- **Splash** — écran d'accueil
- **Tracker** — dashboard candidatures + stats
- **Offres** — agrégateur d'offres
- **Détail candidature** — fiche complète + timeline + documents
- **Détail offre** — fiche offre + actions
- **Profil** — profil utilisateur
- **Agenda** — placeholder v1

## Design System — Hybrid Fox
Tokens extraits directement du fichier `StageTracker.pen`.
Mode Light et Dark disponibles (toggle en haut à droite).

---
*Mathieu Dehgan · Master DPSN · Gobelins 2025–2026*
