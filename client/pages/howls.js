var BasePage = require('./base');
var templates = require('../templates');

module.exports = BasePage.extend({
    template: templates.pages.howls,
    autoRender: true
});
