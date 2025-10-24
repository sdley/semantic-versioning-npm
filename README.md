# Atelier Pratique – Semantic Versioning avec npm

## Objectif

Appliquer le versionnage sémantique (SemVer) dans un projet Node.js, créer des pré-versions (`alpha`, `beta`, `rc`) et publier une release GitHub avec un tag correspondant.

## Pré-requis

- Node.js (>=14) et npm installés
- Git configuré et un remote GitHub prêt (ou GitLab)
- Accès au dépôt GitHub pour créer des releases

## 1️⃣ Initialiser le projet (si vous partez de zéro)

```bash
# Depuis le terminal
mkdir semver-demo-npm
cd semver-demo-npm
npm init -y
git init
git branch -M main
git remote add origin <git_remote_url>
```

Le fichier `package.json` contient le champ "version" initial.

## 2️⃣ Mini-projet inclus (structure)

```
npm-project/
├─ package.json   # version initiale 1.0.0
├─ index.js        # app minimale
├─ lib/
│  └─ calc.js
└─ README.md
```

Contenu clé de `package.json` (extrait) :

```json
{
  "name": "semver-demo-npm",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "node -e "console.log('no tests')""
  }
}
```

## 3️⃣ Workflow Git + npm version (exemples pratiques)

### Commit initial

```bash
git add .
git commit -m "chore: initial project v1.0.0"
git push -u origin main
```

### Bump mineur (feat)

Ajoute une nouvelle fonctionnalité, puis :

```bash
# code change...
git add .
git commit -m "feat: add multiply function"
npm version minor    # -> 1.1.0 ; crée tag v1.1.0
git push origin main --tags
```

### Bump patch (fix)

```bash
# fix code...
git add .
git commit -m "fix: handle edge case in calc"
npm version patch    # -> 1.1.1 ; crée tag v1.1.1
git push origin main --tags
```

## 4️⃣ Versions pré-stables (prerelease) et pré-IDs

```bash
# Crée une pré-version alpha à partir de 1.1.1
npm version prerelease --preid=alpha    # -> 1.1.2-alpha.0

# Incrémenter la même pré-release :
npm version prerelease --preid=alpha    # -> 1.1.2-alpha.1

# Passer à beta :
npm version prerelease --preid=beta     # -> 1.1.2-beta.0

# Release candidate :
npm version prerelease --preid=rc       # -> 1.1.2-rc.0
```

> Remarque : `npm version <type>` met à jour `package.json`, crée un commit et un tag par défaut.

## 5️⃣ Versions avec métadonnées de build

Les métadonnées sont ajoutées manuellement (npm ne gère pas directement le build metadata via `npm version`):

```json
"version": "1.1.2+build.20251025.01"
```

Les métadonnées (après `+`) ne changent pas le tri sémantique mais peuvent transmettre un horodatage, un identifiant CI, etc.

## 6️⃣ Créer une Release GitHub depuis un tag

1. `git push origin main --tags`
2. Aller sur GitHub → **Releases** → **Draft a new release**
3. Sélectionner le tag (ex. `v1.1.2-rc.0`) ou créer un nouveau tag dans l'interface
4. Rédiger le changelog (utiliser conventions `feat:`, `fix:`, `BREAKING CHANGE:`)
5. Publish release

## 7️⃣ Commandes utiles

```bash
npm outdated           # lister les dépendances obsolètes
npm view <pkg> version # voir la version publiée d'un package
npm v                  # équivalent de npm view
```

## Résultat attendu

- `package.json` à jour selon SemVer
- Tags Git cohérents (v1.0.0, v1.1.0, v1.1.1, v1.1.2-alpha.0, ...)
- Release GitHub créée pour une version stable ou pré-stable
