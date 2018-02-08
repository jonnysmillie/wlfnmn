module.exports.componentsProviders = [
  'ThemeProvider',
  'SoundsProvider'
];

module.exports.componentsContainers = [
  'Arwes',
  'Grid',
  'Frame',
  'Header',
  'Footer',
  'Project'
];

module.exports.componentsContents = [
  'Words',
  'Code',
  'Table',
  'Image',
  'Line',
  'Logo'
];

module.exports.componentsControls = [
  'Button',
  'Loading'
];

module.exports.componentsAnimations = [
  'Animation',
  'Appear',
  'Highlight',
  'Puffs'
];

module.exports.components = [
  ...module.exports.componentsProviders,
  ...module.exports.componentsContainers,
  ...module.exports.componentsContents,
  ...module.exports.componentsControls,
  ...module.exports.componentsAnimations
];

const baseTitle = 'Wolf on Moon | Digital Design Studio';
const componentsTitles = {};
module.exports.components.forEach(name => {
  componentsTitles[`/websites/${name.toLowerCase()}`] = `${name} | Websites | ${baseTitle}`;
});
module.exports.titles = Object.assign(
  {
    '/docs/design-system': `Design System | ${baseTitle}`,
    '/docs/animations-system': `Animations System | ${baseTitle}`,
    '/docs/sounds-system': `Sounds System | ${baseTitle}`,
    '/docs/grid-system': `Grid System | ${baseTitle}`,
    '/docs/responsive-tool': `Responsive Tool | ${baseTitle}`,
    '/docs/loader-tool': `Loader Tool | ${baseTitle}`,
    '/docs/player-tool': `Player Tool | ${baseTitle}`,
    '/websites': `Websites | ${baseTitle}`,
  },
  componentsTitles,
  {
    '/contact': `Contact | ${baseTitle}`,
    '/apps': `Apps | ${baseTitle}`,
    '/play': `Play | ${baseTitle}`,
    '/': baseTitle,
  }
);

module.exports.googleAnalytics = 'UA-50433259-2';

module.exports.default = {};
