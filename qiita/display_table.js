// -----------------------------------------------------------------------
//	qiita/display_table.js
//
//					Nov/26/2021
//
// -----------------------------------------------------------------------
// [4]:
function display_table_proc (rec)
{
	const day_last_year =  get_last_year_proc ()
	const dd_last = Date.parse(day_last_year)

	var str_out = ""
	str_out += "<table>"
	str_out += "<tr>"
	str_out += "<th>no</th>"
	str_out += "<th>title</th>"
	str_out += "<th>LGTM</th>"
	str_out += "<th>updated_at</th>"
	str_out += "</tr>"

	var sum_likes = 0
	var count_articles = 0
	rec.forEach(function(unit)
		{
		str_out += "<tr>"
		str_out += "<td>" + unit.no + "</td>"
		str_out += "<td><a href='"
		str_out += unit.url + "' target='_blank'</a>"
		str_out += unit.title + "</td>"
		if (0 < unit.likes_count)
			{
			str_out += "<td class='green'>"

			sum_likes += unit.likes_count
			}
		else
			{
			str_out += "<td>"
			}
		str_out += unit.likes_count + "</td>"
		const ddx = Date.parse(unit.updated_at)
		if (ddx <= dd_last)
			{
			str_out += "<td class=red>"
			}
		else
			{
			str_out += "<td>"
			}
		str_out += unit.updated_at + "</td>"
		str_out += "</tr>"

		count_articles += 1
		})

	str_out += "</table>"

	var str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"
	str_tmp += "LGTM: " + sum_likes
	jQuery("#area_likes").html(str_tmp)

	return	str_out
}

// -----------------------------------------------------------------------
// [4-4]:
function get_last_year_proc ()
{
	const today = new Date ()
	var ddx = (1900 + today.getYear () - 1) + "-" + (today.getMonth () +1)
	ddx += "-" + today.getDate ()

	return ddx
}

// -----------------------------------------------------------------------
