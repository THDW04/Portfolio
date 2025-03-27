const projets = {
    1: {
        titre: "Site web musical",
        description: " Ce projet consistait à créer un site web dédié à ma sélection musicale, mettant en avant des chansons que j’aime écouter. L’objectif était double : d’une part, proposer une présentation visuelle et interactive de mes goûts musicaux, et d’autre part, apprendre à récupérer des données via un formulaire et à héberger un site sur un serveur. Pour réaliser ce site, j'ai d'abord structuré les sections principales en HTML en veillant à organiser le contenu de manière claire et intuitive. J’ai ensuite utilisé CSS pour créer une mise en page moderne et visuellement attractive, avec des couleurs et des polices cohérentes avec le thème. La partie JavaScript a été centrale dans le projet : elle m’a permis de stocker et de manipuler les données liées aux chansons, comme le titre, l’artiste, ou encore un lien externe, sous forme de tableaux. J'ai également intégré un formulaire permettant aux utilisateurs de suggérer leurs propres morceaux, avec une gestion des données en temps réel. Enfin, j’ai appris à héberger le site sur un serveur, ce qui m’a permis de comprendre le processus de mise en ligne, la gestion des fichiers.",
        image: "../Images/sitemusique.png",
        lien: "http://vilasse.projetsmmichamps.fr/sae105",
        type: "lien"
    },
    2: {
        titre: "Galerie personnelle",
        description: "J’ai conçu une galerie en ligne pour rassembler mes inspirations et mes propres réalisations graphiques. L’idée était de créer un espace qui reflète mon univers visuel et artistique, en mêlant références et projets personnels. J’ai développé ce site avec HTML, CSS et JavaScript, en mettant l’accent sur une navigation fluide et une mise en page épurée.",
        image: "../Images/galerie.png",
        lien: "https://thdw04.github.io/galerie/",
        type: "lien"
    },
    3: {
        titre: "Phrase du jour",
        description: "Un site qui affiche une citation quotidienne...",
        image: "../Images/phrases.png",
        lien: "../html/Phrase du jour.html",
        type: "lien"
    },

    4: {
        titre: "Affiche d'information",
        description: "Pour la journée portes ouvertes, j'ai réalisé une affiche afin de sensibiliser les lycéens au scandale de Cambridge Analytica. L'objectif était non seulement de capter leur attention, mais aussi de les inciter à visionner un documentaire qui explore en profondeur les enjeux de ce scandale. Étant un sujet complexe et peu connu de certains jeunes, il était essentiel de créer un visuel impactant qui susciterait leur curiosité et leur donnerait envie de s'informer davantage. Pour créer l'affiche, j'ai utilisé Photoshop et me suis concentrée sur un design minimaliste et percutant. J'ai opté pour des couleurs sombres et un contraste fort afin d'attirer l'attention,tout en mettant en avant des éléments graphiques représentant des aspects clés du scandale (comme le logo de Cambridge Analytica en arrière-plan). L'affiche devait non seulement être informative, mais aussi intrigante, de façon à pousser les lycéens à s'intéresser au sujet. Le slogan a été conçu pour être court et direct, afin de provoquer une réaction immédiate.",
        image: "../Images/Affiche.jpg",
        lien:"../Images/Affiche.pdf",
        type: "pdf"
    },
    5: {
        titre: "Livret filmique",
        description: " J’ai conçu un livret destiné à des lycéens spécialisés en cinéma, en adoptant le rôle d’un magazine pédagogique. L’objectif était de décrypter un film de manière accessible, en mettant en lumière ses aspects techniques et artistiques. Pour cela, j’ai développé une analyse approfondie basée sur une théorie cinématographique,permettant d’expliquer les choix du réalisateur et d’offrir une perspective enrichissante. La maquette du livret, réalisée sur InDesign, a été pensée pour être claire et agréable à parcourir. J’ai optimisé les images à l’impression avec Photoshop, en ajustant les couleurs et la résolution pour garantir un rendu de qualité. Ensuite, j’ai créé des pictogrammes et des schémas explicatifs sur Illustrator. Ces éléments visuels permettent d’illustrer des concepts techniques, comme les mouvements de caméra. Mon objectif principal était de rendre l’analyse à la fois précise et accessible pour ce jeune public.",
        image: "../Images/Livret.jpg",
        pdf: "../Images/Nathalia_VILASSE_livret.pdf",
        type: "pdf"
    },
    6: {
        titre: "Motion design",
        description: "Ce projet avait pour objectif de créer une animation fluide et dynamique d’une voiture en mouvement. L’idée était d’expérimenter les principes du motion design et de travailler sur des effets visuels et des transitions. J’ai utilisé After Effects pour animer les différents éléments de la voiture, comme les roues. J’ai également ajouté des effets de vitesse et de mouvement pour donner l’impression que la voiture se déplace. Pour renforcer l’aspect réaliste de l’animation, j’ai intégré un fond de ville en arrière-plan, avec des éléments graphiques tels que des immeubles et des arbres. Ce projet m’a permis d’améliorer ma compréhension du mouvement et du rythme en animation.",
        video: "../Images/Voiture_en_ville.mp4",
        type: "video"
    },
    7: {
        titre: "Interview avec un journaliste",
        description: " Ce projet avait pour objectif de réaliser une interview avec un journaliste de rédaction, afin de découvrir son métier et son journal. Cette démarche visait à mieux comprendre le fonctionnement de ce secteur tout en développant nos compétences en gestion de projet, production audiovisuelle et montage. Dans le cadre de ce travail de groupe, j'ai joué un rôle clé en prenant en charge la prise de contact avec le journaliste et l’organisation du rendez-vous. Sur le lieu de tournage, j'étais responsable de la gestion de la lumière, un élément essentiel pour garantir une bonne qualité visuelle à l’interview. Enfin, chaque membre du groupe devait produire un montage individuel de 6 minutes de l’interview. Lors de la postproduction, j’ai réalisé le montage à l’aide d’Adobe Premiere Pro. Le journaliste étant spécialisé en astronomie et astrophysique, j’ai cherché à concevoir une vidéo qui reflète la sobriété et la qualité des interviews documentaires, comme celles diffusées sur ARTE. Ce projet m’a permis de travailler sur le choix des plans, le rythme du montage, et l’intégration d’éléments visuels pour enrichir l’interview.",
        iframe: "<iframe src='https://www.youtube.com/embed/T1_Yoxrytbk?si=pf7SAdfUozQnwon9' title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>",
        type: "iframe"
    }
};
// Récupérer l'ID du projet dans l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get("id");

// Vérifier si le projet existe et l'afficher
if (projets[projetId]) {
    const projet = projets[projetId];
    let contentHTML = `
       <h1>${projet.titre}</h1>
       <div class="grid"> <img src="${projet.image}" alt="${projet.titre}">
        <p>${projet.description}</p> </div>`;


    // Gestion des vidéos
    if (projet.type === "video") {
        contentHTML = `
         <h1>${projet.titre}</h1>
          <div class="grid">   <video controls>
                <source src="${projet.video}" type="video/mp4">
                Votre navigateur ne supporte pas la vidéo.
            </video>
            <p>${projet.description}</p></div>`;
    }

    else if (projet.type === "iframe") {
        contentHTML = `
        <h1>${projet.titre}</h1>
        ${projet.iframe}
        <p class="p-frame">${projet.description}</p>
        `;
    }

    // Gestion des liens externes
    else if (projet.type === "lien") {
        contentHTML += `<a href="${projet.lien}" target="_blank">Aller vers le site</a>`;
    }

    // Gestion des PDF
    else if (projet.type === "pdf") {
        contentHTML += `<a href="${projet.pdf}" target="_blank">Voir le PDF</a>`;
    }

    // Insérer dans la page
    document.getElementById("projet-content").innerHTML = contentHTML;
} else {
    document.getElementById("projet-content").innerHTML = `<p>Projet non trouvé.</p>`;
}

