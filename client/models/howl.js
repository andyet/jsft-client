var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
    props: {
        content: 'string',
        createdAt: 'date',
        id: 'string'
    },
    session: {
        type: ['string', true, 'howls'],
    },
    derived: {
        pageUrl: {
            deps: ['type', 'id'],
            fn: function () {
                return ['', this.type, this.id].join('/');
            }
        },
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
