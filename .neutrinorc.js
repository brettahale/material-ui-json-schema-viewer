const reactLint = require('@mozilla-frontend-infra/react-lint');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');

module.exports = {
  use: [
    reactLint({
      rules: {
        /**
         * Ignores reference to functions used before the function declaration. 
         * Since function declarations are hoisted, this is considered safe.
         */
        'no-use-before-define': ['error', { 
          functions: false,
        }],
        /**
         * Allow dangling underscores in identifiers.
         * This is specifically enabled to use custom fields in the schemas.
         */
        'no-underscore-dangle': ['off'],
        'import/prefer-default-export': ['off'],
        /**
         * Allow both '.jsx' and '.js' file extensions to contain JSX
         * ('.js' files are necessary for stories)
         */
        'react/jsx-filename-extension': ['error', { 
          'extensions': ['.js', '.jsx'] 
        }],
        /**
         * 
         */
        'react/no-danger': ['off'],
      },
    }),
    reactComponents(),
    jest(),
  ]
};
