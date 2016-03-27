requirejs.config({
    baseUrl: '',
    paths: {
        lodash: 'http://static.parastorage.com/services/third-party/lodash/3.10.1/lodash.min',
        react: 'https://fb.me/react-with-addons-0.14.3',
        reactDOM: 'https://fb.me/react-dom-0.14.3'
    },
    shim: {
        lodash: {exports: '_'},
        react: {exports: 'React'},
        reactDOM: {exports: 'ReactDOM', deps: ['react']}
    },
    map: {
        '*': {
            'react/addons': 'react',
            React: 'react'
        }
    }
});

requirejs(['react', 'reactDOM', './src/hello'], function (React, ReactDOM, hello) {
    'use strict';

    ReactDOM.render(React.createElement(hello), document.getElementById('container'));
});