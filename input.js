(function() {
  var input = {
    slider: 0,
    button: false,

    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
      this.updateSlider();
    },

    cacheDom: function() {
      this.inputsEl = document.querySelector("#inputsModule");
      this.sliderEl = document.querySelector(".slider");
      this.buttonEl = document.querySelector(".submit");
      this.sliderVal = document.querySelector("#slider-value");
      this.buttonVal = document.querySelector("#button-value");
    },

    bindEvents: function() {
      this.sliderEl.oninput = this.updateSlider.bind(this);
      this.buttonEl.onclick = this.updateButton.bind(this);
    },

    render: function() {
      var data = {
        slider: this.slider,
        button: this.button
      };
      this.sliderVal.innerHTML = "value: " + `${this.slider}`;
      this.buttonVal.innerHTML = "clicked: " + `${this.button}`;
    },

    updateSlider: function() {
      this.slider = this.sliderEl.value;
      this.render();
    },

    updateButton: function() {
      this.button = true;
      this.render();
    }
  };

  input.init();
})();
