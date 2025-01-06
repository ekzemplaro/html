// -----------------------------------------------------------------------
//	grades/display_table_grades.js
//
//					Jan/06/2025
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [4]:
function display_table_grades_proc (rec)
{
	let str_out = ""
	str_out += '<table class="fixed-table">'
	str_out += header_proc()

	let count_articles = 0

	for (let key in rec)
		{
		const value = rec[key]
		str_out += record_proc(value)

		count_articles += 1
		}

	str_out += header_proc()

	str_out += "</table>"

	let str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"

	document.querySelector("#area_likes").innerHTML = str_tmp

	return	str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(value)
{
	let dict_aa = {}
	let nn_count = 0
	let nn_title = 0

	value['records'].forEach(function (bbx)
		{
		const title = bbx['title']

		if(title in dict_aa)
			{
			dict_aa[title]['times'] += 1	
			}
		else
			{
			dict_aa[title] = {}
			dict_aa[title]['times'] = 1
			dict_aa[title]['records'] = []
			nn_title += 1
			}

		let unit_aa = {}
		unit_aa['school'] = bbx['school']
		unit_aa['date_held'] = bbx['date_held']
		unit_aa['name'] = bbx['name']

		dict_aa[title]["records"].push(unit_aa)

		nn_count += 1
		})

	let str_out = display_dict_proc(dict_aa)

	document.querySelector("#outarea_dd").innerText = nn_count
	document.querySelector("#outarea_ee").innerText = nn_title

	return str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function display_dict_proc(dict_aa)
{
	let str_out = ""
	for (let key in dict_aa)
		{
		const value = dict_aa[key]
		str_out += record_proc_unit(key,value)
		}

	return str_out
}

// -----------------------------------------------------------------------
function record_proc_unit(key,value)
{
	const times = value['times']
	let str_out = "<tr>"
	str_out += "<td rowspan=" + times + ">" + key + "</td>"
	value['records'].forEach(function (bbx)
		{
	str_out += "<td>" + bbx['school'] + "</td>"
	str_out += "<td>" + bbx['date_held'] + "</td>"
	str_out += "<td>" + bbx['name'] + "</td>"
	str_out += "</tr>"
		})

	return str_out
}

// -----------------------------------------------------------------------
function code_to_gakunen(code)
{
	let gakunen = ""

	const nn = code % 100

	if (nn == 0)
		{
		gakunen = "支援"
		}
	else
		{
		const mm = nn / 10
		gakunen = mm + "年"
		}

	return gakunen
}

// -----------------------------------------------------------------------
function header_proc()
{
	let str_out = ""
	str_out += "<tr>"
//	str_out += "<th class='target'>学年</th>"
	str_out += "<th>題名</th>"
	str_out += "<th class='school'>場所</th>"
	str_out += "<th class='date_held'>年月日</th>"
//	str_out += "<th class='target'>対象</th>"
	str_out += "<th class='name'>語った人</th>"
	str_out += "</tr>"

	return	str_out
}

// -----------------------------------------------------------------------
