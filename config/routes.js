/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  'PUT /login': 'UserController.login',
  'POST /logout': 'UserController.logout',
  'GET /logout': 'PageController.logout',

  'POST /user/signup': 'UserController.signup',
  'PUT /user/remove-profile': 'UserController.removeProfile',
  'PUT /user/restore-profile': 'UserController.restoreProfile',
  'PUT /user/restore-gravatar-URL': 'UserController.restoreGravatarURL',
  'PUT /user/update-profile': 'UserController.updateProfile',
  'PUT /user/change-password': 'UserController.changePassword',
  'GET /user/admin-users': 'UserController.adminUsers',
  'PUT /user/update-admin/:id': 'UserController.updateAdmin',
  'PUT /user/update-banned/:id': 'UserController.updateBanned',
  'PUT /user/update-deleted/:id': 'UserController.updateDeleted',
  'PUT /user/generate-recovery-email': 'UserController.generateRecoveryEmail',
  'PUT /user/reset-password': 'UserController.resetPassword',
  'PUT /user/follow': 'UserController.follow',
  'PUT /user/unfollow': 'UserController.unFollow',
};
