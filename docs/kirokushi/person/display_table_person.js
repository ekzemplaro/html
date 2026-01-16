// -----------------------------------------------------------------------
//	person/display_table_person.js
//
//					Sep/12/2025
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [4]:
function display_table_person_proc(rec,order)
{
	let str_out = ""
	str_out += '<table class="fixed-table">'

	let count_articles = 0

	let array_aa = []

	for (let key in rec)
		{
		const value = rec[key]
		array_aa.push(value)
		}

	let array_title = Array.from(array_aa[0]['records'])
	let array_date = Array.from(array_aa[0]['records'])
	let array_school = Array.from(array_aa[0]['records'])

	array_date.sort(function(first, second){
 		if (first['date_held'] < second['date_held']){
			return -1;
		}else if (first['date_held'] > second['date_held']){
			return 1;
		}else{
			return 0;
		}
		})

	array_school.sort(sort_school_date_proc)

	if (order == "title")
		{
		str_out += record_proc(array_title)
		}
	else if (order == "date")
		{
		str_out += record_proc(array_date)
		}
	else if (order == "school")
		{
		str_out += record_proc(array_school)
		}
	else
		{
		str_out += record_title_only_proc(array_title)
		}

	str_out += "</table>"

	let str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"

	document.querySelector("#area_likes").innerHTML = str_tmp

	return	str_out
}

// -----------------------------------------------------------------------
// [4-4]:
function sort_school_date_proc(first,second)
{
	let rvalue = 0

 	if (first['school'] < second['school']){
		rvalue = -1
	}else if (first['school'] > second['school']){
		rvalue = 1
	}else{
		rvalue = sort_date_proc(first,second)
	}

	return rvalue
}

// -----------------------------------------------------------------------
// [4-4-6]:
function sort_date_proc(first,second)
{
 	if (first['date_held'] < second['date_held']){
		return -1;
	}else if (first['date_held'] > second['date_held']){
		return 1;
	}else{
		return 0;
	}
}

// -----------------------------------------------------------------------
// [4-6]:
function record_proc(array_in)
{
	let str_out = header_proc()

	for (let it in array_in)
		{
		let value = array_in[it]
	str_out += "<tr>"
 
	str_out += "<td>" + value['title'] + "</td>"
	str_out += "<td>" + value['school'] + "</td>"
	str_out += "<td>" + value['target'] + "</td>"
	str_out += "<td>" + value['date_held'] + "</td>"
	str_out += "</tr>"
		}

	str_out += header_proc()

	return str_out
}

// -----------------------------------------------------------------------
function header_proc()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "<th class='school'>場所</th>"
	str_out += "<th class='target'>対象</th>"
	str_out += "<th class='date_held'>年月日</th>"
	str_out += "</tr>"

	return	str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_title_only_proc(array_in)
{
	let str_out = header_title_only_proc()

	let title_before = ""
	for (let it in array_in)
		{
		let value = array_in[it]

		let title = value['title']

		if (title != title_before)
			{ 
			str_out += "<tr>"
			str_out += "<td>" + title + "</td>"
			str_out += "</tr>"

			title_before = title
			}
		}

	str_out += header_title_only_proc()

	return str_out
}

// -----------------------------------------------------------------------
function header_title_only_proc()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>題名</th>"
	str_out += "</tr>"

	return	str_out
}

// -----------------------------------------------------------------------
