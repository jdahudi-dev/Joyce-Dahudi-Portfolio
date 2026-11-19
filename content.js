/* ============================================================
   content.js : TOUT LE CONTENU MODIFIABLE DU SITE
   Vous modifiez uniquement ce fichier, jamais index.html.
   - "" (vide) = information pas encore disponible : le site affiche
     « À compléter » ou une image de remplacement élégante.
   - Rangez vos fichiers dans : assets/logos/, assets/images/,
     assets/videos/ (petits MP4) et assets/documents/ (PDF).
   - Ajouter un élément = copier une ligne { … } puis la modifier.
   ============================================================ */
window.CONTENT = {

  // LOGOS ET PORTRAIT. Exemple : portrait: "assets/images/joyce.jpg"
  images: { logo: "", logoEmitech: "", portrait: "" },

  // CONTACT. whatsapp : chiffres seulement, avec indicatif pays, sans + ni espaces.
  // formspree : identifiant du formulaire (voir README).
  contact: { email: "", whatsapp: "", formspree: "VOTRE_ID" },

  // RÉSEAUX SOCIAUX : collez l’URL complète dans url (https://…).
  // type : linkedin, facebook, instagram, tiktok, x, github
  social: [
    { type: "linkedin",  nom: "LinkedIn personnel", url: "" },
    { type: "linkedin",  nom: "LinkedIn EMITECH",   url: "" },
    { type: "facebook",  nom: "Facebook personnel", url: "" },
    { type: "facebook",  nom: "Facebook EMITECH",   url: "" },
    { type: "instagram", nom: "Instagram",          url: "" },
    { type: "tiktok",    nom: "TikTok",             url: "" },
    { type: "x",         nom: "X / Twitter",        url: "" },
    { type: "github",    nom: "GitHub",             url: "" }
  ],

  // VIDÉOS. src : lien YouTube (conseillé) OU fichier MP4 local.
  // poster : miniature (facultative pour YouTube). zone : "accueil", "emitech" ou "galerie".
  videos: [
    { id: "presentation", zone: "accueil", titre: "Vidéo de présentation",          src: "", poster: "" },
    { id: "emitech",      zone: "emitech", titre: "Présentation vidéo d’EMITECH",   src: "", poster: "" },
    { zone: "galerie", titre: "Démonstration de MAINT.AI",        src: "", poster: "" },
    { zone: "galerie", titre: "Simulation IoT de la sous-station", src: "", poster: "" },
    { zone: "galerie", titre: "Démonstration technique",           src: "", poster: "" },
    { zone: "galerie", titre: "Extrait de formation",              src: "", poster: "" }
  ],

  // PHOTOS (galerie). categorie : texte libre (Terrain, Stages, Formation…).
  photos: [
    { categorie: "Terrain",              src: "", legende: "" },
    { categorie: "Stages",               src: "", legende: "" },
    { categorie: "Formation",            src: "", legende: "" },
    { categorie: "Activités techniques", src: "", legende: "" },
    { categorie: "Événements",           src: "", legende: "" },
    { categorie: "Travaux graphiques",   src: "", legende: "" }
  ],

  // EXPÉRIENCES (de la plus récente à la plus ancienne). photo : facultative.
  experiences: [
    { lieu: "Collège Yves Marcel", date: "Février à avril 2026", photo: "",
      texte: "Stage pédagogique : expérience dans l’environnement éducatif, activités d’enseignement et de transmission des connaissances." },
    { lieu: "SNEL", date: "Avril à juin 2025", photo: "",
      texte: "Stage en environnement électrique : observation et participation aux activités liées aux pannes, découverte des cabines, postes et sous-stations, familiarisation avec la maintenance et l’exploitation des installations." },
    { lieu: "INPP", date: "Février à mars 2024", photo: "",
      texte: "Stage technique : dépannage dans les salles et installations, alimentation de moteurs asynchrones triphasés, étude et pratique du démarrage étoile-triangle." },
    { lieu: "Autres expériences", date: "", photo: "",
      texte: "Assistante technique (appui administratif, préparation de propositions, suivi d’activités) ; bénévolat U-Report / UNICEF ; communication et promotion événementielle." }
  ],

  // FORMATIONS et CERTIFICATIONS. fichier : PDF dans assets/documents/ (facultatif).
  formations: [
    { lieu: "ISPT-Kin", titre: "BAC+4 en électrotechnique", date: "" }
  ],
  certifications: [
    // { titre: "Intitulé", organisme: "Organisme", date: "2026", fichier: "assets/documents/certificat.pdf" }
  ],

  // PROJETS. texte : une ligne par paragraphe (le HTML <b></b> est accepté).
  // image : capture d’écran (facultative).
  projets: [
    { titre: "Gestion intelligente d’une sous-station électrique via l’IoT",
      badge: "Étude et simulation, sans installation industrielle", image: "",
      texte: [
        "<b>Cadre :</b> travail de fin de cycle, « Étude et mise en œuvre d’un système de gestion intelligente d’une sous-station électrique via la technologie IoT : cas de la sous-station Masina ».",
        "<b>Problème étudié :</b> la surveillance et la supervision à distance d’une sous-station, avec détection des anomalies. <small class=\"todo\">À préciser</small>",
        "<b>Approche et technologies envisagées :</b> ESP32 et Blynk ; surveillance des paramètres électriques, de la température et de certains paramètres du transformateur ; alertes en cas d’anomalie ; historique des mesures via Google Sheets.",
        "<b>Objectifs :</b> suivre l’état de l’installation, alerter rapidement, conserver un historique exploitable."
      ] },
    { titre: "MAINT.AI, agent de maintenance prédictive",
      badge: "Prototype de hackathon, non commercialisé", image: "",
      texte: [
        "Prototype développé lors d’un hackathon sur la maintenance prédictive. <small class=\"todo\">Nom et date de l’événement à compléter</small>",
        "<b>Technologies :</b> n8n, Claude (API Anthropic), Telegram, Google Sheets.",
        "<b>Objectif :</b> exploiter des données de fonctionnement de moteurs pour produire un diagnostic et aider à anticiper les anomalies."
      ] },
    { titre: "EMITECH",
      badge: "Initiative en développement", image: "",
      texte: ["Création et développement d’une initiative entrepreneuriale axée sur les services techniques, numériques et la formation."],
      lien: "#emitech", lienTexte: "Voir la présentation d’EMITECH" }
  ],

  // ENGAGEMENT (chronologie). date : "" = « Date à compléter ». photo : facultative.
  engagement: [
    { date: "", photo: "", titre: "Bénévolat et engagement citoyen avec U-Report / UNICEF" },
    { date: "", photo: "", titre: "Participation aux initiatives de jeunesse" },
    { date: "", photo: "", titre: "Transmission des connaissances" },
    { date: "", photo: "", titre: "Développement personnel et leadership" },
    { date: "", photo: "", titre: "Promotion des compétences féminines dans les domaines techniques" }
  ],

  distinctions: ["1re place en littérature", "3e place au pitch de projet", "Concours Minzoto Star 2025"]
};
