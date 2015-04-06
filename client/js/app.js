/*global app*/
var log = require('bows')('app');
var config = require('clientconfig');
var domReady = require('domready');

var Router = require('./router');
var MainView = require('./views/main');

var Ninjas = require('./models/ninjas');

module.exports = {
  // this is the the whole app initter
  blastoff: function () {
    var self = window.app = this;

    log('config', config);

    console.log('%c Hello young ninja apprentice!', 'background: #333; color: #00AAFF');
    console.log('This is where you should test your code.');
    console.log('How? Well try using the \'app\' global var.');
    console.log('Good luck!');

    // init our URL handlers and the history tracker
    self.router = new Router();

    self.buildModels();

    // The html must be build async
    // or else the facebook oauth
    // doesnt work
    self.buildHTML();
  },

  buildModels: function () {
    var self = app;

    self.ninjas = new Ninjas();
  },

  buildHTML: function () {
    // wait for document ready to render our main view,
    // this ensures the document has a body, etc.
    domReady(function () {
      var self = app;

      var mainView;

      // init our main view
      mainView = self.view = new MainView({
        el: document.body
      });

      mainView.render();

      self.router.history.start({ pushState: true, root: '/' });
    });
  },

  // This is how you navigate around the app.
  // this gets called by a global click handler that handles
  // all the <a> tags in the app.
  // it expects a url without a leading slash.
  // for example: "costello/settings".
  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;

    this.router.history.navigate(url, { trigger: true });
  }
};

// run it
module.exports.blastoff();
