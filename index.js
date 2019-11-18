(function() {
  var inputs = {
    slider: 0,
    buttonClick: false,

    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
      this.updateSlider();
    },

    cacheDom: function() {
      this.inputsEl = document.querySelector("#inputsModule");
      this.sliderEl = document.querySelector(".slider");
      this.buttonEl = document.querySelector(".button");
      this.sliderVal = document.querySelector("#slider-value");
    },

    bindEvents: function() {
      this.sliderEl.oninput = this.updateSlider.bind(this);
    },

    render: function() {
      var data = {
        slider: this.slider
      };
      this.sliderVal.innerHTML = data.slider;
    },

    updateSlider: function() {
      this.slider = this.sliderEl.value;
      this.render();
    },

    updateButton: function() {
      this.slider = this.sliderEl.value;
      this.render();
    }
  };

  inputs.init();
})();
