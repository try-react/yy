module.exports = {
    hooks: {
      // "pre-commit": "yarn lint-staged",
      "pre-commit": "yarn madge:src && git add ./doc/src/graph.svg && yarn lint-staged",
    },
}
