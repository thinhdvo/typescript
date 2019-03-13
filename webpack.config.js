var path = require('path');

module.exports = {
    mode: "production", // production | development
    entry:{
        thinh: './main.js', // dau vao
        sanpham: './ts/main.ts',
        



        // tenfile: 'duong dan file dau vao'
    },
    output:{
        path: path.resolve(__dirname,'dist'), // dinh nghia thu muc dau ra
        filename: '[name].js' // ten file dau ra
    },

    // TYPESCRIPT ONLY --phai cai ts-loader & configwebpack
    
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], //Xử lý đóng gói các định dạng ts tsx js jsx
    },
    devtool: 'inline-source-map',
    module: {
        // TS
        rules: [
            // TS
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
            },

            // CSS
            {
                test: /\.css?$/,
                use: ['style-loader','css-loader'],
            },

            // SCSS
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            
        ]
    }
}