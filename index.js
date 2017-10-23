const loaderUtils = require("loader-utils");
const template = require('lodash/template');

module.exports = function(content, map){
    const config = loaderUtils.getOptions(this);

    //对source进行解析
    var callback = this.async();

    var exportsString = "export default = ";
    if (config.exportAsDefault) {
        exportsString = "exports.default = ";

    } else if (config.exportAsMoudle) {
        exportsString = "module.exports = ";
    }
    return exportsString + template(content)  + ";";
}