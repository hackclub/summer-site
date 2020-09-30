# [Hack Club Summer of Making](https://summer.hackclub.com)

53 years ago, 100,000 people gathered in San Francisco for what was later called the Summer of Love.

Welcome to the [Hack Club Summer of Making](https://hack.af/summer-of-making). It’s not an event, or a program with a start/end date. It’s a theme for the summer and a challenge to everyone reading this: this summer, what will you make? What will you learn? What will you build?

We’re doing a few big things to support you, including giving out $50,000 in free electronics (thanks GitHub!) and building a Snapchat streaks-like system for learning, but really the Summer of Making is about you.

We don't want to descend from above with a "program" for you to do. If this is going to be the best summer ever, it'll be because of what you all choose to hack on & learn from.

Will you choose to push yourself outside your comfort zone, whether it's building your first website or a model rocket? What about using React.js for the first time or constructing a smart mirror?

At Hack Club, we're going to do everything we can to support you. There are four ways to get started:

1. **Get a Summer of Making sticker in the mail**: [Request one here](https://hack.af/som-stickers). We are printing thousands and will be shipping to everyone who requests.
2. **Have GitHub buy you electronics for your hardware project.** We are giving **$50,000 in hardware grants** from GitHub to fund electronics projects. Applications are open today. [Learn more](https://hack.af/hwp-learn-more) and [apply with an idea](https://hack.af/hwp-apply). Priority is given to existing Hack Club members.
3. **Show up every day in** [**#scrapbook**](https://hackclub.slack.com/archives/C01504DCLVD), sharing photo and video updates from your learning and getting a beautiful portfolio. See the in-progress projects at [**scrapbook.hackclub.com**](https://scrapbook.hackclub.com/) ([see Zach's](https://scrapbook.hackclub.com/zrl/)). You can even customize your CSS and set up a custom domain.
4. **Weekly Zoom events shared in** [**#announcements**](https://hackclub.slack.com/archives/C0266FRGT): All summer, [Melody](https://hack.af/som-melody) & others from the Hack Club team are running weekly live events, including coding workshops, show & tells, office hours, how to customize your [scrapbook](https://hack.af/som-scrapbook) with custom CSS, and more. [Log on to the Hack Club Slack to participate.](https://hack.af/som-slack/)

It's a strange time. So why not make something?

---

By [@sampoder](https://github.com/sampoder) & [@lachlanjc](https://lachlanjc.com) for Hack Club, 2020. MIT License.

Code-

<!DOCTYPE html>
<htm>
<meta charset="utf-8">
<style>

.links {
  stroke: #000;
  stroke-opacity: 0.2;
}

.polygons {
  fill: none;
  stroke: #000;
}

.polygons :first-child {
  fill: #f00;
}

.sites {
  fill: #000;
  stroke: #fff;
}

.sites :first-child {
  fill: #fff;
}

</style>
<body>
<svg width="960" height="500"></svg>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>

var svg = d3.select("svg").on("touchmove mousemove", moved),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var sites = d3.range(100)
    .map(function(d) { return [Math.random() * width, Math.random() * height]; });

var voronoi = d3.voronoi()
    .extent([[-1, -1], [width + 1, height + 1]]);

var polygon = svg.append("g")
    .attr("class", "polygons")
  .selectAll("path")
  .data(voronoi.polygons(sites))
  .enter().append("path")
    .call(redrawPolygon);

var link = svg.append("g")
    .attr("class", "links")
  .selectAll("line")
  .data(voronoi.links(sites))
  .enter().append("line")
    .call(redrawLink);

var site = svg.append("g")
    .attr("class", "sites")
  .selectAll("circle")
  .data(sites)
  .enter().append("circle")
    .attr("r", 2.5)
    .call(redrawSite);

function moved() {
  sites[0] = d3.mouse(this);
  redraw();
}

function redraw() {
 var diag={code.cpp(Ideal.Forelse_cpp)}
  polygon = polygon.data(diagram.polygons()).call(redrawPolygon);
  link = link.data(diagram.links()), link.exit().remove();
  link = link.enter().append("line").merge(link).call(redrawLink);
  site = site.data(sites).call(redrawSite);
}

function redrawPolygon(polygon) {
  polygon
      .attr("d", function(d) { return d ? "M" + d.join("L") + "Z" : null; });
}

function redrawLink(link) {
  link
      .attr("x1", function(d) { return d.source[0]; })
      .attr("y1", function(d) { return d.source[1]; })
      .attr("x2", function(d) { return d.target[0]; })
      .attr("y2", function(d) { return d.target[1]; });
}

function redrawSite(site) {
  site
      .attr("cx", function(d) { return d[0]; })
      .attr("cy", function(d) { return d[1]; });
}

</script>
</body>
</html>
