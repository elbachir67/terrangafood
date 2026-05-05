# Rapport de tests -- Lab 1

 ## É quipe : [ Team PKMDK]
 ## Testeur : [ Princesse] ( QA )
|
|Test	                          |Résultat            |	Notes
1	POST commande valide          |	201 Created	OK     |, commande créée avec succès
2	POST commande sans client     |	400 Bad Request    |	validation champ client OK
3	GET toutes les commandes      |	200 OK	           |liste des commandes récupérée
4	GET commande par ID	          |  200 OK	           |populate restaurant + plats OK
5	GET commande ID inexistant    |	404 Not Found	   |erreur correctement gérée
6	PATCH en attente → confirmée  |200 OK              |	transition valide
7	PATCH confirmée → en livraison|	200 OK	           |  transition valide
8	PATCH en livraison → livrée	  |200 OK	           |cycle complété
9	PATCH transition interdite	  |400 Bad Request	   |transition métier bloquée
10	PATCH commande livrée	      |400 Bad Request	   |modification interdite après livraison
11	DELETE commande	              |200 OK              |	suppression (si activée)
12	Populate restaurant visible	  |200 OK	           |restaurant bien affiché (objet complet)
13	Populate plats visible	      |200 OK	           |plats bien affichés (objet complet)