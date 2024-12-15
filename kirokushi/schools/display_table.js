// -----------------------------------------------------------------------
//	schools/display_table.js
//
//					Dec/15/2024
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [4]:
function display_table_proc (rec)
{
	var str_out = ""
	str_out += "<table>"
	str_out += header_proc()

	var sum_likes = 0
	var count_articles = 0

	rec.forEach(function(unit)
		{
		str_out += "<tr>"
		str_out += "<td>" + unit.school + "</td>"

		str_out += "<td>" + unit.date_held + "</td>"
		str_out += "<td>" + unit.class + "</td>"
		str_out += "<td>" + unit.title + "</td>"
		str_out += "<td>" + unit.name + "</td>"

		str_out += "</tr>"

		count_articles += 1
		})

	str_out += header_proc()

	str_out += "</table>"

	var str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"

	document.querySelector("#area_likes").innerHTML = str_tmp

	return	str_out
}

// -----------------------------------------------------------------------
function header_proc()
{
	var str_out = ""
	str_out += "<tr>"
	str_out += "<th>場所</th>"
	str_out += "<th>年月日</th>"
	str_out += "<th>対象</th>"
	str_out += "<th>題名</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return	str_out
}

// -----------------------------------------------------------------------
