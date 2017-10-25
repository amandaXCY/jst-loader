const loaderUtils = require("loader-utils");
const _ = require('lodash');

module.exports = function(content, map){
    var defaults = {
        templateSettings: {},
        prettify:false,
        exportAsDefault: true,//"exports.default = ";
        exportAsMoudle:true,//"module.exports = ";
      };
    
    const config = _.extend({},defaults,loaderUtils.getOptions(this))
    const callback = this.async();
    
    try {
        const templateSettings = config.templateSettings || {};
        let compiled = _.template(content, false, templateSettings).source;
 

        if (config.prettify) {
            compiled = compiled.replace(/\n/g, '');
        }

        var exportsString = "export default = ";
        if (config.exportAsDefault) {
            exportsString = "exports.default = ";
        } else if (config.exportAsMoudle) {
            exportsString = "module.exports = ";
        }
        
        callback(null,exportsString + compiled + ";")
    } catch (err) {
        callback(err)
    }
}