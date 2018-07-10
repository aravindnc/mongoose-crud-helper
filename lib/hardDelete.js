function hardDelete (schema, options) {
    options || (options = {});
	
	// data.where
	schema.statics.hardDelete = function (data) {
        return this.remove(data.where).exec();
    };

}

module.exports = hardDelete;