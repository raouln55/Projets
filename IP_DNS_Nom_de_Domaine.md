# Adresse IP, DNS, Nom de domaine - Comment Indentifier mon serveur?

## Définitions

* **Adresse IP** : `IP` pour **Internet Protocol**. C'est une adresse numérique permanente ou provisoire qui permet d'identifier les appareils connectés à un réseau IP. L'adresse IP est à la base du routage des données sur Internet.

* **`DNS`** : **Domain Name Protocol** ou **Système de noms de domaines**. C'est le service informatique qui est utilisé pour traduire les noms de domaine internet en adresse IP ou autres types d'enregistrements.

* **Nom de Domaine** : **NDD** c'est l'identifiant de domaine internet. Le Domaine est un ensemble d'ordinateurs reliés à Internet avec des caractéristiques communes.

- Exemple : `.fr` est le nom de domaine de l'ensemble des ordinateurs hébergeant des organisations ou des activités enregistrées auprès de l'**Association Française pour le Nommage Internet en Coopération (AFNIC)** qui est le registre responsable du domaine de premier niveau `.fr`


## Un peu d'histoire ...

### La Génèse
En 1962, dans un contexte de Guerre froide, L'US Air Force demande à un groupe de chercheur de concevoir un réseau de communication capable de résister à une frappe nucléaire afin de pouvoir riposter.
La solution est de créer un système décentralisé qui permettrait au réseau de continuer à fonctionner même si une ou plusieurs machines sont touchées. L'idée est d'avoir un système où chaque machine, maillon d'un réseau en toile d'araignée, chercherait à l'aide de paquets de données dynamiques, la route la plus courte possible d'elle-même à une autre machine, et où elle patienterait en cas de "bouchons".

### Les Fondations

#### 1969 : l'Arpanet

Création de l'Arpanet, réseau décentralisé (50kbps et utilisait le **NCP "Network Control Protocol"** qui comprend quatre grands centres universitaires américains:

* UCLA (Université de Californie à Los Angeles)
* SRI (Institut de recherche de Stanford)
* UCSB (Université de Californie à Santa Barbara)
* l'Université de l'Utah

**Le 7 Avril 1969, date de la publication de la première** **RFC - "Request For Comment"** (Ce sont les documents qui ont vocation à être les standards d'Internet : Que doivent contenir les en-têtes d'un courrier électronique, etc...) 
**C'est le jour qui a été choisi pour célébrer l'anniversaire d'Internet**

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

En 1984 se mettent en place les « top level domains », c'est-à-dire les suffixes comme `.com`, `.gov`, `.net` ou encore `.org`. 

## Comment ça marche ?

### L'adresse IP

Il existe 2 types d'adresses IP:
* IP v4 sur 32 bits : C'est la version la plus utilisée généralement représentée en notation décimale avec 4 nombres compris entre 0 et 255, séparés par des points
- Exemple : `172.16.254.1`

* IP V6 sur 128bits : représentée avec des chiffres hexadécmaux et binaires
- Exemple : `2001:0DB8:AC10:FE01:0000:0000:0000:0000:0000:0000:0000:0000:0000:0000:0000:0000`


* Une adresse IP par interface avec le réseau de tout matériel informatique (routeur, ordinateur, smartphone, modem ADSL, imprimante réseau, etc...) s'il est connecté à un réseau utilisant l'Internet Protocol comme protocole de communication.

* Assignation soi individuelle par administration du réseau local, soi automatique via protocole **DHCP "Dynamic Host Configuration Protocol"**

* Un ordinateur peut avoir plusieurs adresses IP si plusieurs interfaces. Une interface peut aussi avoir plusieurs adresses IP.

* Chaque paquettransmis par protocole IP contient l'adresse de l'émetteyr ainsi que l'adresse IP du destinataire.

* Les adresses IPv4 sont dites publiques si elles sont enregistrées et routables sur Internet. Elles sont unique mondialement.

* Les adresses privées ne sont utilisables que dans un réseau local et ne doivent être uniques que dans ce réseau. Les adresses privées sont transformées en adresse publiques notamment par les box internet qui permettent d'accéder à Internet par le réseau privé

## Adresse IP et Nom de domaine

Dans la plupart des cas l'utilisateur ne donne pas son adresse IP pour se connecter à un serveur mais son nom de domaine (par exemple www.wikipedia.org). Le nom de domaine **(NDD)** est ensuite transformé en adresse IP par l'ordinateur de l'utilisateur en faisant appel au système de noms de domaine **(NDS)**. Ce n'est qu'une fois l'adresse obtenue qu'il est possible d'initier une connexion. 

Les noms de domaines ont certains avantages sur les adresses IP:
- Ils sont plus lisibles
- Ils ne sosnt pas impliqués dans le routage donc ils peuvent être conservés même en cas de réorganisation de l'infrastructure réseau
- Ils n eson pas limités à quelques milliards comme les adresses IPv4

## DNS - Système de Noms de Domaine




















