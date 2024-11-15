# CRUD Livres avec Node.js, Express et Elasticsearch

## Description
API RESTful pour gérer un catalogue de livres avec Node.js, Express et Elasticsearch. Permet d'ajouter, de récupérer et de rechercher des livres.

## Installation

1. Clonez ce repository :
   
   git clone https://github.com/BehArdieu/SearchEgineProject.git
   
   cd SearchEgineProject

3. Installez les dépendances :

npm install
edited
3. Démarrer l'application

docker compose up -d

npm start

4. Routes API

POST /livres : Ajouter un livre

GET /livres/{isbn}: Récupérer un livre par ISBN

GET /livres : Récupérer tous les livres

GET /livres/recherche?q={query} : Recherche de livres

PUT /livres/{isbn}: Modifier un livre

DELETE /livres/{isbn}: Supprimer un livre


# Equipes :
 
1. Borel KAMSU
2. Comlan ALOTIN
3. El Hadj Oumar TALL
4. Gael BELLANGER
5. Gaetan KERVAREC
6. Jules GREGOIRE
7. Rabie GHARGHAR


