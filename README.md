# **Saffy** Test technique Nicomatic

Votre gestionnaire de mots de passe privé, sécurisé et à l'écoute de vos besoins !

NB : Il manque le lien entre le front et le back. La base de donne ne permet ni de recuperer ni de creer des mots de passes.

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

- Regler le probleme de recuperation des mots de passe a la base de donne.
- Des commentaires plus précis dans mon code.
- L'ajout d'un mot de passe créé automatiquement.
- La création d'utilisateurs qui auraient chacun leurs mots de passe précis.
- Améliorer le visuel du site, changer le logo de la page.
