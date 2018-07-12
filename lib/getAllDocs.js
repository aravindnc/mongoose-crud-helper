const MongoosePaginate = require('mongoose-paginate');

/**
 * @param  {} schema
 * @param  {} data
 */
function getAllDocs(schema, options) {

    options = options || {};

    const SORT = {
        ASC: 'asc',
        DESC: 'desc'
    };

    const defaultPagingLimit = options.defaultPagingLimit || 10;
    const defaultSortByField = options.defaultSortByField || 'createdOn';
    const defaultSortOrder = options.defaultSortOrder || SORT.DESC;

    schema.plugin(MongoosePaginate);

    /**
     * @param  {} whereCond
     * @param  {} data
     */
    schema.statics.getAllDocs = function(whereCond, userOptions) {

        whereCond = whereCond || {};
        userOptions = Object.assign({}, userOptions);

        const select = userOptions.select ? userOptions.select : {};
        const populate = userOptions.populate ? userOptions.populate : '';
        const page = userOptions.page ? userOptions.page : 1;
        const limit = userOptions.limit ? userOptions.limit : defaultPagingLimit;
        const lean = userOptions.lean ? (userOptions.lean === true) : false;
        const leanWithId = userOptions.leanWithId ? (userOptions.leanWithId === true) : false;

        const sortByField = userOptions.sortBy || defaultSortByField;
        const sortOrderBy = (userOptions.sortOrder === SORT.ASC) ? SORT.ASC : defaultSortOrder;
        const sort = {
            [sortByField]: [sortOrderBy]
        };

        const options = {
            select: select,
            sort: sort,
            populate: populate,
            lean: lean,
            leanWithId: leanWithId,
            page: page,
            limit: limit
        };

        return this.paginate(whereCond, options).then(function(result) {
            return result;
        });
    };

}

module.exports = getAllDocs;
