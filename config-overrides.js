const { injectBabelPlugin } = require('react-app-rewired');

rewireEmotion = (config) => {
  return injectBabelPlugin('emotion/babel', config);
};


module.exports = rewireEmotion;
