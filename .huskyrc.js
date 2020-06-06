module.exports = {
    hooks: {
      "pre-commit": `
          yarn madge:src && \
          git add ./doc && \
          yarn lint-staged
        `,
    },
}
