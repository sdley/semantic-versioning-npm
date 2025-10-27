# ☕ Practical Workshop – Semantic Versioning with Maven

[Voir la version française (README.md)](README.md)

## Objective

Apply SemVer to a Java/Maven project, create pre-stable versions, and publish tags/releases on GitHub. The `maven-project` folder contains a ready-to-use mini Maven project.

## Prerequisites

- JDK 11+ installed and `mvn` available in PATH
- Git configured with a GitHub remote ready

## 1️⃣ Create / open the Maven project

Provided structure:

```
maven-project/
├─ pom.xml   # initial version 1.0.0
├─ src/
│  └─ main/java/com/sdley/App.java
└─ README.md
```

Excerpt from `pom.xml`:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" ...>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.sdley</groupId>
  <artifactId>semver-demo-maven</artifactId>
  <version>1.0.0</version>
</project>
```

## 2️⃣ Initialize Git and make the first commit

```bash
git init
git add .
git commit -m "chore: initial project v1.0.0"
git branch -M main
git remote add origin <git_remote_url>
git push -u origin main
```

## 3️⃣ Use the Maven Versions Plugin to bump versions

Add the plugin (e.g., already included in the provided `pom.xml`).

### Minor bump

```bash
mvn versions:set -DnewVersion=1.1.0
git add pom.xml
git commit -m "feat: bump to 1.1.0"
git tag v1.1.0
git push origin main --tags
```

### Patch bump

```bash
mvn versions:set -DnewVersion=1.1.1
git add pom.xml
git commit -m "fix: bump to 1.1.1"
git tag v1.1.1
git push origin main --tags
```

## 4️⃣ Pre-release versions (alpha/beta/rc)

Maven doesn’t enforce a specific format but accepts any valid string in `<version>`:

```bash
mvn versions:set -DnewVersion=1.2.0-alpha-1
git commit -am "chore(release): 1.2.0-alpha-1"
git tag v1.2.0-alpha-1
git push origin main --tags
```

> Example of using a numeric suffix: `-alpha-1`, `-beta-2`, `-rc-1`.

## 5️⃣ Build metadata

Add to the `pom.xml`:

```xml
<version>1.2.0+build.20251025</version>
```

Note: Some Maven tools may reject certain metadata; mainly use it for documentation or CI purposes.

## 6️⃣ GitHub Release

Push the tags and create a release from GitHub (similar to npm). Include changelog and release notes.

## 7️⃣ Useful commands

```bash
mvn -v
mvn clean package
mvn versions:display-dependency-updates
```

## Expected result

- `pom.xml` updated according to SemVer
- Git tags visible on GitHub
- Documented GitHub release
