module.exports = {
    hooks: {
      // TODO npm-run-allにしようかしら...
      "pre-commit": `
          yarn madge:domain && \
          yarn madge:useCase && \
          yarn madge:controller && \
          yarn madge:presenter && \
          yarn madge:gateway && \
          yarn madge:externalInterface && \
          git add ./doc && \
          yarn lint-staged
        `,
    },
}
