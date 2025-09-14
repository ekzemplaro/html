// -----------------------------------------------------------------------
//	person.js
//
//					Aug/15/2025
//
// -----------------------------------------------------------------------
'use strict'

let dict_aa = []
let name_selected = ""
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** person.js *** start ***"

	const file_json = "./dict_person.json"

	read_fetch_table_proc(file_json,".contents")

	document.querySelector("#outarea_hh").innerHTML = "*** person.js *** end ***"
}

// -----------------------------------------------------------------------
// [8]:
function filter_proc(obj)
{
	const id_select = obj.id

	name_selected = obj.id

	document.querySelector("#outarea_bb").innerHTML = "obj.id = " + obj.id

	let elements = document.querySelectorAll('button')
	document.querySelector("#outarea_cc").innerHTML = elements.length

	for (let it=0; it<elements.length; it += 1)
		{
		document.getElementById(elements[it].id).style.color = "black"
		}

	document.getElementById(obj.id).style.color = "blue"

	let order = order_get_proc()

	display_exec_proc(name_selected,order)
}

// -----------------------------------------------------------------------
function display_exec_proc(name,order)
{
	let str_out = ""
	let data_new = []

	data_new = filter_name_proc(dict_aa,name)

	str_out = display_table_person_proc(data_new,order)

	document.querySelector(".contents").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_name_proc (rec,id_select)
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
function order_get_proc()
{
	let order = "title"
	if (document.getElementById("date").checked)
		{
		order = "date"
		}
	else if (document.getElementById("school").checked)
		{
		order = "school"
		}
	document.querySelector("#outarea_dd").innerHTML = "order = " + order

	return order
}

// -----------------------------------------------------------------------
function check_radio(obj)
{
	let order = obj.id
	let str_out = "<p>*** check_radio() obj.id = " + obj.id + "</p>"

	if (name_selected != "")
		{
		display_exec_proc(name_selected,order)

		str_out +=  "<p>name_selected = " + name_selected + "</p>"
		}

	document.querySelector("#outarea_ee").innerHTML = str_out
}
// -----------------------------------------------------------------------
