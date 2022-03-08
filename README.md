# ![](images/entrepriseLogo.png)

# Dracovente, site Web en HTML/CSS

* **Équipe de développeurs :** [Gatien Depeyre](https://github.com/Gatien-Depeyre), [Mélanie Fressard](https://github.com/melanie-fressard), [Bastien Gavioli](https://github.com/BastienGavioli), [Enzo Viguier](https://github.com/enzo-viguier)

* **Aller sur le site Web** *[Dracovente](https://bastiengavioli.github.io/dracovente/)*
* **Cadre :** Soutenance de projet tutoré en fin de semestre 1
* **Date de rendu du projet :** 12 janvier 2021


## **Index**

* [Présentation](#presentation)
  * [Sujet](#sujet)
  * [Architecture minimale du site Web](#archiMin)
  * [Consignes générales](#consignesGenerales)
* [Présentation des pages](#presentationPages)
  * [Accueil](#accueil)
  * [Contact](#contact)
  * [Équipe](#equipe)
  * [Produit](#produit)
  * [Presse](#presse)
  * [F.A.Q.](#faq)
  * [Nous Rejoindre](#nousRejoindre)
  * [CSS global](#cssGlobal)
  
## <a name="presentation"></a> Présentation

### <a name="sujet"></a> Sujet
> Vous devez réaliser le site Web d’une entreprise fictive avec un unique produit / logiciel révolutionnaire fictif. La taille des groupes est de 4 personnes au plus.


### <a name="archiMin"></a> Architecture minimale du site Web
Il y aura un menu de navigation avec sous-menus commun à toutes vos pages. Voici une liste minimale de pages que vous devez avoir :

* **Produit** : Une page qui présente le produit avec *punchline*, photo, et le logo de l’entreprise (créé tel que vu dans le TD d’infographie);
* **Contact** : Une page formulaire  « contactez-nous », avec
  * les informations sur le demandeur (nom, prénom, adresse email, code postal, champs de sélection du pays),
  * une question « vous avez entendu parlé de nous via ? » avec plusieurs choix possibles
  * un champ « date à laquelle vous souhaitez être recontacté »
  * un champ texte libre de plusieurs lignes d’expression libre
  * Pour chacun des champs, un exemple sera donné, une vérification du format sera faite à l’aide des types prédéfinis en HTML5 (l’utilisation d’expressions régulières est optionnelle) ;

* **Équipe** : Une page qui présente toute la team du directeur au développeur avec photo et courte biographie pour chacun.
* **Presse** : Une page qui donne les contacts du responsable presse ainsi qu’une liste de communiqués de presse ;
* **Nous rejoindre** : Une page qui renvoie sur différentes fiches d’offres de postes de l’entreprise. Chaque offre de poste aura sa propre page Web présentant le métier du poste. L’item **Nous Rejoindre** du menu contiendra un sous-menu déroulant du type :
  * Métier 1
  * Métier 2
  * Métier 3
* **Une foire aux questions (FAQ)** : Une liste de questions en début de page qui pointe sur les différentes questions et réponses plus bas dans la page (utilisation des ancres).


### <a name="consignesGenerales"></a>Consignes générales

Le but pédagogique de ce projet est de mettre en application toutes les techniques que vous avez apprises lors des TDs. Voici donc les critères sur lesquels vous serez notés.
1. les codes CSS et HTML seront lisibles et correctement indentés. L’utilisation de CSS de style inline est interdit.
2. les codes CSS seront divisés entre plusieurs fichiers de style, selon ce à quoi il s’applique, si il est commun à toutes les pages…
3. Le texte « LOREM IPSUM… » est autorisé. Ne perdez pas trop de temps à inventer du contenu à votre site.
4. le visuel du site (charte graphique) doit être cohérent sur toutes les pages du site.
5. l’utilisation de framework tels que bootstrap, foundation, etc. n’est pas autorisée.
6. l’utilisation des *float* ou des tableaux **n’est pas autorisée pour la mise en page**, c’est-à-dire par exemple pour mettre une colonne à côté d’une autre… Par contre, on peut bien sûr se servir de *float* pour son usage historique : entourer une image de texte.
7. l’utilisation des `<br\>` **n’est pas autorisée pour la mise en page**. Si vous voulez sauter à la ligne dans un texte, cela correspond sûrement à un paragraphe `<p>`. Si vous voulez espacer des blocs, il faut mettre des marges en bas.
3. le site sera responsive. Au minimum le menu s’adaptera à la taille de la page. De plus, la page **Équipe** doit être responsive : la présentation se fera en grille sur une grande page ou en liste verticale quand la page est trop petite.

## <a name="presentationPages"></a> Présentation des pages

### <a name="accueil"></a> Accueil

La page d'accueil sert essentiellement de page présentation du site. Cependant, comme le fond reste moins privilégié que la forme de notre site dans l'évaluation de nos compétences, l'utilisation de « LOREM IPSUM » notamment nous a facilité le remplissage de cette page.

*Page réalisée principalement par Gatien Depeyre*

### <a name="contact"></a>Contact

La page servant à nous contacter prend en compte les critères imposés, ainsi que la vérification du format pour l'adresse email, ce qui était optionnel.
Les informations personnelles les plus conventionnelles sont rassemblées et ce qui concerne uniquement le message de même.
Nous avons aussi ajouté une page **Mentions légales** afin de donner plus d'authenticité au site.

Nous avons également utilisé un petit peu de JavaScript - langage toléré à la condition d'utilisation exceptionnelle - dans le but de modifier l'apparence du bouton « Envoyer » lorsque tous les champs obligatoires ont été renseignés. 
| Un ou plusieurs champs obligatoires manquants | Tous les champs obligatoires renseignés|
|:---------------------------------------------:|:--------------------------------------:|
| ![image](https://user-images.githubusercontent.com/73829228/125351784-cd8f0580-e360-11eb-86f9-8c5f4d61707f.png) | ![image](https://user-images.githubusercontent.com/73829228/125351560-86087980-e360-11eb-82bf-68c9c6a0e02d.png) |

**Note :** Ce formulaire n'est pas fonctionnel car l'utilisation du PHP n'était pas autorisée.

*Page **Contact** et **Mentions légales** réalisées principalement par Mélanie Fressard*

### <a name="equipe"></a> Équipe

La page **Équipe** présente chaque membre du groupe à l'aide d'un texte et d'une photo. Chaque nom a une couleur d'arrière-plan différente.

*Page réalisée principalement par Bastien Gavioli*

### <a name="produit"></a> Produit

*Page réalisée principalement par Enzo Viguier*

### <a name="presse"></a> Presse

*Page réalisée principalement par Gatien Depeyre*

### <a name="faq"></a> F.A.Q

L'objectif principal de cette page était de réaliser des *ancres*. Pour ce faire, nous avons mis une liste de questions sur lesquelles on peut cliquer. Cela ramène plus bas sur ladite question suivie de sa réponse. Pour plus d'ergonomie, le choix a été fait d'encadrer chaque sujet, constitué d'une question et d'une réponse, afin de les séparer. C'est sur la puce entre chaque encadrement que l'ancre est posé. Si elle avait été posée sur la question, cette dernière aurait été cachée par le *header*.
À la fin de la page, un lien de redirection vers la page **Contact** a été créé dans le cas où une autre question se poserait, encore une foisn dans un but de rendre le site web plus « réaliste ».

*Page réalisée par Bastien Gavioli et Mélanie Fressard*

### <a name="nousRejoindre"></a> Nous Rejoindre

Les métiers 1, 2, 3 présentés sur cette page sont sous forme de tableau, car cela permet de simplifier la lecture et de trouver rapidement les informations importantes. Cela nous constituait également un moyen de montrer que nous étions capables de réaliser un tableau. Chaque métier a sa propre pages avec de complètes informations qui lui sont relatives. Nous avons utilisé du LOREM IPSUM afin remplir simplement la page, encore une fois. Nous avons ajouté à la fin un encadrement avec un microformulaire de contact pour qu'un(e) intéressé(e) puisse répondre.

**Note :**  Pour des raisons de responsivité, le tableau est remplacé par une liste à puce pour les petits écrans.

*Page réalisée principalement par Bastien Gavioli*

### <a name="cssGlobal"></a> CSS global

#### *Header*

#### *Footer*

Pour le *footer*, nous avons décidé de faire une bande avec les couleurs globales du site, contenant des liens vers des réseaux sociaux (*Facebook*, *Twitter* et *Instagram*) pour lui donner plus de réalisme. Ces pages rammènent vers les comptes de *Pokémon* sur ces différents sites. Le répertoire *GitHub* initialement utilisé figure également dans le *footer*. 

#### Responsivité
