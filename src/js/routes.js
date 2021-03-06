
import HomePage from '../pages/home.jsx';
import FormPage from '../pages/form.jsx';
import TestPage from '../pages/testpage.jsx';
import LoginTest from '../pages/logintest.jsx';


import DynamicRoutePage from '../pages/dynamic-route.jsx';
import RequestAndLoad from '../pages/request-and-load.jsx';
import Registratie from '../pages/registratie.jsx';
import GDPR from '../pages/GDPR.jsx';
import WachtwoordVergeten from '../pages/wachtwoordVergeten.jsx';
import OverzQuiz from '../pages/overzichtQuiz.jsx';
import KoopOpties from '../pages/optiesKopen.jsx';
import Profiel from '../pages/profiel.jsx';
import Resultaat from '../pages/resultaat.jsx';
var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/registratie/',
    component: Registratie,
  },
  {
    path: '/GDPR/',
    component: GDPR,
  },
  {
    path: '/wachtVerg/',
    component: WachtwoordVergeten,
  },
  {
    path: '/overzQuiz/',
    component: OverzQuiz,
  },
  {
    path: '/koopOpties/',
    component: KoopOpties,
  },
  {
    path: '/profiel/',
    component: Profiel,
  },
  {
    path: '/resultaat/',
    component: Resultaat,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/testpage/',
    component: TestPage,
  },
  {
    path: '/logintest/',
    component: LoginTest,
  },


  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
];

export default routes;
