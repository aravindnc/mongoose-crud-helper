/**
 * @param  {} schema
 * @param  {} data
 */
function getOneDoc(schema, userOptions) {

    const globalOptions = userOptions || {};

    /**
     * @param  {Object} whereCond
     * @param  {Object} options.select
     * @param  {String|Object} options.populate 
     */
    schema.statics.getOneDoc = function (whereCond, options) {
		
        whereCond = whereCond || {};
        
        const projection = options.select || {};
        const populate = options.populate || null;
        
        if(populate) {
            return this.findOne(whereCond, projection).populate(populate).exec();
        } else {
            return this.findOne(whereCond, projection).exec();
        }    
    }
}

module.exports = getOneDoc;
