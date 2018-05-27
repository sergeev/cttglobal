app.controller('NewsCtrl', ['$scope', 'News', 'Topic', 'action', '$location', function ($scope, News, Topic, action, $location) {
  var ctrl = this;

  action('show', function (params) {
    var filter = {
      news_id: params.id
    }

    ctrl.news = News.get(params);

    ctrl.query = function (page) {
      Topic.get({
        filter: filter,
        page: page
      }, function (res) {
        ctrl.topics = res;
      });
    }

    ctrl.query($location.search().page || 1)

    ctrl.destroy = function (topic) {
      if (confirm("Вы уверены?"))
        Topic.destroy({id: topic.id})
    }
  })

  action('new', function () {
    News.new(function (res) {
      ctrl.news = res;
      ctrl.news.group_id = $location.search().group_id;
    });
    ctrl.save = News.create;
  })

  action('edit', function (params) {
    ctrl.news = News.edit(params);
    ctrl.save = News.update;
  })
}])
