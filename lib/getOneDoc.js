/**
 * @param  {} schema
 * @param  {} data
 */
function getOneDoc(schema, options) {

    options = options || {};

    /**
     * @param  {} whereCond
     * @param  {} projection
     * @param  {} callback
     */
    schema.statics.getOneDoc = function (whereCond, projection) {
		
		whereCond = whereCond || {};
		data = projection || {};

        return this.findOne(whereCond, projection).exec();
    }
}

module.exports = getOneDoc;
