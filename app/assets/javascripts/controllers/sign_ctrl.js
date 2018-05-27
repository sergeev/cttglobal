app.controller('SignCtrl', ['$scope', '$http', '$interval', 'User', function ($scope, $http, $interval, User) {
  var ctrl = this;

  ctrl.title = {
    in: "Вход",
    up: "Регистрация"
  }

  ctrl.sign = {
    in: function () {
      $http.post(Routes.user_session_path(), {user: ctrl.user})
        .success(function (res) {
          gon.current_user = res.current_user;
        })
    },
    out: function () {
      $http.delete(Routes.destroy_user_session_path())
        .success(function () {
          gon.current_user = undefined;
        })
    },
    up: function () {
      $http.post(Routes.user_registration_path(), {user: ctrl.user})
        .success(function (res) {
          gon.current_user = res.current_user;
        })
    }
  }

  $scope.$watch(function () {
    return gon.current_user
  }, function (current_user) {
    if (current_user) {
      ctrl.method = 'user';
      ctrl.title.user = current_user.name;
    } else {
      ctrl.method = 'in';
    }
  })

  $interval(function () {
    User.metrics(function (res) {
      angular.extend(gon.current_user, res);
    })
  }, 10000)
}])
