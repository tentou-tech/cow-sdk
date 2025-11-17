# Publishing Quick Reference Card

## 🚀 Quick Commands

### Check What Can Be Published
```bash
./scripts/publish.sh --list
```

### Dry-Run (Always Do This First!)
```bash
# All packages
./scripts/publish.sh --all --dry-run

# Specific package
./scripts/publish.sh --package @cowprotocol/cow-sdk --dry-run
```

### Publish
```bash
# All packages
./scripts/publish.sh --all

# Specific package
./scripts/publish.sh --package @cowprotocol/cow-sdk
```

---

## 📋 Pre-Publishing Checklist

- [ ] All tests pass: `pnpm test`
- [ ] All packages build: `pnpm build`
- [ ] Linting passes: `pnpm lint`
- [ ] Type checking passes: `pnpm typecheck`
- [ ] Logged into npm: `npm whoami`
- [ ] Git working directory is clean
- [ ] Versions are updated correctly
- [ ] Dry-run completed successfully

---

## 🔄 Release Workflow (Recommended)

### Automated Release with release-please

```bash
# 1. Commit your changes with conventional commits
git add .
git commit -m "feat: add new feature"

# 2. Push to main (or create PR)
git push origin main

# 3. Release-please will automatically:
#    - Create a release PR
#    - Update versions
#    - Generate changelogs
#    - Publish to npm when PR is merged
```

### Manual Release

```bash
# 1. Bump versions
pnpm --filter @cowprotocol/cow-sdk version patch  # or minor, major

# 2. Build
pnpm build

# 3. Dry-run
./scripts/publish.sh --package @cowprotocol/cow-sdk --dry-run

# 4. Publish
./scripts/publish.sh --package @cowprotocol/cow-sdk

# 5. Commit and tag
git add .
git commit -m "chore: release @cowprotocol/cow-sdk@X.Y.Z"
git tag @cowprotocol/cow-sdk-X.Y.Z
git push --follow-tags
```

---

## 🔐 Authentication

### Login to npm
```bash
npm login
```

### Verify authentication
```bash
npm whoami
```

### For CI/CD
```bash
# Create token
npm token create

# Add to GitHub secrets as NPM_TOKEN
```

---

## 🛠️ npm Scripts Reference

| Script | Command | Description |
|--------|---------|-------------|
| `pnpm run publish:all` | Publish all packages | Builds and publishes all packages to npm |
| `pnpm run publish:dry-run` | Dry-run all packages | Test publishing without actually publishing |
| `pnpm run release:dry-run` | Test release-please | See what release-please would do |
| `pnpm run release:pr` | Create release PR | Create release PR with version updates |
| `pnpm run release:github` | Create GitHub release | Create GitHub releases for tags |

---

## 📦 Package List

- `@cowprotocol/cow-sdk` - Main SDK
- `@cowprotocol/sdk-app-data` - AppData schemas
- `@cowprotocol/sdk-bridging` - Bridging (prerelease)
- `@cowprotocol/sdk-common` - Common utilities
- `@cowprotocol/sdk-composable` - Composable orders
- `@cowprotocol/sdk-config` - Configuration
- `@cowprotocol/sdk-contracts-ts` - Contract bindings
- `@cowprotocol/sdk-cow-shed` - CoW Shed
- `@cowprotocol/sdk-order-book` - Order book API
- `@cowprotocol/sdk-order-signing` - Order signing
- `@cowprotocol/sdk-subgraph` - Subgraph client
- `@cowprotocol/sdk-trading` - Trading functionality
- `@cowprotocol/sdk-weiroll` - Weiroll integration
- `@cowprotocol/sdk-ethers-v5-adapter` - Ethers v5 adapter
- `@cowprotocol/sdk-ethers-v6-adapter` - Ethers v6 adapter
- `@cowprotocol/sdk-viem-adapter` - Viem adapter

---

## ⚠️ Common Issues

### "Not logged in"
```bash
npm login
```

### "No permission to publish"
Contact repository maintainer for npm organization access.

### "Version already exists"
```bash
# Bump version first
cd packages/<package-name>
npm version patch
```

### Workspace dependency issues
```bash
# Rebuild all packages
pnpm build
```

---

## 📚 More Information

- Full guide: [PUBLISHING.md](PUBLISHING.md)
- README: [README.md](README.md)
- Contributing: [CONTRIBUTING.md](CONTRIBUTING.md)

