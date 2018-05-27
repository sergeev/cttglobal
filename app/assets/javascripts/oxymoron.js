(function() {
  angular.module("oxymoron.config.http", [])
  .config(['$httpProvider', '$locationProvider', '$stateProvider', function($httpProvider, $locationProvider, $stateProvider) {
    /*
     *  Set token for AngularJS ajax methods
    */
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'AngularXMLHttpRequest';
    $httpProvider.defaults.paramSerializer = '$httpParamSerializerJQLike';
  }])
angular.module("oxymoron.config.states", [])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($locationProvider, $stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    /*
     *  Enable HTML5 History API
    */
    $locationProvider.html5Mode({enabled: true, requireBase: false});

    /*
     *  $stateProvider Rails
    */
    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.path();
      var hasTrailingSlash = path[path.length-1] === '/';

      //for later access in tempalteUrl callback
      $stateProvider.oxymoron_location = $location;

      if(hasTrailingSlash) {
        var newPath = path.substr(0, path.length - 1); 
        return newPath; 
      }
    });

    var resolve = function (action, $stateParams) {
      return function (actionNames, callback) {
        try {
          var actionNames = angular.isArray(actionNames) ? actionNames : [actionNames];
          
          if (actionNames.indexOf(action)!=-1) {
            callback($stateParams);
          }
        } catch (e) {
          console.error(e);
        }
      }
    }

    $stateProvider.rails = function () {
      $stateProvider
      
        .state('rails_info_properties_path', {
          url: '/rails/info/properties',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['rails_info_properties_path'](params);
          },
          controller: 'RailsInfoCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('properties', $stateParams)
            }]
          }
        })
      
        .state('rails_info_routes_path', {
          url: '/rails/info/routes',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['rails_info_routes_path'](params);
          },
          controller: 'RailsInfoCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('routes', $stateParams)
            }]
          }
        })
      
        .state('rails_info_path', {
          url: '/rails/info',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['rails_info_path'](params);
          },
          controller: 'RailsInfoCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('rails_mailers_path', {
          url: '/rails/mailers',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['rails_mailers_path'](params);
          },
          controller: 'RailsMailersCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('root_path', {
          url: '/',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['root_path'](params);
          },
          controller: 'GroupsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('new_user_session_path', {
          url: '/users/sign_in',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_user_session_path'](params);
          },
          controller: 'AuthSessionsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('new_user_password_path', {
          url: '/users/password/new',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_user_password_path'](params);
          },
          controller: 'DevisePasswordsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_user_password_path', {
          url: '/users/password/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_user_password_path'](params);
          },
          controller: 'DevisePasswordsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('cancel_user_registration_path', {
          url: '/users/cancel',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['cancel_user_registration_path'](params);
          },
          controller: 'AuthRegistrationsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('cancel', $stateParams)
            }]
          }
        })
      
        .state('new_user_registration_path', {
          url: '/users/sign_up',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_user_registration_path'](params);
          },
          controller: 'AuthRegistrationsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_user_registration_path', {
          url: '/users/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_user_registration_path'](params);
          },
          controller: 'AuthRegistrationsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('search_path', {
          url: '/search',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['search_path'](params);
          },
          controller: 'SearchCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('groups_path', {
          url: '/groups',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['groups_path'](params);
          },
          controller: 'GroupsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('new_group_path', {
          url: '/groups/new',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_group_path'](params);
          },
          controller: 'GroupsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_group_path', {
          url: '/groups/:id/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_group_path'](params);
          },
          controller: 'GroupsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('group_path', {
          url: '/groups/:id',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['group_path'](params);
          },
          controller: 'GroupsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('show', $stateParams)
            }]
          }
        })
      
        .state('themes_path', {
          url: '/themes',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['themes_path'](params);
          },
          controller: 'ThemesCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('new_theme_path', {
          url: '/themes/new',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_theme_path'](params);
          },
          controller: 'ThemesCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_theme_path', {
          url: '/themes/:id/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_theme_path'](params);
          },
          controller: 'ThemesCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('theme_path', {
          url: '/themes/:id',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['theme_path'](params);
          },
          controller: 'ThemesCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('show', $stateParams)
            }]
          }
        })
      
        .state('news_index_path', {
          url: '/news',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['news_index_path'](params);
          },
          controller: 'NewsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('new_news_path', {
          url: '/news/new',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_news_path'](params);
          },
          controller: 'NewsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_news_path', {
          url: '/news/:id/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_news_path'](params);
          },
          controller: 'NewsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('news_path', {
          url: '/news/:id',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['news_path'](params);
          },
          controller: 'NewsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('show', $stateParams)
            }]
          }
        })
      
        .state('posts_path', {
          url: '/posts',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['posts_path'](params);
          },
          controller: 'PostsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('new_post_path', {
          url: '/posts/new',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['new_post_path'](params);
          },
          controller: 'PostsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('new', $stateParams)
            }]
          }
        })
      
        .state('edit_post_path', {
          url: '/posts/:id/edit',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['edit_post_path'](params);
          },
          controller: 'PostsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('edit', $stateParams)
            }]
          }
        })
      
        .state('post_path', {
          url: '/posts/:id',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['post_path'](params);
          },
          controller: 'PostsCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('show', $stateParams)
            }]
          }
        })
      
        .state('touch_users_path', {
          url: '/users/touch',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['touch_users_path'](params);
          },
          controller: 'UsersCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('touch', $stateParams)
            }]
          }
        })
      
        .state('metrics_users_path', {
          url: '/users/metrics',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['metrics_users_path'](params);
          },
          controller: 'UsersCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('metrics', $stateParams)
            }]
          }
        })
      
        .state('users_path', {
          url: '/users',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['users_path'](params);
          },
          controller: 'UsersCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('index', $stateParams)
            }]
          }
        })
      
        .state('user_path', {
          url: '/users/:id',
          
          templateUrl: function(params) {
            params['ng-view']='';
            
            
            return Routes['user_path'](params);
          },
          controller: 'UsersCtrl as ctrl',
          resolve: {
            action: ['$stateParams', function ($stateParams) {
              return resolve('show', $stateParams)
            }]
          }
        })
      
      return $stateProvider;
    }
  }])

  .config(['$provide',
    function($provide) {
      $provide.decorator('$state', ['$delegate', function($delegate) {
        var state = $delegate;
        state.baseGo = state.go;

        var go = function(to, params, options) {
          options = options || {};

          if (state.defaultParams) {
            var defaultParams = angular.copy(state.defaultParams);
            params = angular.extend(defaultParams, params);
          }

          options.inherit = false;

          state.baseGo(to, params, options);
        };
        state.go = go;

        return $delegate;
      }]);
    }
  ])
angular.module("oxymoron.config.debug", [])
.config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(true);
}]);

angular.module("oxymoron.config", ['oxymoron.config.http', 'oxymoron.config.states', 'oxymoron.config.debug'])

  angular.module("oxymoron.services.interceptor", [])
  .factory('httpInterceptor', ['$q', '$rootScope', '$log', function ($q, $rootScope, $log) {
    return {
      request: function (config) {
        $rootScope.$broadcast('loading:progress');
        return config || $q.when(config);
      },
      response: function (response) {
        $rootScope.$broadcast('loading:finish', response);
        return response || $q.when(response);
      },
      responseError: function (response) {
        $rootScope.$broadcast('loading:error', response);
        return $q.reject(response);
      }
    };
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
  }])
angular.module("oxymoron.services.resources", [])
  .factory('resourceDecorator', [function () {
    return function(resource) {
      return resource;
    };
  }])

  
    .factory('Group', ['$resource', 'resourceDecorator', function ($resource, resourceDecorator) {
      return resourceDecorator($resource('/groups/:id.json', {"id":"@id"}, {
        "new": {
          "method": "GET",
          "url": "/groups/:id/new.json"
        },
        "edit": {
          "method": "GET",
          "url": "/groups/:id/edit.json"
        },
        "update": {
          "method": "PUT"
        },
        "create": {
          "method": "POST"
        },
        "destroy": {
          "method": "DELETE"
        }
      }));
    }])
  
    .factory('Theme', ['$resource', 'resourceDecorator', function ($resource, resourceDecorator) {
      return resourceDecorator($resource('/themes/:id.json', {"id":"@id"}, {
        "new": {
          "method": "GET",
          "url": "/themes/:id/new.json"
        },
        "edit": {
          "method": "GET",
          "url": "/themes/:id/edit.json"
        },
        "update": {
          "method": "PUT"
        },
        "create": {
          "method": "POST"
        },
        "destroy": {
          "method": "DELETE"
        }
      }));
    }])
  
    .factory('News', ['$resource', 'resourceDecorator', function ($resource, resourceDecorator) {
      return resourceDecorator($resource('/news/:id.json', {"id":"@id"}, {
        "new": {
          "method": "GET",
          "url": "/news/:id/new.json"
        },
        "edit": {
          "method": "GET",
          "url": "/news/:id/edit.json"
        },
        "update": {
          "method": "PUT"
        },
        "create": {
          "method": "POST"
        },
        "destroy": {
          "method": "DELETE"
        }
      }));
    }])
  
    .factory('Post', ['$resource', 'resourceDecorator', function ($resource, resourceDecorator) {
      return resourceDecorator($resource('/posts/:id.json', {"id":"@id"}, {
        "new": {
          "method": "GET",
          "url": "/posts/:id/new.json"
        },
        "edit": {
          "method": "GET",
          "url": "/posts/:id/edit.json"
        },
        "update": {
          "method": "PUT"
        },
        "create": {
          "method": "POST"
        },
        "destroy": {
          "method": "DELETE"
        }
      }));
    }])
  
    .factory('User', ['$resource', 'resourceDecorator', function ($resource, resourceDecorator) {
      return resourceDecorator($resource('/users/:id.json', {"id":"@id"}, {
        "new": {
          "method": "GET",
          "url": "/users/:id/new.json"
        },
        "edit": {
          "method": "GET",
          "url": "/users/:id/edit.json"
        },
        "update": {
          "method": "PUT"
        },
        "create": {
          "method": "POST"
        },
        "destroy": {
          "method": "DELETE"
        },
        "touch": {
          "url": "/users/touch.json",
          "isArray": null,
          "method": "GET"
        },
        "metrics": {
          "url": "/users/metrics.json",
          "isArray": null,
          "method": "GET"
        },
        "rate": {
          "url": "/users/:id/rate.json",
          "isArray": null,
          "method": "PUT"
        },
        "ban": {
          "url": "/users/:id/ban.json",
          "isArray": null,
          "method": "PUT"
        },
        "unban": {
          "url": "/users/:id/unban.json",
          "isArray": null,
          "method": "PUT"
        }
      }));
    }])
  
angular.module("oxymoron.services.sign", [])
  .service('Sign', ['$http', function ($http) {
    var Sign = this;

    Sign.out = function (callback) {
      $http.delete(Routes.destroy_user_session_path())
        .success(function () {
          if (callback)
            callback()
        })
    }

    Sign.in = function (user_params, callback) {
      $http.post(Routes.user_session_path(), {user: user_params})
        .success(function () {
          if (callback)
            callback();
        })
    }

    Sign.up = function (user_params, callback) {
      $http.post(Routes.user_registration_path(), {user: user_params})
        .success(function () {
          if (callback)
            callback();
        })
    }
  }])
angular.module("oxymoron.services.validate", [])
  .factory('Validate', [function(){
    return function (form, errors){
      try {
        var $form = angular.element(document.querySelector('[name="'+form+'"]')).scope()[form];
      } catch(e) {
        var $form = {};
      }

      angular
        .element(document.querySelectorAll('.rails-errors')).remove();

      angular.forEach($form, function(ctrl, name) {
        if (name.indexOf('$') != 0) {
          angular.forEach(ctrl.$error, function(value, name) {
            ctrl.$setValidity(name, null);
          });
        }
      });


      angular.forEach(errors, function(errors_array, key) {
        var form_key = form+'['+key+']';
        try {
          if ($form[form_key]) {
            $form[form_key].$setTouched();
            $form[form_key].$setDirty();
            $form[form_key].$setValidity('server', false);
          }
          
          angular
            .element(document.querySelector('[name="'+form_key+'"]'))
            .parent()
            .append('<div class="rails-errors" ng-messages="'+form_key+'.$error"><div ng-message="server">'+errors_array[0]+'</div></div>')
        } catch(e) {
          console.log(e)
          console.warn('Element with name ' + form_key + ' not found for validation.')
        }
      });
    };
  }])
angular.module("oxymoron.services.notice", [])
.service('Notice', ['ngNotify', function(ngNotify){
  var Notice = this;

  Notice.callback = function (type, res) {
    ngNotify.set(res.data.msg || res.data.error, type);
  }
}])

angular.module("oxymoron.services", ["oxymoron.services.interceptor", "oxymoron.services.notice", "oxymoron.services.resources", "oxymoron.services.sign", "oxymoron.services.validate"])
  angular.module("oxymoron.directives.contentFor", [])
  .directive("contentFor", [
    "$compile", function($compile) {
      return {
        compile: function(el, attrs, transclude) {
          var template = el.html();

          return {
            pre: function(scope, iElement, iAttrs, controller) {
              var DOMElements = angular.element(document.querySelectorAll('[ng-yield="'+iAttrs.contentFor+'"]'));
              if (DOMElements.attr("only-text") == "true") {
                template = el.text().replace(/(?:\r\n|\r|\n)/g, ' ');
              }
              DOMElements.html((DOMElements.attr("prefix") || "") + template + (DOMElements.attr("postfix") || ""))
              $compile(DOMElements)(scope);

              
              return iElement.remove();
            }
          };
        }
      };
    }
  ])
angular.module("oxymoron.directives.fileupload", [])
  .directive('fileupload', ['$http', '$timeout', '$cookies', 'ngNotify', function ($http, $timeout, $cookies, ngNotify) {
    return {
      scope: {
        fileupload: "=",
        ngModel: "=",
        hash: "=",
        percentCompleted: "=",
        maxSize: "="
      },
      restrict: 'A',
      link: function($scope, element, attrs) {
        $scope.percentCompleted = undefined;

        element.bind('change', function(){
          var valid = true;
          if ($scope.xhr) $scope.xhr.abort();

          var fd = new FormData();

          angular.forEach(element[0].files, function (file) {
            if ($scope.maxSize && file.size/1024/1024 > $scope.maxSize) {
              valid = false;
              return
            }
            fd.append("attachments[]", file);
          })

          if (!valid) {
            ngNotify.set("File size is more then " + $scope.maxSize + " Mb", "error")
            return false;
          }

          $scope.xhr = new XMLHttpRequest;

          $scope.percentCompleted = 0;
          
          $scope.xhr.upload.onprogress = function(e) {
              $scope.$apply(function() {
                  if (e.lengthComputable) {
                      $scope.percentCompleted = Math.round(e.loaded / e.total * 100);
                  }
              });
          };

          $scope.xhr.onload = function() {
            var res = JSON.parse(this.responseText)
            
            if (this.status == 200) {
              $scope.$apply(function() {
                if (!$scope.hash) {
                  if (attrs.multiple) {
                    $scope.ngModel = $scope.ngModel || [];
                    angular.forEach(res, function (attachment) {
                      $scope.ngModel.push(attachment);
                    });
                  } else {
                    $scope.ngModel = res[0];
                  }
                } else {
                  $scope.ngModel = $scope.ngModel || {};
                  angular.forEach(res, function(value, key) {
                    $scope.ngModel[key] = $scope.ngModel[key] || [];
                    angular.forEach(value, function (attachment) {
                      $scope.ngModel[key].push(attachment);
                    });
                  });
                }

                $scope.percentCompleted = undefined;
              });
            } else {
              ngNotify.set(res.msg || "Uploading error", "error")
            }
          };


          $scope.xhr.open('POST', $scope.fileupload);
          $scope.xhr.setRequestHeader('X-XSRF-Token', $cookies.get('XSRF-TOKEN'));
          $scope.xhr.send(fd);

          element[0].value = '';
        })
      }
    }
  }])
angular.module("oxymoron.directives.clickOutside", [])
  .directive('clickOutside', ['$document', function ($document) {
    return {
      restrict: 'A',
      scope: {
        clickOutside: '&',
        clickOutsideIf: '='
      },
      link: function (scope, el, attr) {
        var handler = function (e) {
          if (scope.clickOutsideIf && el !== e.target && !el[0].contains(e.target) && document.body.contains(e.target)) {
            scope.$apply(function () {
                scope.$eval(scope.clickOutside);
            });
          }
        }

        $document.bind('click', handler);

        scope.$on('$destroy', function () {
          $document.unbind('click', handler)
        })
      }
    }
  }])

angular.module("oxymoron.directives", ['oxymoron.directives.fileupload', 'oxymoron.directives.contentFor', 'oxymoron.directives.clickOutside'])
  angular.module("oxymoron.notifier", [])
  .run(['$rootScope', 'ngNotify', 'Validate', '$state', '$http', '$location', 'Notice', function ($rootScope, ngNotify, Validate, $state, $http, $location, Notice) {
    ngNotify.config({
        theme: 'pure',
        position: 'top',
        duration: 2000,
        type: 'info'
    });

    var callback = function(type, res) {
      if (res.data && angular.isObject(res.data)) {
        if (res.data.msg || res.data.error) {
          Notice.callback(type, res);
        }

        if (res.data.errors) {
          Validate(res.data.form_name || res.config.data.form_name, res.data.errors)
        }

        if (res.data.reload) {
          if (res.data.redirect_to_url) {
            window.location = res.data.redirect_to_url;
          } else if (res.data.redirect_to) {
            $state.transitionTo(res.data.redirect_to, res.data.redirect_options || {}, {notify: false, location: true, reload: true});
          }
        } else {
          if (res.data.redirect_to_url) {
            $location.url(res.data.redirect_to_url);
          } else if (res.data.redirect_to) {
            $state.go(res.data.redirect_to, res.data.redirect_options || {});
          }
        }

        if (res.data.reload) {
          window.location.reload();
        }
      }
    }

    $rootScope.$on('loading:finish', function (h, res) {
      callback('success', res)
    })

    $rootScope.$on('loading:error', function (h, res, p) {
      callback('error', res)
    })


  }])

  angular.module('oxymoron', ['ngNotify', 'ngCookies', 'ui.router', 'ngResource', 'oxymoron.directives', 'oxymoron.services', 'oxymoron.config', 'oxymoron.notifier'])

}).call(this);

(function () {
  var Routes = function () {
    var self = this,
        routes = {"rails_info_properties":{"defaults":{},"path":"/rails/info/properties"},"rails_info_routes":{"defaults":{},"path":"/rails/info/routes"},"rails_info":{"defaults":{},"path":"/rails/info"},"rails_mailers":{"defaults":{},"path":"/rails/mailers"},"root":{"defaults":{},"path":"/"},"new_user_session":{"defaults":{},"path":"/users/sign_in"},"user_session":{"defaults":{},"path":"/users/sign_in"},"destroy_user_session":{"defaults":{},"path":"/users/sign_out"},"new_user_password":{"defaults":{},"path":"/users/password/new"},"edit_user_password":{"defaults":{},"path":"/users/password/edit"},"user_password":{"defaults":{},"path":"/users/password"},"cancel_user_registration":{"defaults":{},"path":"/users/cancel"},"new_user_registration":{"defaults":{},"path":"/users/sign_up"},"edit_user_registration":{"defaults":{},"path":"/users/edit"},"user_registration":{"defaults":{},"path":"/users"},"uploads_avatar":{"defaults":{},"path":"/uploads/avatar"},"search":{"defaults":{},"path":"/search"},"groups":{"defaults":{},"path":"/groups"},"new_group":{"defaults":{},"path":"/groups/new"},"edit_group":{"defaults":{},"path":"/groups/:id/edit"},"group":{"defaults":{},"path":"/groups/:id"},"themes":{"defaults":{},"path":"/themes"},"new_theme":{"defaults":{},"path":"/themes/new"},"edit_theme":{"defaults":{},"path":"/themes/:id/edit"},"theme":{"defaults":{},"path":"/themes/:id"},"news_index":{"defaults":{},"path":"/news"},"new_news":{"defaults":{},"path":"/news/new"},"edit_news":{"defaults":{},"path":"/news/:id/edit"},"news":{"defaults":{},"path":"/news/:id"},"posts":{"defaults":{},"path":"/posts"},"new_post":{"defaults":{},"path":"/posts/new"},"edit_post":{"defaults":{},"path":"/posts/:id/edit"},"post":{"defaults":{},"path":"/posts/:id"},"touch_users":{"defaults":{},"path":"/users/touch"},"metrics_users":{"defaults":{},"path":"/users/metrics"},"rate_user":{"defaults":{},"path":"/users/:id/rate"},"ban_user":{"defaults":{},"path":"/users/:id/ban"},"unban_user":{"defaults":{},"path":"/users/:id/unban"},"users":{"defaults":{},"path":"/users"},"user":{"defaults":{},"path":"/users/:id"}};

    self.defaultParams = {}

    var serialize = function(obj, prefix) {
      var str = [];
      for(var p in obj) {
        if (obj.hasOwnProperty(p)) {
          var k = prefix ? prefix + "[" + (Array.isArray(obj) ? '' : p) + "]" : p, v = obj[p];
          str.push(typeof v == "object" ?
            serialize(v, k) :
            encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
      }
      return str.join("&");
    }

    var omit = function (hash, key) {
      var hash = angular.copy(hash);
      delete hash[key]
      return hash
    }


    angular.forEach(routes, function (val, key) {
      var result = '';

      var gsub = function(params) {
        if (params.format) {
          result += '.' + params.format
        }

        var params = omit(params, 'format');
        angular.forEach(params, function (v, k) {
          var subst = ':' + k;
          if (result.search(subst) != -1) {
            result = result.replace(subst, v);
            params = omit(params, k);
          }
        })

        if (result.search(/\*\w+/)!=-1) {
          result = result.replace(/\*(\w+)/, function (a, b) {
            return params[b];
          })
        }
        
        if (Object.keys(params).length)
          result += '?'+serialize(params)

        return result;
      }

      self[key+'_path'] = function (params) {
        var params = angular.extend(angular.copy(val.defaults), params || {});
        result = val.path;
        var defaultParams = angular.copy(self.defaultParams);
        return gsub(angular.extend(defaultParams, params));
      }

      self[key+'_url'] = function (params) {
        return window.location.origin + self[key+'_path'](params)
      }
    })
  }

  window.Routes = new Routes();

}).call(this)
