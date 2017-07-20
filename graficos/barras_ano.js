//baseado em http://d3plus.org/examples/advanced/a9a9ada6101818be4fdc/

var json = (function() {
  var json = null;
  $.ajax({
    async: false,
    global: false,
    url:
      "https://raw.githubusercontent.com/voltdatalab/passaralhos/gh-pages/_data/jornalistas.json",
    dataType: "json",
    success: function(data) {
      json = data;
    }
  });
  return json;
})();

var visualization = d3plus
  .viz()
  .container("#chart")
  .data(json)
  .height({ max: 600, value: 500 })
  //.width({ max: 600, value: 500 })
  .type("bar")
  .id("ano")
  .x({ value: "ano", label: "" })
  .y({ value: "jornalistas", label: "demissões" })
  .legend(false)
  .color(function(d) {
    return d.jornalistas < 300 ? "#9ecae1" : "#386cb0";
  })
  .text({"value": "jornalistas"})
  .resize( false )
  .format("pt_BR")
  .margin("30px")
  .tooltip({ value: "valor", background: "#cbcbcb" })
  //.fontSize(16)
  .font({ family: "Inconsolata"})
  .tooltip(["jornalistas", "total"])
  .draw();
