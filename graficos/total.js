//baseado em http://d3plus.org/examples/advanced/a9a9ada6101818be4fdc/

var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': 'https://raw.githubusercontent.com/voltdatalab/passaralhos/gh-pages/_data/jornalistas.json',
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })
    ();

  var visualization = d3plus.viz()
    .container("#scatter")
    .data(json)
    .type("scatter")
    .id("veiculo")
    .height(1000)
    .x("jornalistas")
    .time({"value": "mes"})
    .tooltip({"background":"#ededed"})
    .y("mes")
    .size("jornalistas")
    .color({"heatmap": ['#9ecae1','#6baed6','#4292c6','#2171b5','#08519c'], "value": "jornalistas"})
    .legend(false)
    .padding(400)
    .format("pt_BR")
    .font({"family": "Inconsolata"})
    .ui([
      {
        "method" : "size",
        "label": "Tamano do círculo por:",
        "type": "button",
        "value": ["jornalistas", "total"]
      },
    ])
    .draw()
