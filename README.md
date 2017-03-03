# fekey-preprocessor-globalparams

在preprocess阶段实现全局变量的替换

fis.match('test.js', {
    preprocessor: fis.plugin('globalparams', {
        src: 'DEBUG',
        dest: true
    }),
    release: true
});