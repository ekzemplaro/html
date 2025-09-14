// -----------------------------------------------------------------------
//	data_unit.js
//
//					Jul/21/2025
//
// -----------------------------------------------------------------------
// 'use strict'

let dict_aa = []
let school = ""
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** data_unit.js *** start ***"

	const file_json = "./list_processed.json"

	read_json_proc(file_json)

	document.querySelector("#outarea_hh").innerHTML = "*** data_unit.js *** end ***"
}

// -----------------------------------------------------------------------
// [4]:
function read_json_proc(url)
{
	fetch(url).then((response) => {
		if(!response.ok) {
			console.log('Read error!')
			throw new Error('error')
		} 
		console.log('Read ok!')
		return response.text()
	}).then((data)  => {
		dict_aa = JSON.parse(data)

	})

}

// -----------------------------------------------------------------------
// [8]:
function filter_proc(obj)
{
	school = obj.id

	document.querySelector("#outarea_bb").innerHTML = "school = " + school

	let elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	console.log('school = ' + school)

	show_dates_proc(dict_aa[school])

	const place = ".contents"

	document.querySelector(place).innerHTML = ""
}

// -----------------------------------------------------------------------
function show_dates_proc(array_bb)
{
	console.log('*** show_dates_proc ***')
	console.log(array_bb)
	let str_out = ""
	for (let it in array_bb)
		{
		const value = array_bb[it]
		const str_aa = "<button id=\"" + value + "\" class=\"date_held\" onclick=\"filter_proc2(this)\">" + value + "</button> "
		console.log(str_aa)
		str_out += str_aa
		}
	document.querySelector(".area_dates").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_proc2(obj)
{
	const id_select = obj.id

	document.querySelector("#outarea_dd").innerHTML = "obj.id = " + obj.id

	let elements = document.querySelectorAll('button.date_held')
	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}
	document.getElementById(obj.id).style.color = "blue"

	const file_json = "data/" + school + "_" + obj.id + "_hh.json"

	document.querySelector("#outarea_ee").innerHTML = file_json

	const place = ".contents"

	read_fetch_table_proc(file_json,place)
}

// -----------------------------------------------------------------------
