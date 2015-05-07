// SVG icon fill on category model for template overrides
Discourse.Category = Discourse.Category.extend({
  svgFill: function(){
    var color = this.get('color');
    if (color) {
      return 'fill: #' + color + ';'
  }
}.property('color')
});