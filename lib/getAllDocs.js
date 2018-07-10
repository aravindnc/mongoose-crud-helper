const MongoosePaginate = require('mongoose-paginate');

/**
 * @param  {} schema
 * @param  {} data
 */
function getAllDocs (schema, options) {

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
    schema.statics.getAllDocs = function (whereCond, displayFields, paging) {

        

		whereCond = whereCond || {};
        displayFields = displayFields || {};
		paging = paging || {};

        const sortByField = paging.sortBy || defaultSortByField;
        const sortOrderBy = (paging.sortOrder === SORT.ASC) ? SORT.ASC : defaultSortOrder;
        const sort = {
            [sortByField]: [sortOrderBy]
        };

        const populate = typeof paging.populate !== 'undefined' ? paging.populate : '';
        const page = typeof paging.page !== 'undefined' ? paging.page : 1;
        const limit = typeof paging.limit !== 'undefined' ? paging.limit : defaultPagingLimit;

        const options = {
            select: displayFields,
            sort: sort,
            populate: populate,
            lean: true,
            page: page,
            limit: limit
        };

        return this.paginate(whereCond, options).then(function (result) {
            return result;
        });
    };

}

module.exports = getAllDocs;
