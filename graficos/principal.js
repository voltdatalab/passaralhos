//https://raw.githubusercontent.com/voltdatalab/dados/master/passaralhos/geral.json

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
    .container("#grafico")
    .data(json)
    .height({"max": 900, "value":900})
    .type("tree_map")
    .id(["midia", "veiculo", "ano"])
    .legend({"size": 75})
    .color({"scale": ['#252235','#E1E4E8','#828BA0','#a7000c','#E23B22'], "value": "midia"})
    .size("jornalistas")
    .title({"value": "Quadro completo sobre demissões de jornalistas", "font":{"size": "30px"}})
    .title({
      "sub": {"font": {"size": 20},
      "value": "Gráfico interativo - pesquise por ano, mídia e veículo"} ,
      "total": false
    })
    .footer({
      "link": "http://www.voltdata.info",
      "value": "Fonte: Volt Data Lab"
    })
    .format("pt_BR")
    .margin( "0px 0px" )
    .tooltip({"background":"#ededed"})
    .font({"family": "Inconsolata"})
    .labels({"align": "center", "valign": "top", "padding": 50, "resize": true})
    .time({"value": "ano"})
    .ui([
      {
        "method" : "size",
        "label": "Organizar por:",
        "type": "button",
        "value": ["jornalistas", "total"]
      },
      {
        "method" : "color",
        "label": "Escala de cores por:",
        "text": "midia",
        "type": "button",
        "value"  : [{"Jornalistas": "jornalistas"}, {"Total": "total"}]
      },
    ])
    .draw();
