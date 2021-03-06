Elemento
==============
Custom Element


## Custom Element

```
<element name="calendar">
  <template>
    <div id="content"></div>
  </template>
  <script>
  ({
    readyCallback: function () {
      this.root.innerHTML = this.template.innerHTML;
      var root = this.root;
      root.addEventListener("mouseover", function () {
        root.querySelector('#content').innerHTML = 'mouseover';
      });
      root.addEventListener("mouseout", function () {
        root.querySelector('#content').innerHTML = 'mouseout';
      });
    }
  });
  </script>
</element>
```
编译后

```
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
```

解决组件开发的过程中，模版开发经常导致
