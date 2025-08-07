# Contributing to GitHub Best Practices

Thank you for your interest in contributing to this project! We welcome contributions from everyone and appreciate your help in making this repository better.


## 🚀 How to Contribute

### Reporting Issues

Before creating an issue, please:

1. **Search existing issues** to avoid duplicates
2. **Use the appropriate issue template**:

   - 🐛 [Bug Report](.github/ISSUE_TEMPLATE/bug_report.md) for bugs
   - ✨ [Feature Request](.github/ISSUE_TEMPLATE/feature_request.md) for new features
   - 📚 [Documentation](.github/ISSUE_TEMPLATE/documentation.md) for docs issues
   - ❓ [Question](.github/ISSUE_TEMPLATE/question.md) for questions

3. **Provide detailed information** including:
   - Clear description of the issue/feature
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Environment details
   - Screenshots if applicable

### Submitting Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Update documentation** if needed
6. **Commit with descriptive messages** following our commit conventions
7. **Push to your fork** and submit a pull request

#### Pull Request Guidelines

- Use the [PR template](.github/pull_request_template.md)
- Link related issues using `Closes #123` or `Fixes #123`
- Keep PRs focused and small when possible
- Include tests for new functionality
- Update documentation for user-facing changes
- Ensure CI checks pass

## 📝 Development Process

### Setting Up Development Environment

1. **Clone your fork**:

   ```bash

   git clone https://github.com/onesmus1024/github-best-practices.git
   ```
   cd github-best-practices


   ```

2. **Add upstream remote**:

   ```bash
   git remote add upstream https://github.com/onesmus1024/github-best-practices.git


   ```

3. **Create a feature branch**:
   ```bash
   git checkout -b {username}/feature-{date}/your-feature-name

   ```

### Making Changes

1. **Keep your fork updated**:

   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Make your changes** in your feature branch
3. **Test your changes** locally
4. **Commit your changes**:
   ```bash
   git add .
   git commit -m "type: brief description of changes"
   ```

### Commit Message Convention

We use conventional commits for clear and consistent commit messages:

```
type(scope): brief description

More detailed explanation if needed

- Additional bullet points if necessary
- Can include breaking changes notation
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**

- `feat: add new issue template for security reports`
- `fix: correct typo in contributing guidelines`
- `docs: update README with new workflow information`

## 🏷️ Labeling System

We use a comprehensive labeling system:

### Type Labels

- `bug` - Something isn't working
- `feature` - New feature or request
- `enhancement` - Improvement to existing feature
- `documentation` - Documentation improvements
- `question` - Further information is requested

### Priority Labels

- `priority: low` - Low priority item
- `priority: medium` - Medium priority item
- `priority: high` - High priority item
- `priority: critical` - Critical issue requiring immediate attention

### Status Labels

- `status: needs-review` - Awaiting review
- `status: in-progress` - Currently being worked on
- `status: blocked` - Blocked by external dependencies
- `status: ready` - Ready for implementation

### Area Labels

- `area: ci` - CI/CD related
- `area: docs` - Documentation related
- `area: templates` - Template related
- `area: workflows` - GitHub Actions workflows

## 🧪 Testing

### For Template Changes

- Test templates by creating issues/PRs in a test repository
- Verify all links work correctly
- Check formatting and rendering

### For Workflow Changes

- Test workflows in a fork before submitting
- Verify all actions run successfully
- Check for proper error handling

### For Documentation Changes

- Verify all links work
- Check spelling and grammar
- Ensure formatting renders correctly

## 📋 Review Process

1. **Automated Checks**: CI will run automatically
2. **Code Review**: Maintainers will review your changes
3. **Feedback**: Address any requested changes
4. **Approval**: Once approved, your PR will be merged

### Review Criteria

- Code quality and best practices
- Test coverage for new features
- Documentation completeness
- Backward compatibility
- Performance impact

## 🆘 Getting Help

- **Questions**: Use the [Question template](.github/ISSUE_TEMPLATE/question.md)
- **Discussions**: Check [GitHub Discussions](../../discussions)
- **Chat**: Join our community chat (if available)

## 🎯 Areas for Contribution

We especially welcome contributions in these areas:

- **New Templates**: Additional issue/PR templates
- **Workflow Improvements**: Better GitHub Actions workflows
- **Documentation**: Examples and guides
- **Best Practices**: New GitHub best practices
- **Bug Fixes**: Fixing existing issues
- **Performance**: Optimizing workflows and processes

## 📚 Resources

- [GitHub Docs](https://docs.github.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

## 🙏 Recognition

Contributors will be recognized in:

- README contributors section
- Release notes for significant contributions
- GitHub contributor insights

Thank you for contributing! 🎉
