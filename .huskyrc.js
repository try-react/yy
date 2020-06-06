module.exports = {
    hooks: {
      // "pre-commit": "yarn lint-staged",
      "pre-commit": "yarn madge:src && git add ./doc/src/graph.svg && git commit -m '_' --no-verify && yarn lint-staged",
    },
}
