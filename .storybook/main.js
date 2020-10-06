module.exports = {
    stories: ['../packages/ui/src/**/*.stories.js', '../packages/ui/src/**/*.story.js', '../packages/styles/src/**/*.stories.js', '../packages/styles/src/**/*.story.js'],
    addons: [{
        name: '@storybook/addon-essentials',
        options: {
            backgrounds: false,
        }
    }],
};
