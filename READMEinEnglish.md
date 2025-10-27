# Practical Workshop – Semantic Versioning with npm

## Objective

To apply **Semantic Versioning (SemVer)** in a Node.js project, create pre-releases (`alpha`, `beta`, `rc`), and publish a GitHub release with a corresponding tag.

## Prerequisites

  - Node.js (\>=14) and npm installed
  - Git configured and a GitHub remote ready (or GitLab)
  - Access to the GitHub repository to create releases

## 1️⃣ Initialize the Project (if starting from scratch)

```bash
# From the terminal
mkdir semver-demo-npm
cd semver-demo-npm
npm init -y
git init
git branch -M main
git remote add origin <git_remote_url>
```

The `package.json` file will contain the initial "version" field.

## 2️⃣ Included Mini-Project (structure)

```
npm-project/
├─ package.json   # initial version 1.0.0
├─ index.js        # minimal app
├─ lib/
│  └─ calc.js
└─ README.md
```

Key content of `package.json` (excerpt):

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

## 3️⃣ Git Workflow + npm version (Practical Examples)

### Initial Commit

```bash
git add .
git commit -m "chore: initial project v1.0.0"
git push -u origin main
```

### Minor Bump (feat)

Add a new feature, then:

```bash
# code change...
git add .
git commit -m "feat: add multiply function"
npm version minor    # -> 1.1.0 ; creates tag v1.1.0
git push origin main --tags
```

### Patch Bump (fix)

```bash
# fix code...
git add .
git commit -m "fix: handle edge case in calc"
npm version patch    # -> 1.1.1 ; creates tag v1.1.1
git push origin main --tags
```

## 4️⃣ Pre-Stable Versions (Prerelease) and Pre-IDs

```bash
# Create an alpha pre-release starting from 1.1.1
npm version prerelease --preid=alpha    # -> 1.1.2-alpha.0

# Increment the same pre-release:
npm version prerelease --preid=alpha    # -> 1.1.2-alpha.1

# Switch to beta:
npm version prerelease --preid=beta     # -> 1.1.2-beta.0

# Release candidate:
npm version prerelease --preid=rc       # -> 1.1.2-rc.0
```

> Note: `npm version <type>` updates `package.json`, creates a commit, and a tag by default.

## 5️⃣ Versions with Build Metadata

Metadata is added manually (npm doesn't directly manage build metadata via `npm version`):

```json
"version": "1.1.2+build.20251025.01"
```

Metadata (after `+`) doesn't change the semantic sorting but can convey a timestamp, a CI identifier, etc.

## 6️⃣ Create a GitHub Release from a Tag

1.  `git push origin main --tags`
2.  Go to GitHub → **Releases** → **Draft a new release**
3.  Select the tag (e.g., `v1.1.2-rc.0`) or create a new tag in the interface
4.  Write the changelog (use conventions `feat:`, `fix:`, `BREAKING CHANGE:`)
5.  Publish release

## 7️⃣ Useful Commands

```bash
npm outdated           # list outdated dependencies
npm view <pkg> version # see the published version of a package
npm v                  # equivalent to npm view
```

## Expected Outcome

  - `package.json` updated according to SemVer
  - Consistent Git tags (v1.0.0, v1.1.0, v1.1.1, v1.1.2-alpha.0, ...)
  - GitHub Release created for a stable or pre-stable version