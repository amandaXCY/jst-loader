const loaderUtils = require("loader-utils");
const _ = require('lodash');

module.exports = function(content, map){
    var defaults = this.options({
        templateSettings: {},
        prettify:false
      });
  
    const config = _.extend({},defaults,loaderUtils.getOptions(this);)
    const callback = this.async();

    
    try {
        const templateSettings = config.templateSettings || {};
        let compiled = _.template(src, false, options.templateSettings).source;
    } catch (err) {
        
        throw new Error(err)
    }

    if (config.prettify) {
        compiled = compiled.replace(/\n/g, '');
    }

    //对source进行解析

    var exportsString = "export default = ";
    if (config.exportAsDefault) {
        exportsString = "exports.default = ";

    } else if (config.exportAsMoudle) {
        exportsString = "module.exports = ";
    }
    return exportsString + compiled + ";";
}