!(function () {
  var root = this;

  var create = function (root) {
    function start() {
      this.tick();
      this._interval = setInterval(this.tick.bind(this), 1000);
    }
    function stop() {
      clearInterval(this._interval);
    }
    function fmt(n) {
      return (n < 10 ? '0' : '') + n;
    }
    return {
      root: root,
      template: function () {
        var tpl = document.createElement('template');
        tpl.innerHTML = '<span id="hh"></span>\n    <span id="sep">:</span>\n    <span id="mm"></span>';
        return tpl;
      }(),
      readyCallback: function () {
        this.root.innerHTML = this.template.innerHTML;
        if (this.parentElement) {
          start.call(this);
        }
      },
      insertedCallback: start,
      removedCallback: stop,
      tick: function () {
        var now = new Date();
        this.root.querySelector('#hh').textContent = fmt(now.getHours());
        this.root.querySelector('#sep').style.visibility = now.getSeconds() % 2 ? 'visible' : 'hidden';
        this.root.querySelector('#mm').textContent = fmt(now.getMinutes());
      },
      chime: function () {
      }
    };
  };

  root['tick-tock-clock'] = {
    create: create
  };
})();
