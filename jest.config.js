module.exports = {
    "snapshotSerializers": [
        "enzyme-to-json/serializer"
    ],
    "setupFiles": [
        "<rootDir>/test-shim.js",
        "<rootDir>/test-setup.js"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "roots": [
        "<rootDir>/src"
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "testMatch": [
        "**/__tests__/**/*\.spec\.(ts|tsx|js)"
    ]
}