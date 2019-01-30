module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/chartroom-vue/dist/'
        : '/'
}