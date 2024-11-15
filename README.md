# CRUD Livres avec Node.js, Express et Elasticsearch

## Description
API RESTful pour gérer un catalogue de livres avec Node.js, Express et Elasticsearch. Permet d'ajouter, de récupérer et de rechercher des livres.

## Installation

1. Clonez ce repository :
   
   git clone https://github.com/BehArdieu/SearchEgineProject.git
   cd SeSearchEgineProject

2. Installez les dépendances :

npm install

3. Démarrer l'application

docker compose up -d

npm start

4. Routes API

POST /livre : Ajouter un livre

GET /livre/{isbn}: Récupérer un livre par ISBN

GET /livres : Récupérer tous les livres

GET /livres/recherche?q={query} : Recherche de livres

