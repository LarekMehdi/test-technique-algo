# test-technique-algo

## STRING

Cette partie regroupe des fonctions utilitaires pour manipuler des chaînes de caractères. L’objectif était de répondre aux énoncés de manière claire, réutilisable et maintenable.


- Toutes les méthodes sont statiques dans une classe abstraite StringAlgo.
- Permet de les utiliser directement sans instancier la classe.
- Cela correspond à des utilitaires “purs” qui ne dépendent pas d’un état interne.
- Les entrées sont typées (string, number…) pour profiter de la sécurité de TypeScript et éviter des erreurs runtime.
- Les méthodes sont isolées, chacune fait une seule chose (Single Responsibility), ce qui facilite les tests unitaires.

**Approche globale**

    - Utilisation de méthodes simples avec boucles et fonctions natives JS pour assurer la compatibilité et la performance.

    - Les fonctions sont conçues pour être réutilisables dans d’autres projets, ce qui permet de créer une véritable bibliothèque d’algorithmes pour chaînes de caractères.

    - Les tests peuvent être facilement automatisés avec des unit tests, car chaque fonction est déterministe et pure.

## OBJECT 2

Cette partie regroupe des fonctions utilitaires pour manipuler des objets JavaScript. L’objectif était de créer des fonctions génériques, réutilisables et faciles à maintenir pour traiter différents scénarios liés aux objets.


- Toutes les méthodes sont statiques dans une classe abstraite ObjectAlgo.
- Permet de les utiliser directement sans instancier la classe.
- Chaque fonction agit sur ses paramètres sans dépendre d’un état interne.
- Les entrées et sorties sont typées pour exploiter la sécurité de TypeScript, et éviter les erreurs de type.
- Les fonctions sont isolées et à responsabilité unique, ce qui facilite leur compréhension et leur test unitaire.

**Approche globale**

    - Utilisation des fonctions natives JS (Object.keys, Object.values, reduce, filter, etc) pour garantir performance et compatibilité.

    - Fonctions de transformation (transformValues, mergeObjects) et d’analyse (getObjectStats, countValues) conçues pour être réutilisables dans plusieurs projets, comme de vrais utilitaires métier.
