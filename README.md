# PROJET_REACT

Mon premier projet React, monté avec Vite et stylé avec Tailwind CSS.

## Stack

- [React 19](https://react.dev)
- [Vite](https://vite.dev) pour le serveur de développement et le build
- [Tailwind CSS 4](https://tailwindcss.com), branché via le plugin `@tailwindcss/vite`
- ESLint pour vérifier le code

## Lancer le projet

Il faut [Node.js](https://nodejs.org) installé sur la machine.

```bash
git clone https://github.com/khadidiamahamane/PROJET_REACT.git
cd PROJET_REACT
npm install
npm run dev
```

Le site s'ouvre ensuite sur l'adresse affichée dans le terminal (en général http://localhost:5173).

## Commandes utiles

| Commande | Ce qu'elle fait |
|---|---|
| `npm run dev` | Lance le serveur de développement, la page se recharge à chaque modification |
| `npm run build` | Construit la version finale du site dans le dossier `dist/` |
| `npm run preview` | Affiche la version construite, pour la vérifier avant de la mettre en ligne |
| `npm run lint` | Vérifie le code avec ESLint |

## Organisation des fichiers

```
src/
├── main.jsx      # Point d'entrée, monte l'application dans index.html
├── App.jsx       # Composant principal
├── App.css       # Styles du composant principal
├── index.css     # Styles globaux, importe Tailwind
└── assets/       # Images et logos
```
