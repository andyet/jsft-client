var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
    props: {
        content: 'string',
        createdAt: 'date'
    },
    derived: {
        moment: {
            deps: ['createdAt'],
            fn: function () {
                return moment(this.createdAt);
            }
        },
        timeAgo: {
            deps: ['moment'],
            fn: function () {
                return this.moment.fromNow();
            }
        }
    }
});
