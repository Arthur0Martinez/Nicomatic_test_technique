# **Saffy** Test technique Nicomatic

Votre gestionnaire de mots de passe privé, sécurisé et à l'écoute de vos besoins !

NB : Les commentaires dans le code sont en français, ne connaissant pas vos conventions d'écriture.

## À propos

Saffy est un gestionnaire de mots de passe sécurisé.

## Technologies

- **Frontend** : React
- **Backend** : Node.js, Express
- **Base de données** : PostgreSQL
- **ORM** : Sequelize
- **Chiffrement** : Argon2
- **Containerisation** : Docker

## Installation
Cloner le depot.

Naviguez dans le dossier backend et installez les dépendances :

    ```bash
    cd backend
    npm install
    ```
La meme chose avec le dossier frontend :

    ```bash
    cd frontend
    npm install
    ```
Lancer docker-compose a la racine du projet :

    ```bash
    docker-compose up
    ```
## Utilisation

Après avoir installé et démarré le projet, ouvrez un navigateur et allez à `http://localhost:3000`.
Ajouter, modifier et supprimer vos mots de passe via l'interface utilisateur.

## Ce que j'aurais ajouté avec plus de temps

- Des commentaires plus précis dans mon code.
- L'ajout d'un mot de passe créé automatiquement.
- La création d'utilisateurs qui auraient chacun leurs mots de passe précis.
- Améliorer le visuel du site, changer le logo de la page.
