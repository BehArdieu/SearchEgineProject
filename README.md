CRUD Livres avec Node.js, Express et Elasticsearch

# Description
Ce projet est une API RESTful développée avec Node.js, Express, et Elasticsearch, permettant de gérer un catalogue de livres. L'API offre des fonctionnalités pour ajouter, récupérer, modifier, supprimer et rechercher des livres. Elle est idéale pour explorer les possibilités de recherche avancée offertes par Elasticsearch.

# Installation
1. Clonez le dépôt
Clonez le dépôt depuis GitHub et accédez au répertoire du projet :
```bash
git clone https://github.com/BehArdieu/SearchEgineProject.git
cd SearchEgineProject
```
2. Installez les dépendances
Installez les modules nécessaires avec npm :
```bash
npm install
```
3. Démarrez l'application
Assurez-vous que Docker est installé pour exécuter Elasticsearch. Démarrez le conteneur Elasticsearch et l'application avec les commandes suivantes :
```bash
docker compose up -d
npm start
```
L'application sera disponible sur http://localhost:3000.
# Routes API
1. Créer l'index Elasticsearch
**URL** : GET /creation-index
**Description** : Crée l'index Elasticsearch pour les livres si celui-ci n'existe pas déjà.
2. Ajouter un livre
**URL** : POST /
**Description** : Ajoute un nouveau livre dans Elasticsearch.
3. Récupérer tous les livres
**URL** : GET /
**Description** : Récupère tous les livres indexés dans Elasticsearch.
4. Rechercher des livres
**URL** : GET /recherche?q={query}
**Description** : Effectue une recherche textuelle sur les champs des livres (titre, auteur, genre, description).
5. Récupérer un livre par ISBN
**URL** : GET /:isbn
**Description** : Récupère un livre unique à partir de son ISBN.
6. Modifier un livre par ISBN
**URL** : PUT /:isbn
**Description** : Met à jour les informations d'un livre existant.
7. Supprimer un livre par ISBN
**URL** : DELETE /:isbn
**Description** : Supprime un livre à partir de son ISBN.
8. Technologies Utilisées
- **Node.js** : Backend JavaScript.
- **Express** : Framework web rapide et minimaliste.
- **Elasticsearch** : Moteur de recherche et d'analyse distribué.
- **Docker** : Conteneurisation d'Elasticsearch.
- **CORS** : Gestion des requêtes cross-origin.
9. Contribution
Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à ouvrir une issue ou une pull request.
10. Équipe
- **Borel KAMSU**
- **Comlan ALOTIN**
- **El Hadj Oumar TALL**
- **Gael BELLANGER**
- **Gaetan KERVAREC**
- **Jules GREGOIRE**
- **Rabie GHARGHAR**
11. Licence
Ce projet est sous licence MIT.
