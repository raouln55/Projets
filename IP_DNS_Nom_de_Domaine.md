# Adresse IP, DNS, Nom de domaine - Comment Indentifier mon serveur?

## Définitions

* **Adresse IP** : `IP` pour **Internet Protocol**. C'est une adresse numérique permanente ou provisoire qui permet d'identifier les appareils connectés à un réseau IP. L'adresse IP est à la base du routage des données sur Internet.

* **DNS** : **Domain Name Protocol** ou **Système de noms de domaines**. C'est le service informatique qui est utilisé pour traduir eles noms de domaine internet en adresse IP ou autres types d'enregistrements.

* **Nom de Domaine** : **NDD** c'est l'identifiant de domaine internet. Le Domaine est un ensemble d'ordinateurs reliés à Internet avec des caractéristiques communes.

- Exemple : `.fr` est le nom de domaine de l'ensemble des ordinateurs hébergeant des organisations ou des activités enregistrées auprès de l'[Association Française pour le Nommage Internet en Coopération (AFNIC)] qui est le registre responsable du domaine de premier niveau `.fr`


## Un peu d'histoire ...

### La Génèse
En 1962, dans un contexte de Guerre froide, L'US Air Force demande à un groupe de chercheur de concevoir un réseau de communication capable de résister à une frappe nucléaire afin de pouvoir riposter.
La solution est de créer un système décentralisé qui permettrait au réseau de continuer à fonctionner même si une ou plusieurs machines sont touchées. L'idée est d'avoir un système où chaque machine, maillon d'un réseau en toile d'araignée, chercherait à l'aide de paquets de données dynamiques, la route la plus courte possible d'elle-même à une autre machine, et où elle patienterait en cas de "bouchons".

### Les Fondations

#### 1969 : l'Arpanet

Création de l'Arpanet, réseau décentralisé (50kbps et utilisait le `NCP` **"Network Control Protocol"** qui comprend quatre grands centres universitaires américains:

* UCLA (Université de Californie à Los Angeles)
* SRI (Institut de recherche de Stanford)
* UCSB (Université de Californie à Santa Barbara)
* l'Université de l'Utah

**Le 7 Avril 1969, date de la publication de la première** [RFC - "Request For Comment"] (Ce sont les documents qui ont vocation à être les standards d'Internet : Que doivent contenir les en-têtes d'un courrier électronique, etc...) **est le jour qui a été choisi pour célébrer l'anniversaire d'Internet**

#### 1971 : Le courrier électronique

Envoi du premier courrier électronique par son inventeur Ray TOMLINSON. c'est lui aussi qui choisit l'arobase @ (dont l'origine reste mystérieuse) comme séparateur pour les adresses électroniques.

* " QWERTYUIOP "

#### 1973 : TCP/IP

Développement du protocole TCP/IP **Transition Control Protocol/Internet Protocol** adopté pour l'Arpanet en 1976 et qui est l'une des pierres d'angle de l'Internet actuel.

C'est en 1974 que le nom **"Internet" sera mentionné pour la première fois**.

#### 1983 : Le DNS

Au début, les informations nécessaires à la connection des machines entre elles (conversion nom <-> adresse) sont contenues dans un fichier hosts.txt qui est maintenu par le **Network Information Center (NIC)** de l'Institut de recherche de Stanford. Chaque administrateur d'une machine reliée à l'Arpanet doit envoyer ses modifications au NIC qui les centralise et redistribue périodiquement le hosts.txt mis à jour.

Au fur et à mesure du développement de l'Arpanet, le système devient trop lourd à gérer. le NIC ne peut plus faire face à la charge réseau et des problèmes de collision pouvant mettre en danger le bon fonctionnement de l'Arpanet apparaissent (deux machines qui ont le même nom).

En 1983, pour résoudre ce problème sont rédigés les RFC 882 et 883 : le **DNS "Domain Name System"** est inventé. C'est une base de données distribuée qui permet une gestion locale des noms de domaine, tout en rendant l'information disponible à tous. La base de données est divisée en zones. Pour chaque zone, un ou plusieurs serveurs de noms (name servers en anglais) répond aux requêtes des résolveurs. Les résolveurs sont des programmes qui communiquent entre les programmes utilisés par une machine et les serveurs de noms, et permettent de faire le lien entre nom d'une machine (clipper.ens.fr par exemple et adresse IP).

En 1984 se mettent en place les « top level domains », c'est-à-dire les suffixes comme .com, .gov, .net ou encore .org. 

## 







