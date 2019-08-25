// -----------------------------------------------------------------------
//	display.js
//
//					Feb/23/2017
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** display.js ***")

	const operators_conf = "conf/operators.json"

	jQuery.getJSON (operators_conf,function (operators)
		{
		main_proc (operators)
		})

	jQuery("#outarea_hh").text ("*** end *** display.js ***")
})

// -----------------------------------------------------------------------
// [4]:
function main_proc (operators)
{
	const str_operators = operators_gen_proc (operators)
	jQuery("#operators").html (str_operators)

	const url_py ="py/fetch_data.py"

	jQuery.getJSON (url_py,function (data_received)
		{
		var str_out = table_gen_proc (operators,data_received)
		jQuery("#left").html (str_out)

		button_click_check_proc (operators,data_received)
		})
}

// -----------------------------------------------------------------------
// [4-4]:
function table_gen_proc (operators,dict_aa)
{
	const array_aa =  sort_key_proc (dict_aa)

	var str_out = ""
	str_out += '<table class="main">'
	str_out += "<tr>"
	str_out += "<th>no</th>"
	str_out += "<th>name</th>"
	str_out += "<th>used</th>"
	str_out += "<th>asin</th>"
	str_out += "<th>date</th>"
	str_out += "</tr>"
	var count = 1

//	for (var key in data_received)
	for (var it in array_aa)
		{
//		const unit = data_received[key]
		const key = array_aa[it].key
		const unit = array_aa[it].value
		str_out += "<tr>"
		str_out += "<td>" + count + "</td>"
		if (unit.operator in operators)
			{
		str_out += "<td>" + operators[unit.operator]['jpn'] + "</td>"
			}
		else
			{
			str_out += "<td></td>"
			}

		if (unit.used == 1)
			{
			str_out += "<td>1</td>"
			}
		else
			{
			str_out += "<td></td>"
			}

		if (unit.dup == 1)
			{
			str_out += "<td class='red'>" + unit.asin + "</td>"
			}
		else
			{
			str_out += "<td>" + unit.asin + "</td>"
			}

		str_out += "<td>" + unit.date_mod + "</td>"

//	str_out += "<td>" + key + "</td>"

		str_out += "</tr>"

		count += 1
		}

	str_out += "</table>"

	return	str_out
}

// -----------------------------------------------------------------------
function sort_key_proc (dict_aa)
{
	var array = new Array()

	for(var it in dict_aa)
		{
		array.push({'key':String (it), 'value':dict_aa[it]})
		}

	array.sort (compare_by_key_proc)

	return array
}

// ---------------------------------------------------------------
function compare_by_key_proc (left,right)
{
	const aa = parseInt (left.key)
	const bb = parseInt (right.key)

	var rvalue = 0

	if (aa < bb)
		{
		rvalue = 1
		}
	else if (aa > bb)
		{
		rvalue = -1
		}

	if (aa == "None")
		{
		if (bb == "None")
			{
			rvalue = 0
			}
		rvalue = 1
		}
	else if (bb == "None")
		{
		rvalue = -1
		}

	return	rvalue
}

// -----------------------------------------------------------------------
// [4-6]:
function operators_gen_proc (operators)
{
	var str_operators = ""

	var icount = 0
	for (var id in operators)
		{
		if (operators[id].disp == "true")
			{
		str_operators += '<input type="radio" name="operator" id="'
			str_operators += id + '" value="' + id + '"'
			if (icount === 0)
				{
				str_operators += ' checked="checked"'
				}
			str_operators += '>'

			str_operators += operators[id].jpn + '<br />'

			icount += 1
			}
		}

	return str_operators
}
// -----------------------------------------------------------------------
// [4-8]:
function button_click_check_proc (operators,data_received)
{
	jQuery ("button.operation").click (function ()
	{
	var idx = this.id
	var asin = jQuery("input#asin").val ()
	var used = jQuery('#used').prop('checked')

	var operator = $('[name="operator"]:checked').attr('id')

	if (idx == "hantei")
		{
		hantei_proc (data_received,asin,used)
		}
	else if (idx == "register")
		{
		register_proc (data_received,operators,asin,used,operator)
		}
	else if (idx == "delete")
		{
		delete_proc (data_received,asin,used)
		}
	else if (idx == "calculate")
		{
		calculate_proc (data_received,operators)
		}
	})
}

// -----------------------------------------------------------------------
