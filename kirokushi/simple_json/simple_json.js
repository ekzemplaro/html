// -----------------------------------------------------------------------
//	simple_json.js
//
//					Jul/21/2025
//
// -----------------------------------------------------------------------
// 'use strict'

// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** simple_json.js *** start ***"

	const file_json = "./data_in.json"

	const place = ".contents"

	read_fetch_table_proc(file_json,place)

	document.querySelector("#outarea_hh").innerHTML = "*** simple_json.js *** end ***"
}

// -----------------------------------------------------------------------
// [4]:
function read_fetch_table_proc(url,place)
{
	fetch(url).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {
		const array_aa = JSON.parse(data)

		show_table_proc(place,array_aa)
	})

}
// -----------------------------------------------------------------------
// [4-6]:
function show_table_proc(place,array_aa)
{
	let str_out = ""
	let icount = 0
	str_out += "<table>"

	str_out += display_th()

	console.log(array_aa)

	for (let it in array_aa)
		{
		const value = array_aa[it]
		str_out += record_proc(value)
		icount += 1
		}

	str_out += display_th()
	str_out += "</table>"

	document.querySelector(place).innerHTML = str_out
	document.querySelector('.count').innerText = icount
}

// -----------------------------------------------------------------------
// [4-6-4]:
function record_proc(value)
{

	let str_out = "<tr>"

	str_out += "<td>" + value['school'] + "</td>"
	str_out += "<td>" + value['date_held'] + "</td>"
	str_out += "<td>" + value['target'] + "</td>"
	str_out += "<td>" + value['title'] + "</td>"
	str_out += "<td>" + value['name'] + "</td>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
// [4-6-2]:
function display_th()
{
	let str_out = ""
	str_out += "<tr>"
	str_out += "<th>場所</th>"
	str_out += "<th>年月日</th>"
	str_out += "<th>対象</th>"
	str_out += "<th>題名</th>"
	str_out += "<th>語った人</th>"
	str_out += "</tr>"

	return str_out
}

// -----------------------------------------------------------------------
let dict_aa = []
// -----------------------------------------------------------------------
// [8]:
function filter_proc(obj)
{
	const id_select = obj.id

	document.querySelector("#outarea_bb").innerHTML = "obj.id = " + obj.id

	var elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (var it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	var str_out = ""
	var data_new = []

/*
	data_new = filter_school_proc(dict_aa,id_select)
	str_out = display_table_school_proc(data_new)
*/
//	document.querySelector(".contents").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_school_proc (rec,id_select)
{
	var dict_new = {}

	for (var key in rec)
		{
		const value = rec[key]
		const dd = key.split("_")
		if (dd[0] == id_select)
			{
			dict_new[key] = value
			}
		}

	return	dict_new
}

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
