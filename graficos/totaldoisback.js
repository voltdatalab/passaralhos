(function() {

  var margin = {
    top: 30,
    bottom: 50,
    left: 220,
    right: 40
  };
  var width = 900 - margin.left - margin.right;
  var height = 1550 - margin.top - margin.bottom;

  var xScale = d3.scale.linear().range([0, width]);
  var yScale = d3.scale.ordinal().rangeRoundBands([0, height], 1.8, 0);

  var numTicks = 7;
  var xAxis = d3.svg.axis().scale(xScale)
    .orient("top")
    .tickSize((-height))
    .ticks(numTicks);

  var svg = d3.select("#chartdois").append("svg")
    .attr("viewBox", "0 0 900 1550")
    .attr("preserveAspectRatio", "xMidYMid meet")

    //.attr("width", width + margin.left + margin.right)
    //.attr("height", height + margin.top + margin.bottom)
    .attr("class", "base-svg");

  var barSvg = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("class", "bar-svg");

  var x = barSvg.append("g")
    .attr("class", "x-axis");

  var url = "https://raw.githubusercontent.com/voltdatalab/dados/master/passaralhos/por_veiculo_total.json";

  d3.json(url, function(data) {

    var xMax = d3.max(data, function(d) {
      return d.total;
    });
    var xMin = 0;
    xScale.domain([xMin, xMax]);
    yScale.domain(data.map(function(d) {
      return d.veiculo;
    }));

    var groups = barSvg.append("g").attr("class", "labels")
      .selectAll("text")
      .data(data)
      .enter()
      .append("g");

    groups.append("text")
      .attr("x", "0")
      .attr("y", function(d) {
        return yScale(d.veiculo);
      })
      .text(function(d) {
        return d.veiculo;
      })
      .attr("text-anchor", "end")
      .attr("dy", ".9em")
      .attr("dx", "-.32em")
      .attr("id", function(d, i) {
        return "label" + i;
      });

    var bars = groups
      .attr("class", "bars")
      .append("rect")
      .attr("width", function(d) {
        return xScale(d.total);
      })
      .attr("height", 18)
      .attr("x", xScale(xMin))
      .attr("y", function(d) {
        return yScale(d.veiculo);
      })
      .attr("id", function(d, i) {
        return "bar" + i;
      });

    groups.append("text")
      .attr("x", function(d) {
        return xScale(d.total);
      })
      .attr("y", function(d) {
        return yScale(d.veiculo);
      })
      .text(function(d) {
        return d.total;
      })
      .attr("text-anchor", "end")
      .attr("dy", "1.2em")
      .attr("dx", "1.5em")
      .attr("id", "precise-value");

    bars
      .on("mouseover", function() {
        var currentGroup = d3.select(this.parentNode);
        currentGroup.select("rect").style("fill", "rgba(167, 0, 44, .7)");
        currentGroup.select("text").style("font-weight", "bold")
          .style("fill", "#444");
      })
      .on("mouseout", function() {
        var currentGroup = d3.select(this.parentNode);
        currentGroup.select("rect").style("fill", "#444");
        currentGroup.select("text").style("font-weight", "normal");
      });

    x.call(xAxis);
    var grid = xScale.ticks(numTicks);
    barSvg.append("g").attr("class", "grid")
      .selectAll("line")
      .data(grid, function(d) {
        return d;
      })
      .enter().append("line")
      .attr("y1", 0)
      .attr("y2", height + margin.bottom)
      .attr("x1", function(d) {
        return xScale(d);
      })
      .attr("x2", function(d) {
        return xScale(d);
      })
      .attr("stroke", "#fff");

  });

})();
