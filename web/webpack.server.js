module.exports = {
    contentBase: '/build',
    port: 8080,
    inline: true,
    host: '0.0.0.0',
    index: 'index.html',
    proxy: [{
        context: ['/data',
            '/update'
        ],
        target: 'http://192.168.31.65:9090'
    }]
}