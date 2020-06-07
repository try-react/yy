module.exports = {
    hooks: {
      // TODO npm-run-allにしようかしら...
      "pre-commit": `
          yarn madge:src/domain && \
          yarn madge:src/useCase && \
          yarn madge:src/controller && \
          yarn madge:src/presenter && \
          yarn madge:src/infra && \
          git add ./doc && \
          yarn lint-staged
        `,
    },
}

