function softDelete (schema, options) {
    options || (options = {});
	
	const deleteStatus = 'deleted';
	
    schema.statics.softDelete = function (data) {
        return this.update({
            _id: data._id
        }, {
            status: deleteStatus
        }).exec();
    };

}

module.exports = softDelete;