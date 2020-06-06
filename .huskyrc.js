module.exports = {
    hooks: {
      // run-allしてもいいけど...
      "pre-commit": `
        yarn madge:src/controller && \
        yarn madge:src/domain && \
        yarn madge:src/infra && \
        yarn madge:src/ui && \
        yarn madge:src/useCase && \
        git add ./doc && \
        yarn lint-staged
        `,
    },
}
