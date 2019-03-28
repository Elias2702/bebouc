This is a team assignment in the context of a web development training program.

# Libdev

Mock-up: https://www.figma.com/file/bYnVG74TGyxC7Z42F8Z0MBSS/Biblioth%C3%A8que?node-id=0%3A1




# Consignes: Node.JS: BeCode Bookshelf

> A simple bookshelf/library manager, for our internal usage

* * *

## Introduction

Nous avons notre propre petite bibliothèque au sein de BeCode Liège, et pour le moment, nous gérons le tout de manière artisanale.

Pourquoi ne pas développer notre propre outil de gestion de bibliothèque ?

Dans le cadre de ce projet, considérez que **je suis votre client**. J'ai des besoins précis, je sais vaguement ce que je veux, et je suis à votre disposition à tout moment pour écouter vos suggestions ou répondre à vos questions.

## Cahier des charges

### Fonctionnalités

Nous avons besoin de manipuler les types de données suivants :

- des **Utilisateurs**
- des **Livres**
- des **Reviews**
- des **Emprunts**

#### Notes

##### Utilisateurs

Un utilisateur est soit un *coach*, soit un *junior*.

Il peut :

- se connecter/se déconnecter
- écrire une review de livre
- emprunter un livre
- consulter la liste des livres, leurs reviews et savoir *qui* l'a en sa possession (et l'historique d'emprunt)
- (*coach* **uniquement**) encoder un nouvel utilisateur
- (*coach* **uniquement**) encoder un nouveau livre

##### Livres

Un livre est defini par son titre, son numéro ISBN, sa langue, son auteur et son format (*physique*, *ebook*, *les deux*).

##### Reviews

Une review est définie par son auteur, le livre cible, une note sur 5 (en nombres entiers : `0`, `1`, `2`, `3`, `4`, `5`) sa date et un commentaire en texte libre.

##### Emprunts

Un emprunt est défini par son emprunteur, le livre cible, sa date de départ et son retour.

### Contraintes techniques

Vous êtes libres au niveau design et, en fonction, de l'ajout de fonctionnalités supplémentaires (pour peu que celles exprimées ci-avant soient respectées).

#### Mockups & Design

Nous ne vous avons pas prévu de design pour ce projet, ni même de mockups.

Après avoir pris connaissance de cet énoncé, la première étape de votre travail de groupe devrait être la conception de vos mockups.

> 👋 **HEY!** il est de bon ton de présenter ses mockups au client avant de commencer la phase technique d'un projet. Je ne courerai pas derrière vous, donc, *à bon entendeur…*

Concernant le design, je vous laisse carte blanche, **mais…** n'oubliez pas que vous allez être les premiers utilisateurs de cet outil : concevez et *designez* un outil que vous serez contents d'utiliser.

#### Stack technique

Vous avez par contre une **stack technique** à respecter.

##### Back-end

Une API REST utilisant :

- **Node.js**
- **MongoDB**

##### Front-end

Une `Single Page App` utilisant :

- **React**

#### Toolchain / Dev Env

Le projet est donc divisé en deux parties, le back-end et le front-end.

Comme il s'agit de votre premier _gros_ projet node+react, on vous a préparé un environnement de développement tout fait et qui pourra vous servir d'exemple pour la suite.

> ☝️**NOTE:** ce projet est idéal pour essayer le workflow *git-flow*. Discutez-en entre vous.

##### Environnement

Le projet vous est fourni avec un fichier `docker-compose.yml` et sa documentation en markdown, le document [`docker-readme.md`](./docker-readme.md).

Tout le code du projet sera placé dans le dossier `src`. Des outils sont configurés pour *compiler* ces fichiers vers le dossier `bin`.  

> ⚠️ **ATTENTION :** ne modifiez **jamais** le contenu du dossier bin ! Il risque d'être remplacé lors de votre prochaine compilation !

##### Back-end

Pour la partie back-end, votre code est compilé avec [BabelJS](https://babeljs.io). Le code de la partie back-end se trouve dans `src/server`.

Nous vous avons préparé un tout petit bout de code fonctionnel, qui configure un serveur **express**, une route `GET /hello` et le *middleware* **static** pour afficher les fichiers du client.

Vous êtes libres de garder cette base ou de la réécrire pour votre projet.

> ☝️ **NOTE :** nous vous présenterons rapidement BabelJS en début de projet.
 
###### Compilation

Pour compiler votre code back-end, deux commandes sont possibles :

- `npm run build:server` (compile votre code)
- `npm run work:server` (compile puis observe vos fichiers pour les recompiler en cas de changements)

##### Front-end

Pour la partie front-end, votre code est compilé/packagé avec [Webpack](https://webpack.js.org/). Le code de la partie front-end se trouve dans `src/client`.

> ☝️ **NOTE :** webpack est un outil extrêmement puissant mais qui peut aussi très vite être *complexe*. Il n'est pas forcément dit que nous aurons l'occasion de le découvrir en détail.  
> Il existe énormément de bonnes ressources à ce sujet, qui peut même être l'objet d'un passionant workshop pour les pâturages.

Nous vous avons préparé un tout petit bout de code fonctionnel, qui affiche un composant React contenant le texte "*Hello, World*".

Vous êtes libres de garder cette base ou de la réécrire pour votre projet.

> ⚠️ **ATTENTION :** *à priori*, vous n'aurez pas à modifier le fichier `index.html`, à part peut-être pour ajouter une feuille de styles CSS. Faites attention à ne pas modifier le contenu du `<body>` de ce fichier.
 
###### Compilation

Pour compiler votre code front-end, deux commandes sont possibles :

- `npm run build:client` (compile votre code)
- `npm run work:client` (compile puis observe vos fichiers pour les recompiler en cas de changements)

##### Prettier & ESLint

Le projet est configuré pour utiliser [Prettier](https://prettier.io) & [ESLint](https://eslint.org).

> ☝️ **NOTE :** nous vous présenterons rapidement Prettier & ESLint en début de projet.

###### Dans votre éditeur de texte

Vous pouvez configurer votre éditeur de texte pour exécuter Prettier & ESLint à chaque enregistrement de fichier, ou encore pour vous indiquer en direct les erreurs et avertissements sur votre code.  
Faites une petite recherche sur Google pour trouver la meilleure solution pour votre éditeur.

###### Compilation

Pour vérifier vos fichiers avec ESLint & Prettier, vous pouvez également lancer la commande `npm run lint`.

###### Hooks git

Le projet a également été configuré avec un *hook* de **precommit** pour git : lorsque vous commitez vos fichiers, ESLint & Prettier sont exécutés et, en cas d'erreur, le commit est annulé, pour vous permettre de corriger les erreurs.  
Ainsi, vous avez la certitude que vous commitez des fichiers exempts de problèmes potentiels.

#### Déploiement

Nous attendons un projet **fonctionnel** et *déployé*.  
Une des solutions parmi les plus simples est d'utiliser [**Heroku**](https://www.heroku.com). Pour l'hébergement de votre base de données, Heroku fonctionne nativement avec [**mLab**](https://mlab.com) (anciennement *MongoLab*).

> 🤞**NOTE:** il est possible, comme pour le projet Laravel, que Heroku ne vous permette pas d'activer le service mLab directement depuis son interface. Vous devrez alors passer *directement* par le site de mLab.

* * *

## Deadline & modalités

Le projet doit être accessible en ligne le **lundi 18 février à 13h29**.  
Nous attendons un mail de chaque groupe avec un lien vers le repository et un lien vers le site en production.

Bon travail.
