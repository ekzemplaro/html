// -----------------------------------------------------------------------
//	person/display_table_person.js
//
//					Jul/31/2025
//
// -----------------------------------------------------------------------
'use strict'
// -----------------------------------------------------------------------
// [4]:
function display_table_person_proc(rec,order)
{
	let str_out = ""
	str_out += '<table class="fixed-table">'
	str_out += header_proc()

	let count_articles = 0

	let array_aa = []

	for (let key in rec)
		{
		const value = rec[key]
		array_aa.push(value)
		}

	let array_title = Array.from(array_aa[0]['records'])

	let array_date = Array.from(array_aa[0]['records'])
	array_date.sort(function(first, second){
 		if (first['date_held'] < second['date_held']){
			return -1;
		}else if (first['date_held'] > second['date_held']){
		return 1;
		}else{
		return 0;
		}
		})



	if (order == "title")
		{
		str_out += record_proc(array_title)
		}
	else
		{
		str_out += record_proc(array_date)
		}
/*
	for (let it in array_aa)
		{
		const value = array_aa[it]
		str_out += record_proc(value)

		count_articles += 1
		}
*/

	str_out += header_proc()

	str_out += "</table>"

	let str_tmp = "Items: " + count_articles + "&nbsp;&nbsp;"

	document.querySelector("#area_likes").innerHTML = str_tmp

	return	str_out
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(array_in)
{
console.log("*** record_proc aaa ***")
console.log(array_in)
console.log("*** record_proc bbb ***")

//	const times = value['times']

	let str_out = "<tr>"


//	value['records'].forEach(function (bbx)
//		{
	for (let it in array_in)
		{
		let value = array_in[it]
 
	str_out += "<td>" + value['title'] + "</td>"
	str_out += "<td>" + value['school'] + "</td>"
	str_out += "<td>" + value['target'] + "</td>"
	str_out += "<td>" + value['date_held'] + "</td>"
	str_out += "</tr>"
		}

console.log(str_out)

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
