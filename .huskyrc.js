module.exports = {
    hooks: {
      // TODO npm-run-allにしようかしら...
      "pre-commit": `

          git add ./doc && \
          yarn lint-staged
        `,
    },
}


// yarn madge:src/domain && \
// yarn madge:src/useCase && \
// yarn madge:src/controller && \
// yarn madge:src/presenter && \
// yarn madge:src/infra && \