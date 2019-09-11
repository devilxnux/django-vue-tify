const BundleTracker = require('webpack-bundle-tracker');
const HardSourcePlugin = require('hard-source-webpack-plugin');
const path = require('path');
// Path to 'src' folder where 'main.*' script resides
const srcPath = './client/src';
module.exports = {
    baseUrl: 'http://0.0.0.0:8080/',
    outputDir: './client/production/',
    chainWebpack: config => {
        config.optimization
            .splitChunks(
                false)
        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{ filename: './client/webpack-stats.json' }])
        config.plugin('HardSourceWebpackPlugin').use(HardSourcePlugin)
        config.resolve.alias
            .set('__STATIC__', 'static')
        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .port(8080)
            .hotOnly(
                true)
            .watchOptions({ poll: 1000 })
            .https(
                false)
            .headers({ 'Access-Control-Allow-Origin': ['\*'] })
            .stats('minimal')
            .compress(true)
        config
            .entry('app')
            .clear()
            /* Uncomment line below if you use JavaScript. Comment it otherwise */
            //.add(path.join(__dirname, srcPath, 'main.js'))
            /* Uncomment line below if you use TypeScript. Comment it otherwise */
            .add(path.join(__dirname, srcPath, 'main.ts'))
            .end();
        config.resolve.alias
            .set('@', path.join(__dirname, srcPath))
    }
};