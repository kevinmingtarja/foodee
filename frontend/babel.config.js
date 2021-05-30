// eslint-disable-next-line no-undef
module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [
                        ".ios.ts",
                        ".android.ts",
                        ".ts",
                        ".ios.tsx",
                        ".android.tsx",
                        ".tsx",
                        ".jsx",
                        ".js",
                        ".json",
                    ],
                    alias: {
                        "@api": "./src/api",
                        "@assets": "./src/assets",
                        "@components": "./src/components",
                        "@constants": "./src/constants",
                        "@containers": "./src/containers",
                        "@copy": "./src/copy",
                        "@hooks": "./src/hooks",
                        "@screens": "./src/screens",
                        "@sky": "./src/sky",
                        "@types": "./src/types",
                        "@utils": "./src/utils",
                    },
                },
            ],
        ],
    };
};
