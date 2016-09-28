//baseado em http://d3plus.org/examples/advanced/a9a9ada6101818be4fdc/

var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://raw.githubusercontent.com/voltdatalab/dados/master/passaralhos/geral.json',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })
    ();


  var visualization = d3plus.viz()
    .container("#grafico")
    .data(json)
    .height({"max": 1000, "value":1000})
    .type("bar")
    .id("veiculo")
    .x({"value" : "jornalistas", "grid": false})
    .y({"scale": "discrete", "value" : "veiculo","grid": false})
    .order({"value": "jornalistas", "sort":"asc"})
    .color({"value": "jornalistas"})
    .size("jornalistas")
    .format("pt_BR")
    .margin( "0px 10px" )
    .tooltip({"background":"#ededed"})
    .font({"family": "Inconsolata"})
    .legend({"value": false, "align": "middle"})
  .time({"value": "ano"})
    .ui([
      {
        "method" : "size",
        "label": "Organizar por:",
        "type": "button",
        "value": ["jornalistas", "total"]
      },
    ])
    .draw();
