// -----------------------------------------------------------------------
//	schools/display_table.js
//
//					Dec/24/2024
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [4]:
function display_table_proc (rec)
{
	var str_out = ""
	str_out += '<table class="fixed-table">'
	str_out += header_proc()

	var count_articles = 0

	for (var key in rec)
		{
		const value = rec[key]
		str_out += record_proc(key,value)

		count_articles += 1
		}

	str_out += header_proc()

	str_out += "</table>"

	var str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"

	document.querySelector("#area_likes").innerHTML = str_tmp

	return	str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(key,value)
{
	const times = value['times']

	const dd = key.split("_")
	var str_out = "<tr>"

	str_out += "<td rowspan=" + times + ">" + dd[0] + "</td>"
	str_out += "<td rowspan=" + times + ">" + dd[1] + "</td>"

	value['records'].forEach(function (bbx)
		{
//	str_out += "<td>" + bbx['school'] + "</td>"
//	str_out += "<td>" + bbx['date_held'] + "</td>"
	str_out += "<td>" + bbx['target'] + "</td>"
	str_out += "<td>" + bbx['title'] + "</td>"
	str_out += "<td>" + bbx['name'] + "</td>"
	str_out += "</tr>"
		})

	return str_out
}

// -----------------------------------------------------------------------
function header_proc()
{
	var str_out = ""
	str_out += "<tr>"
	str_out += "<th class='school'>場所</th>"
	str_out += "<th class='date_held'>年月日</th>"
	str_out += "<th class='target'>対象</th>"
	str_out += "<th>題名</th>"
	str_out += "<th class='name'>語った人</th>"
	str_out += "</tr>"

	return	str_out
}

// -----------------------------------------------------------------------
