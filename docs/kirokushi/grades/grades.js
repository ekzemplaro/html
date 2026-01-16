// -----------------------------------------------------------------------
//	grades.js
//
//					Jan/06/2025
//
// -----------------------------------------------------------------------
'use strict'

let dict_aa = []
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** grades.js *** start ***"

	const file_json = "./dict_grade.json"

	read_fetch_table_proc(file_json,".contents")

	document.querySelector("#outarea_hh").innerHTML = "*** grades.js *** end ***"
}

// -----------------------------------------------------------------------
// [8]:
function filter_proc(obj)
{
	const id_select = obj.id

	document.querySelector("#outarea_bb").innerHTML = "obj.id = " + obj.id

	let elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	let str_out = ""
	let data_new = []

	data_new = filter_school_proc(dict_aa,id_select)
	str_out = display_table_grades_proc(data_new)

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
