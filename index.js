/*
    插件名称: fekey-preprocessor-globalparams
    插件功能: 在preprocess阶段实现全局变量的替换
*/

module.exports = function (content, file, settings) {
    var paramSrc = settings.src;
    var paramDest = settings.dest;
    return content.replace(new RegExp(paramSrc, 'g'), paramDest);
};