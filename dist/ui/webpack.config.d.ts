declare const _exports: {
    mode: string;
    entry: string;
    output: {
        path: string;
        filename: string;
    };
    resolve: {
        extensions: string[];
    };
    plugins: any[];
    module: {
        rules: ({
            test: RegExp;
            include: string[];
            loader: string;
            options: {
                presets: string[];
                plugins: string[];
            };
        } | {
            test: RegExp;
            use: {
                loader: string;
                options: {};
            }[];
        } | {
            test: RegExp;
            use: string[];
        } | {
            test: RegExp;
            use: string[];
            exclude: RegExp;
        })[];
    };
    devServer: {
        contentBase: string;
        inline: boolean;
        port: number;
    };
    devtool: string;
};
export = _exports;
