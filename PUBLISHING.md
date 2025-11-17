# Publishing Guide for CoW SDK

This guide explains how to publish packages in the CoW SDK monorepo to npm.

## Prerequisites

Before publishing, ensure you have:

1. **npm account**: You need an npm account with access to the `@cowprotocol` organization
2. **Logged in**: Run `npm login` to authenticate
3. **2FA setup**: Enable 2FA on your npm account for security
4. **Clean working directory**: Commit or stash all changes
5. **Tests passing**: Run `pnpm test` to ensure all tests pass
6. **Build working**: Run `pnpm build` to ensure all packages build successfully

## Quick Start

### List All Publishable Packages

```bash
./scripts/publish.sh --list
```

### Dry Run (Recommended First Step)

Always do a dry-run first to see what would be published:

```bash
# Dry-run for all packages
./scripts/publish.sh --all --dry-run

# Dry-run for a specific package
./scripts/publish.sh --package @cowprotocol/cow-sdk --dry-run
```

### Publish All Packages

```bash
./scripts/publish.sh --all
```

This will:
1. Build all packages
2. Ask for confirmation
3. Publish all packages to npm with public access

### Publish a Specific Package

```bash
./scripts/publish.sh --package @cowprotocol/cow-sdk
```

## Using npm Scripts Directly

You can also use the npm scripts defined in the root `package.json`:

### Publish all packages

```bash
pnpm run publish:all
```

### Dry-run publish all packages

```bash
pnpm run publish:dry-run
```

### Publish a specific package

```bash
pnpm --filter @cowprotocol/cow-sdk publish --access public --no-git-checks
```

### Publish a specific package (dry-run)

```bash
pnpm --filter @cowprotocol/cow-sdk publish --access public --no-git-checks --dry-run
```

## Available Packages

The following packages can be published:

- `@cowprotocol/cow-sdk` - Main SDK package
- `@cowprotocol/sdk-app-data` - AppData schema definitions
- `@cowprotocol/sdk-common` - Common utilities
- `@cowprotocol/sdk-composable` - Composable orders
- `@cowprotocol/sdk-config` - Configuration
- `@cowprotocol/sdk-contracts-ts` - Contract TypeScript wrappers
- `@cowprotocol/sdk-cow-shed` - CoW Shed integration
- `@cowprotocol/sdk-order-book` - Order book API client
- `@cowprotocol/sdk-order-signing` - Order signing utilities
- `@cowprotocol/sdk-subgraph` - Subgraph client
- `@cowprotocol/sdk-trading` - Trading functionality
- `@cowprotocol/sdk-weiroll` - Weiroll integration
- `@cowprotocol/sdk-bridging` - Bridging functionality
- Provider adapters:
  - `@cowprotocol/sdk-ethers-v5-adapter`
  - `@cowprotocol/sdk-ethers-v6-adapter`
  - `@cowprotocol/sdk-viem-adapter`

## Version Management

### Using release-please (Recommended)

This repo uses [release-please](https://github.com/googleapis/release-please) for automated version management:

```bash
# Create a release PR (dry-run)
pnpm run release:dry-run

# Create a release PR
pnpm run release:pr

# Create GitHub releases
pnpm run release:github
```

Release-please automatically:
- Updates version numbers based on conventional commits
- Generates CHANGELOGs
- Creates release PRs
- Creates GitHub releases

### Manual Version Bump

If you need to manually bump versions:

```bash
# Bump a specific package version
pnpm --filter @cowprotocol/cow-sdk version patch
pnpm --filter @cowprotocol/cow-sdk version minor
pnpm --filter @cowprotocol/cow-sdk version major

# Or use npm version directly in the package directory
cd packages/sdk
npm version patch
```

## Publishing Workflow

### Standard Release Workflow

1. **Merge features/fixes** to your branch
2. **Ensure conventional commits** are used (for release-please)
3. **Create release PR**:
   ```bash
   pnpm run release:pr
   ```
4. **Review and merge** the release PR
5. **Dry-run publish** to verify:
   ```bash
   ./scripts/publish.sh --all --dry-run
   ```
6. **Publish packages**:
   ```bash
   ./scripts/publish.sh --all
   ```
7. **Create GitHub releases**:
   ```bash
   pnpm run release:github
   ```

### Hotfix Workflow

For urgent hotfixes on specific packages:

1. **Fix the issue** in the package
2. **Bump version manually**:
   ```bash
   cd packages/<package-name>
   npm version patch
   ```
3. **Dry-run**:
   ```bash
   ./scripts/publish.sh --package @cowprotocol/<package-name> --dry-run
   ```
4. **Publish**:
   ```bash
   ./scripts/publish.sh --package @cowprotocol/<package-name>
   ```
5. **Commit** the version bump
6. **Tag** the release:
   ```bash
   git tag @cowprotocol/<package-name>@<version>
   git push --tags
   ```

## Workspace Dependencies

This monorepo uses pnpm workspace dependencies (`workspace:*`). When publishing:

- pnpm automatically resolves workspace dependencies to actual version numbers
- Ensure dependent packages are published first or use `publish:all` which handles order automatically

## Troubleshooting

### "You must be logged in to publish packages"

Run `npm login` to authenticate with npm.

### "You do not have permission to publish"

Ensure you're a member of the `@cowprotocol` organization on npm with publish permissions.

### "Package version already exists"

You're trying to publish a version that already exists on npm. Bump the version number first.

### Workspace dependency resolution issues

If you see errors about workspace dependencies:
1. Ensure all dependent packages are built: `pnpm build`
2. Check that versions are correct in `package.json` files
3. Use `pnpm install` to refresh the workspace

### 2FA Authentication Required

If prompted for a 2FA code during publishing:
1. Get the code from your authenticator app
2. Enter it when prompted
3. Consider using an npm token for CI/CD

## CI/CD Publishing

For automated publishing in CI/CD:

1. **Create an npm token**:
   ```bash
   npm token create
   ```

2. **Add token to CI/CD secrets** as `NPM_TOKEN`

3. **Configure .npmrc** in CI:
   ```bash
   echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
   ```

4. **Run publish** in CI:
   ```bash
   pnpm run publish:all
   ```

## Security Best Practices

1. ✅ Enable 2FA on your npm account
2. ✅ Use npm tokens for CI/CD instead of passwords
3. ✅ Regularly rotate npm tokens
4. ✅ Always do a dry-run before actual publishing
5. ✅ Review what's being published (check `files` in package.json)
6. ✅ Never publish from a dirty git working directory
7. ✅ Tag releases in git after publishing

## Need Help?

- Check [pnpm documentation](https://pnpm.io/cli/publish)
- Check [npm publishing documentation](https://docs.npmjs.com/cli/v9/commands/npm-publish)
- Review the [release-please documentation](https://github.com/googleapis/release-please)

