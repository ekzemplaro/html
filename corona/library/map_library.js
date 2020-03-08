// ------------------------------------------------------------------------
//	map_library.js
//
//						mar/08/2018
// ------------------------------------------------------------------------
const file_json = "tochigi.json"

jQuery.getJSON(file_json,function (data)
	{
	jQuery("#outarea_aa").text ("*** start ***")
	draw_map_proc(data)
	jQuery("#outarea_hh").text ("*** end ***")
	})

// ------------------------------------------------------------------------
function draw_map_proc(data_in)
{
	const WIDTH = 700
	const HEIGHT = 560

	var svg = d3.selectAll("#map")
		.attr("width", WIDTH)
		.attr("height", HEIGHT);

	var gg = svg.append("g");

        var projection = d3.geoMercator()
            .scale(25000)
            .center(d3.geoCentroid(data_in))
            .translate([WIDTH / 2, HEIGHT / 2])

        var path = d3.geoPath()
            .projection(projection)

        gg.selectAll('path')
		.data(data_in.features)
		.enter()
		.append('path')
		.attr('d', path)
		.attr('class', 'area')
		.attr('data-address', function(d) {
			const pp = d.properties;
           		this.style.fill = add_color_proc(pp)
			return pp.N03_007 + " " + pp.N03_004;
			})
/*
		.on('mouseover', function() {
                this.style.fill = 'red';
            })
            .on('mouseout', function() {
                this.style.fill = 'silver';
		})
*/
            .on('click', function() {
                this.style.fill = 'blue';
	jQuery("#outarea_bb").text (this)
	jQuery("#outarea_cc").text (this.getAttribute('data-address'))
//		console.log(this)
            })

}

// ------------------------------------------------------------------------
function add_color_proc(pp)
{
	var color = 'silver'

	switch (pp.N03_007)
		{
 		case "09201":
 		case "09203":
 		case "09204":
 		case "09208":
 		case "09209":
 		case "09214":
 		case "09215":
		case "09343":
		case "09344":
 		case "09361":
 		case "09386":
			color = 'red'
			break

 		case "09202":
 		case "09205":
		case "09216":
		case "09301":
		case "09342":
		case "09345":
		case "09364":
			color = 'green'
			break
		}

	return	color
}

// ------------------------------------------------------------------------
