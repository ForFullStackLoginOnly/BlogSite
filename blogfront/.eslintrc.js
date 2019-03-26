module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
	"rules": {
		"indent": [
		    "error",
		    2
		],
		"linebreak-style": [
		    "error",
		    "unix"
		],
		"quotes": [
		    "error",
		    "single"
		],
		"semi": [
		    "error",
		    "never"
		]
	},
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    }
};
