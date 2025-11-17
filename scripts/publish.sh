#!/bin/bash

# CoW SDK Publishing Helper Script
# This script helps publish packages in the cow-sdk monorepo

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_usage() {
    echo -e "${BLUE}CoW SDK Publishing Helper${NC}"
    echo ""
    echo "Usage: ./scripts/publish.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --all               Publish all packages"
    echo "  --dry-run          Run publish in dry-run mode (no actual publishing)"
    echo "  --package <name>   Publish a specific package (e.g., @cowprotocol/cow-sdk)"
    echo "  --list             List all publishable packages"
    echo "  --help             Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./scripts/publish.sh --all                                    # Publish all packages"
    echo "  ./scripts/publish.sh --dry-run --all                          # Dry-run for all packages"
    echo "  ./scripts/publish.sh --package @cowprotocol/cow-sdk           # Publish specific package"
    echo "  ./scripts/publish.sh --package @cowprotocol/cow-sdk --dry-run # Dry-run for specific package"
    echo ""
}

list_packages() {
    echo -e "${BLUE}Publishable packages:${NC}"
    pnpm -r --filter './packages/**' exec pwd | while read -r path; do
        if [ -f "$path/package.json" ]; then
            package_name=$(node -p "require('$path/package.json').name")
            package_version=$(node -p "require('$path/package.json').version")
            echo -e "  ${GREEN}$package_name${NC} @ ${YELLOW}$package_version${NC}"
        fi
    done
}

publish_all() {
    local dry_run=$1
    echo -e "${BLUE}Publishing all packages...${NC}"

    if [ "$dry_run" = "true" ]; then
        echo -e "${YELLOW}Running in DRY-RUN mode (no actual publishing)${NC}"
        pnpm run publish:dry-run
    else
        echo -e "${RED}WARNING: This will publish all packages to npm!${NC}"
        read -p "Are you sure you want to continue? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            pnpm run publish:all
            echo -e "${GREEN}All packages published successfully!${NC}"
        else
            echo -e "${YELLOW}Publishing cancelled${NC}"
            exit 0
        fi
    fi
}

publish_package() {
    local package_name=$1
    local dry_run=$2

    echo -e "${BLUE}Publishing package: ${package_name}${NC}"

    # Build first
    pnpm --filter "${package_name}" run build

    if [ "$dry_run" = "true" ]; then
        echo -e "${YELLOW}Running in DRY-RUN mode (no actual publishing)${NC}"
        pnpm --filter "${package_name}" publish --access public --no-git-checks --dry-run
    else
        echo -e "${RED}WARNING: This will publish ${package_name} to npm!${NC}"
        read -p "Are you sure you want to continue? (yes/no): " confirm
        if [ "$confirm" = "yes" ]; then
            pnpm --filter "${package_name}" publish --access public --no-git-checks
            echo -e "${GREEN}Package ${package_name} published successfully!${NC}"
        else
            echo -e "${YELLOW}Publishing cancelled${NC}"
            exit 0
        fi
    fi
}

# Main script logic
if [ $# -eq 0 ]; then
    print_usage
    exit 1
fi

DRY_RUN=false
ACTION=""
PACKAGE_NAME=""

while [[ $# -gt 0 ]]; do
    case $1 in
        --all)
            ACTION="all"
            shift
            ;;
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --package)
            ACTION="package"
            PACKAGE_NAME="$2"
            shift 2
            ;;
        --list)
            list_packages
            exit 0
            ;;
        --help)
            print_usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            print_usage
            exit 1
            ;;
    esac
done

case $ACTION in
    all)
        publish_all "$DRY_RUN"
        ;;
    package)
        if [ -z "$PACKAGE_NAME" ]; then
            echo -e "${RED}Error: Package name is required${NC}"
            print_usage
            exit 1
        fi
        publish_package "$PACKAGE_NAME" "$DRY_RUN"
        ;;
    *)
        echo -e "${RED}Error: No action specified${NC}"
        print_usage
        exit 1
        ;;
esac

