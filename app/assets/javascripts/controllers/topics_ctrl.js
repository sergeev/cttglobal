app.controller('TopicsCtrl', ['$scope', '$location', 'Topic', 'action', 'Post', 'News', function ($scope, $location, Topic, action, Post, News) {
  var ctrl = this;

  action('show', function (params) {
    var filter = {
      topic_id: params.id
    }

    ctrl.post = {
      topic_id: params.id
    }

    ctrl.topic = Topic.get(params);

    ctrl.query = function (page, callback) {
      Post.get({filter: filter, page: page}, function (res) {
        ctrl.posts = res;
        if (callback) callback();
      });
    }

    ctrl.query(1)

    ctrl.send = function () {
      Post.create({post: ctrl.post}, function (res) {
        ctrl.post = {
          topic_id: params.id
        }
        ctrl.query(Math.ceil(ctrl.posts.total_count/10))
      })
    }
  })

  action('new', function () {
    var news_id = $location.search().news_id;
    ctrl.news = news.get({id: news_id});
    ctrl.topic = Topic.new({topic: {news_id: news_id}});
    ctrl.save = Topic.create;
  })

  action('edit', function (params) {
    ctrl.topic = Topic.edit(params, function (res) {
      ctrl.news = news.get({id: res.news_id});
    });
    ctrl.save = Topic.update;
  })
}])
