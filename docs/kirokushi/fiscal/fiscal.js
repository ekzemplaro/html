// -----------------------------------------------------------------------
//	fiscal.js
//
//					Aug/13/2025
//
// -----------------------------------------------------------------------
'use strict'

let dict_aa = []
let year_fiscal = 0
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** schools.js *** start ***"

	const file_json = "./dict_fiscal.json"

	read_fetch_table_proc(file_json,".contents")

	document.querySelector("#outarea_hh").innerHTML = "*** schools.js *** end ***"
}

// -----------------------------------------------------------------------
function pick_schools(dict_fyear)
{
	let keys = Object.keys(dict_fyear)
	console.log(keys)
	console.log(keys.length)

	let schools = []
	for (let it in keys)
		{
		let key = keys[it]
		let dd = key.split('_')
		console.log(dd[0])
		if (schools.indexOf(dd[0]) < 0)
			{
			schools.push(dd[0])
			}
		}

	console.log(schools.length)

	let str_out = ""
	for (let it in schools)
		{
		const school = schools[it]
		str_out += '<button class="school" id="' + school
		str_out += '" onclick="filter_proc(this)">'
		str_out += school + '</button>'
//		str_out += "<p>" + school + "</p>"
		}

	document.querySelector(".schools").innerHTML = str_out

	document.querySelector(".contents").innerHTML = "<br />"

}

// -----------------------------------------------------------------------
// [6]:
function filter_fiscal_proc(obj)
{
	year_fiscal = obj.id
	document.querySelector("#outarea_bb").innerHTML = "year_fiscal = " + year_fiscal

	let elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	pick_schools(dict_aa[year_fiscal])

}

// -----------------------------------------------------------------------
// [8]:
function filter_proc(obj)
{
	const id_select = obj.id

	document.querySelector("#outarea_bb").innerHTML = "obj.id = " + obj.id

	let elements = document.querySelectorAll('button.school')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	let str_out = ""
	let data_new = []

	data_new = filter_school_proc(dict_aa[year_fiscal],id_select)
	str_out = display_table_school_proc(data_new)

	document.querySelector(".contents").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_school_proc (rec,id_select)
{
	let dict_new = {}

	for (let key in rec)
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
