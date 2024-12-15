// -----------------------------------------------------------------------
//	schools.js
//
//					Dec/15/2024
//
// -----------------------------------------------------------------------
'use strict'

var array_aa = []
// -----------------------------------------------------------------------
window.onload = ()=>
{
	document.querySelector("#outarea_aa").innerHTML = "*** schools.js *** start ***"

	const file_json = "./data_school.json"

	read_fetch_table_proc(file_json,".contents")

	document.querySelector("#outarea_hh").innerHTML = "*** schools.js *** end ***"
}

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

	switch (id_select)
		{
	 	case "all":
			str_out = display_table_proc (array_aa)
			break

		default:
			data_new = filter_school_proc(array_aa,id_select)
			str_out = display_table_proc(data_new)
			break
		}

	document.querySelector(".contents").innerHTML = str_out
}

// -----------------------------------------------------------------------
function filter_school_proc (rec,id_select)
{
	var data_new = []
	rec.forEach(function(unit)
		{
		if (unit.school == id_select)
			{
			data_new.push(unit)
			}
		})

	var str_tmp = ""
	str_tmp += data_new.length + "<br />"

//	jQuery("#outarea_cc").html(str_tmp)
	document.querySelector("#outarea_dd").innerHTML = str_tmp

	return	data_new
}

// -----------------------------------------------------------------------
function compare_proc(left,right)
{
	const aa = left.likes_count
	const bb = right.likes_count

	var rvalue = 0


	if (bb < aa)
		{
		rvalue = -1
		}
	else if (aa < bb)
		{
		rvalue = 1
		}
	else
		{
		const pp = left.no
		const qq = right.no

		if (qq < pp)
			{
			rvalue = -1
			}
		else if (pp < qq)
			{
			rvalue = 1
			}
		}

	return	rvalue
}

// -----------------------------------------------------------------------
