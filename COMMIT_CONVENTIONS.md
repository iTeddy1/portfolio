# Commit Message Guidelines

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with custom types. All commit messages are validated using commitlint.

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to our CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **translation**: Changes related to translations or language localization
- **security**: Changes that address security vulnerabilities

## Rules

- Subject must be at least 10 characters long
- Use the imperative mood in the subject line ("add" not "added")
- Do not end the subject line with a period
- Separate subject from body with a blank line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

## Examples

```bash
feat(auth): add user authentication system

Implement JWT-based authentication with login and registration
functionality. Includes password hashing and session management.

Closes #123
```

```bash
fix(ui): resolve button hover state issue

Button hover states were not working correctly in dark mode.
Updated CSS variables to use proper theme tokens.
```

## Interactive Commit

Use the interactive commit tool for guided commit message creation:

```bash
npm run commit
```

## Git Hooks

- **pre-commit**: Runs lint-staged to format and lint files
- **commit-msg**: Validates commit messages against commitlint rules

## VS Code Integration

GitHub Copilot is configured to generate commit messages following these conventions. The commit template and validation settings are automatically applied.
