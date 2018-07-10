function changeDocStatus (schema, options) {
    options || (options = {});

    schema.statics.changeStatus = function (data) {
        return this.update({
            _id: data._id
        }, {
            status: data.status
        }).exec();
    };

}

module.exports = changeDocStatus;