# 📄 Portail Documentaire QR-Code (Millenium Group)

Application web professionnelle moderne, responsive et performante développée avec **React 19**, **Vite** et **TailwindCSS (v4)**. Ce portail permet de visualiser et télécharger des documents PDF directement dans le navigateur, optimisé pour un accès rapide via scan de QR Codes.

## 🚀 Fonctionnalités
- 📱 **100% Responsive** : Expérience fluide sur mobiles, tablettes et ordinateurs de bureau.
- 🎨 **Design Premium** : Interface épurée avec polices modernes, dégradés subtils, ombres douces et micro-animations au survol.
- 📂 **Multi-documents** : Gestion simple et centralisée d'une liste de fichiers PDF (brochures, catalogues, grilles tarifaires).
- ⚙️ **Fallback Intelligent** : Affichage natif dans le navigateur avec un message et un bouton de secours si l'appareil ne supporte pas l'intégration PDF.
- ⚡ **SEO & Performance** : Chargement instantané, métadonnées dynamiques (balises de titre et de description), et architecture d'accessibilité ARIA.
- ☁️ **Prêt pour le déploiement Vercel** : Redirection des routes SPA configurée via `vercel.json` pour éviter les erreurs 404 sur les liens directs.

---

## 🛠️ Installation et Démarrage

### Prérequis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- npm ou yarn

### 1. Installation des dépendances
Cloner ou copier les fichiers du projet, puis exécuter à la racine :
```bash
npm install
```

### 2. Lancement en mode développement
Pour lancer le serveur de développement local :
```bash
npm run dev
```
L'application sera accessible par défaut sur [http://localhost:5173](http://localhost:5173) (ou le port suivant libre).

### 3. Build pour la production
Pour générer les fichiers optimisés pour la production :
```bash
npm run build
```
Les fichiers compilés seront placés dans le dossier `/dist`.

---

## 📤 Déploiement sur Vercel

Ce projet est entièrement configuré pour être déployé sur **Vercel** sans aucune modification de code.

### Option A : Déploiement en ligne de commande (CLI Vercel)
1. Installez le CLI Vercel si ce n'est pas déjà fait : `npm install -g vercel`
2. Lancez le déploiement depuis la racine du projet :
   ```bash
   vercel
   ```
3. Suivez les instructions à l'écran. Pour le déploiement final en production :
   ```bash
   vercel --prod
   ```

### Option B : Déploiement via GitHub / GitLab / Bitbucket
1. Poussez votre projet sur un dépôt Git distant.
2. Connectez-vous sur votre tableau de bord [Vercel](https://vercel.com/).
3. Cliquez sur **Add New > Project**, puis importez votre dépôt Git.
4. Laissez les paramètres par défaut (Framework Preset: **Vite**).
5. Cliquez sur **Deploy**.

> [!NOTE]
> Le fichier [vercel.json](file:///Users/MacBook/Documents/Momo/Millenium/vercel.json) à la racine assure que toutes les routes dynamiques comme `/document/catalogue` pointent correctement vers `index.html` pour que le routage React s'effectue côté client.

---

## ➕ Ajouter un Nouveau Document PDF

La gestion des documents est centralisée et ne nécessite pas de base de données. Pour ajouter un nouveau document, suivez ces 3 étapes simples :

### 1. Ajouter le fichier PDF
Déposez votre fichier PDF dans le dossier public :
`/public/pdfs/votre-document.pdf`

### 2. Mettre à jour les données
Ouvrez le fichier [src/data/documents.js](file:///Users/MacBook/Documents/Momo/Millenium/src/data/documents.js) et ajoutez un nouvel objet dans le tableau `documents` :

```javascript
{
  slug: "votre-slug", // Utilisé dans l'URL : /document/votre-slug
  title: "Nom du document",
  description: "Description courte du contenu du document.",
  pdf: "/pdfs/votre-document.pdf", // Lien relatif vers le fichier PDF
  logo: "/logo.png" // Chemin vers le logo de l'entreprise dans /public
}
```

### 3. Générer le QR Code
Pour lier ce document à un QR Code, générez un QR Code pointant vers l'URL finale de votre domaine déployé :
`https://votre-domaine.com/document/votre-slug`

---

## 📁 Architecture des dossiers

```
├── public/
│   ├── logo.png             # Logo de l'entreprise
│   └── pdfs/                # Dossier contenant tous les fichiers PDF statiques
│       ├── catalogue.pdf
│       ├── brochure.pdf
│       └── tarifs.pdf
├── src/
│   ├── components/          # Composants UI réutilisables
│   │   ├── Header.jsx       # En-tête avec logo et navigation
│   │   ├── Footer.jsx       # Pied de page avec copyright
│   │   ├── PdfViewer.jsx    # Visualisateur PDF avec loader et fallback
│   │   └── DownloadButton.jsx # Bouton de téléchargement accessible
│   ├── data/
│   │   └── documents.js     # Données statiques des documents
│   ├── pages/               # Pages de l'application
│   │   ├── Home.jsx         # Liste des documents disponibles
│   │   ├── DocumentViewer.jsx # Consultation individuelle d'un PDF
│   │   └── NotFound.jsx     # Page d'erreur 404 personnalisée
│   ├── router/
│   │   └── index.jsx        # Configuration des routes React Router
│   ├── App.jsx              # Composant racine
│   ├── main.jsx             # Point d'entrée de l'application
│   └── index.css            # Styles généraux + configuration TailwindCSS
├── vercel.json              # Fichier de configuration pour le routage Vercel
├── vite.config.js           # Configuration Vite
└── package.json             # Dépendances et scripts
```
# pp-mory
