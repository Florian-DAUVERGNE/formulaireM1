# formulaireM1
Formulaire de connexion sécurisé développé avec NestJS.

## Table des matières
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)

## Prérequis
Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre système :

- Node.js
- npm
- MongoDB

## Installation
Pour installer et exécuter l'application localement, suivez ces étapes :

1. Clonez le dépôt Git :
   ```
   git clone git@github.com:Florian-DAUVERGNE/formulaireM1.git
   
   cd formulaireM1
   ```
2. Installez les dépendances du projet :
   ```
   npm install
   ```

## Configuration
Avant de lancer l'application, assurez-vous de configurer correctement les paramètres suivants :

- **Variables d'environnement** : Créez un fichier `.env` à la racine du projet et définissez l'addresse de votre base MongoDB avec la variable d'environnement `MONGO_URL` (comme montré dans `.env.example`)

- **Certificats SSL** : Assurez-vous que les certificats SSL (`cert.key` et `cert.crt`) sont présents dans le répertoire approprié et que les chemins vers ces fichiers sont correctement configurés dans le fichier `main.ts`.

## Utilisation
1. Démarrez le serveur de développement :
   ```
   npm run start:dev
   ```

2. Une fois l'application lancée, connectez vous à l'adresse suivante :
    ```
    https://localhost:3000
    ```
