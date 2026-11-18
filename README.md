# Site de Joyce Dahudi et d’EMITECH

Site vitrine statique (HTML, CSS, JavaScript) : rapide, gratuit, sans abonnement.

## Structure

```
index.html   → tout le contenu (7 rubriques)
style.css    → design et couleurs (variables en haut du fichier)
script.js    → menu mobile et courbes animées
assets/img   → vos photos et votre logo
assets/video → vos vidéos
```

## 1. Compléter le contenu

Cherchez « À compléter » dans `index.html` (touche Ctrl+F) :
- e-mail, liens des réseaux sociaux, noms et dates (hackathon, distinctions) ;
- WhatsApp : remplacez `CODEPAYS_NUMERO` par votre numéro sans « + » ni espaces (ex. `243XXXXXXXXX`).

**Photo ou logo** : remplacez le bloc `<div class="ph">…</div>` par `<img src="assets/img/joyce.jpg" alt="Portrait de Joyce Dahudi">`.

**Vidéo locale** : remplacez le contenu de `<figure class="media">` par
`<video controls src="assets/video/presentation.mp4"></video>` (gardez les fichiers sous 25 Mo ; au-delà, utilisez YouTube).

**Vidéo YouTube** :
`<iframe src="https://www.youtube.com/embed/ID_VIDEO" allowfullscreen loading="lazy"></iframe>`

## 2. Activer le formulaire de contact (Formspree, gratuit)

1. Créez un compte sur formspree.io, puis un nouveau formulaire avec votre e-mail.
2. Copiez son identifiant (ex. `xyzabcde`).
3. Dans `index.html`, remplacez `VOTRE_ID` dans `https://formspree.io/f/VOTRE_ID`.
4. Après publication, envoyez un message test et confirmez l’e-mail de validation de Formspree.

## 3. Publier sur GitHub Pages

1. Connectez-vous à github.com, cliquez sur **+** puis **New repository**.
2. Nom du dépôt : `joyce-dahudi` (ou `votre-pseudo.github.io` pour une adresse sans sous-dossier). Choisissez **Public**, puis **Create repository**.
3. Cliquez sur **uploading an existing file**. Glissez-déposez **le contenu** du dossier (`index.html`, `style.css`, `script.js`, `assets`), pas le dossier lui-même.
4. Cliquez sur **Commit changes**.
5. Allez dans **Settings → Pages**. Sous *Build and deployment*, choisissez **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
6. Patientez 1 à 3 minutes : l’adresse apparaît en haut de la page Pages (`https://votre-pseudo.github.io/joyce-dahudi/`).

**Mettre à jour** : ouvrez le fichier sur GitHub, cliquez sur l’icône crayon, modifiez, puis **Commit changes**. Le site se met à jour en quelques minutes.

*Alternative Netlify* : sur app.netlify.com/drop, glissez le dossier, le site est en ligne immédiatement.

## 4. Après publication

- Ajoutez l’adresse du site à vos profils LinkedIn et réseaux sociaux.
- Remplacez les images de partage par `<meta property="og:image" content="URL_COMPLETE_DE_L_IMAGE">` dans `<head>`.
- Adresse personnalisée (optionnel, payant) : Settings → Pages → Custom domain.
