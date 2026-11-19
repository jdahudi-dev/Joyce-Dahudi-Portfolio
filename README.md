# Site de Joyce Dahudi et d’EMITECH

Site statique compatible GitHub Pages. **Le contenu se modifie dans `content.js`, jamais dans `index.html`.**

## Organisation
```
index.html   structure des pages (à ne pas modifier)
content.js   TOUT le contenu : textes, dates, liens, photos, vidéos, projets
render.js    construit les pages à partir de content.js (à ne pas modifier)
script.js    menu mobile et courbes animées
style.css    design (couleurs en haut du fichier)
assets/logos, assets/images, assets/videos, assets/documents
```

## Remplacer ou ajouter un média
**Logo, portrait** : copiez le fichier dans `assets/logos/` ou `assets/images/`, puis dans `content.js` écrivez son chemin, par exemple `portrait: "assets/images/joyce.jpg"`. Tant que le champ est vide, une image de remplacement s’affiche.

**Nouvelle photo** : dans `photos`, copiez une ligne `{ categorie: "…", src: "", legende: "" }` et renseignez `src: "assets/images/ma-photo.jpg"`. Un clic sur la photo l’agrandit.

**Nouvelle vidéo** : dans `videos`, copiez une ligne et renseignez `src`.
- Lien YouTube (recommandé pour les vidéos lourdes) : mettez la vidéo en « non répertoriée » sur YouTube et collez son lien. La miniature est automatique.
- Fichier MP4 : placez-le dans `assets/videos/` (idéalement moins de 25 Mo) et écrivez `src: "assets/videos/demo.mp4"`. Ajoutez `poster: "assets/images/miniature.jpg"` pour choisir la miniature.
- La vidéo ne se charge qu’au clic, et le bouton « Agrandir » l’ouvre en grand.
- `zone` : `"accueil"`, `"emitech"` ou `"galerie"`.

**Nouveau projet, expérience, certification, engagement** : copiez une ligne du bloc correspondant (`projets`, `experiences`, `certifications`, `engagement`) et modifiez-la. Pour un certificat, placez le PDF dans `assets/documents/` et renseignez `fichier`.

**Réseaux sociaux, e-mail, WhatsApp** : renseignez `social` et `contact` (WhatsApp : chiffres seulement, indicatif pays inclus, sans « + »).

**Formulaire** : créez un formulaire sur formspree.io (gratuit), puis mettez son identifiant dans `contact.formspree`.

## Optimiser les images
Format JPG ou WebP, largeur maximale 1600 px, moins de 300 Ko par image (squoosh.app, gratuit). Évitez les espaces et accents dans les noms de fichiers.

## Mettre à jour le site sur GitHub
1. Ouvrez votre dépôt sur github.com.
2. **Modifier un texte ou un lien** : cliquez sur `content.js`, puis sur l’icône crayon. Modifiez, puis **Commit changes**.
3. **Ajouter une image ou un PDF** : ouvrez le dossier voulu (ex. `assets/images`), cliquez sur **Add file → Upload files**, déposez le fichier, puis **Commit changes**.
4. Attendez 1 à 3 minutes, puis rechargez le site (Ctrl+F5).

Si une image n’apparaît pas, vérifiez que le chemin dans `content.js` correspond exactement au nom du fichier (majuscules comprises).

## Première publication
Voir les étapes GitHub Pages données précédemment : dépôt public, envoi des fichiers, puis **Settings → Pages → Deploy from a branch → main / (root)**.
