module.exports = {
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
  "*.yml": ["prettier --write"],
  "*.{ts,tsx}": ["eslint --fix"],
  "*.{js}": ["eslint --fix"],
  "*.{css,scss}": ["stylelint --fix"],
};
