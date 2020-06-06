module.exports = {
    hooks: {
      "pre-commit": `
        "yarn madge:src && \"
        
        git add ./doc && \
        yarn lint-staged
        `,
    },
}

// "yarn madge:src/controller && \"
//         "yarn madge:src/domain && \"
//         "yarn madge:src/infra && \"
//         "yarn madge:src/ui && \"
//         "yarn madge:src/useCase && \"