module.exports = {
    hooks: {
      "pre-commit": "yarn lint-staged",
      "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    },
}
