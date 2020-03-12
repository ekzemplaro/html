// ------------------------------------------------------------------------
//	map_library.js
//
//						mar/10/2018
// ------------------------------------------------------------------------
const file_json = "tochigi.json"
const file_library = "library.json"

jQuery.getJSON(file_json,function (data)
	{
	jQuery.getJSON(file_library,function (library)
		{
		jQuery("#outarea_aa").text ("*** start ***")
		draw_map_proc(data,library)
		jQuery("#outarea_hh").text ("*** end ***")
		})
	})

// ------------------------------------------------------------------------
function draw_map_proc(data_in,library_in)
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
		.attr('name', function(d) {
			const pp = d.properties;
           		this.style.fill = add_color_proc(pp,library_in)
			return pp.N03_004;
			})
		.attr('key', function(d) {
			const pp = d.properties;
			return pp.N03_007
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
		const key = this.getAttribute('key')
		const name = this.getAttribute('name')
		const url = library_in[key].url
		var str_out = key + "<br />"
		str_out += name + "<br />"
		str_out += url + "<br />"
		jQuery("#outarea_cc").html (str_out)
            })

}

// ------------------------------------------------------------------------
function add_color_proc(pp,library_in)
{
	var color = 'silver'

	const key = pp.N03_007

	if (key in library_in)
		{
		const status = library_in[key].status

		if (status == 1)
			color = 'green'
		else if (status == -1)
			color = 'red'
		}

	return	color
}

// ------------------------------------------------------------------------
