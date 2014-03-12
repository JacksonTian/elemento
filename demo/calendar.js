!(function () {
  var root = this;

  var create = function (root) {
    return {
      root: root,
      template: function () {
        var tpl = document.createElement('template');
        tpl.innerHTML = '<div id="content"></div>';
        return tpl;
      }(),
      readyCallback: function () {
        this.root.innerHTML = this.template.innerHTML;
        var root = this.root;
        root.addEventListener('mouseover', function () {
          root.querySelector('#content').innerHTML = 'mouseover';
        });
        root.addEventListener('mouseout', function () {
          root.querySelector('#content').innerHTML = 'mouseout';
        });
      }
    };
  };

  root['calendar'] = {
    create: create
  };
})();
