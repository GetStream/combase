const path = require('path');

module.exports = {
    extends: ['plugin:monorepo/recommended', 'get-off-my-lawn'],
    rules: {
        'callback-return': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'no-warning-comments': 0,
        'node/no-extraneous-import': 0,
        'node/no-unpublished-import': 0,
        'react/display-name': 0,
    },
    settings: {
        'import/resolver': {
            'eslint-import-resolver-lerna': {
                packages: path.resolve(__dirname, 'packages'),
            },
        },
    },
};
