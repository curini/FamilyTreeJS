# FamilyTree - new app

Application mobile hybride basée sur Angular et Capacitor, déployable sur Web, Android et iOS.

## Installation

```bash
git clone https://github.com/curini/new-app.git
cd new-app
npm install
```

## Déployer en local

```bash
npm run start
```

Par défaut, vous pouvez y accéder via l'url: `http://localhost:4200`

## Lancer sur Android

### Pré-requis

1. Android Studio installé

### Compilation du projet et synchronisation à l'aide de capacitor

```bash
npm run build
npx cap sync android
```

Puis lancer l'installation depuis Android Studio.
