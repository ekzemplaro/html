// -----------------------------------------------------------------------
//	js/calculate.js
//
//					Feb/06/2017
//
// -----------------------------------------------------------------------
// [4-8-10]:
function calculate_proc (data_received,operators)
{
	const array_month = month_pick_proc (data_received)
	const array_operator = operator_pick_proc (data_received)

	var table_sum = {}

	for (var it in array_month)
		{
		const month = array_month[it]
		table_sum[month] = {}

		for (var jt in array_operator)
			{
			const operator = array_operator[jt]
			table_sum[month][operator] = 0
			}
		}

	for (var it in data_received)
		{
		const month = data_received[it].date_mod.slice (0,7)
		const operator = data_received[it].operator
		table_sum[month][operator] += 1
		}

//	jQuery ("#outarea_dd").html ("*** calculate_proc *** ddd ***<br>")

	const str_out = table_sum_display_proc (table_sum,operators)

//	jQuery ("#outarea_dd").html ("*** calculate_proc *** eee ***<br>")

	jQuery(".message").html (str_out)
}

// -----------------------------------------------------------------------
function month_pick_proc (data_received)
{
	var array = []

	for (var it in data_received)
		{
		const month = data_received[it].date_mod.slice (0,7)

		if (array.indexOf (month) < 0)
			{
			array.push (month)
			}
		}

	array.sort ()

	return	array
}

// -----------------------------------------------------------------------
function operator_pick_proc (data_received)
{
	var array = []

	for (var it in data_received)
		{
		const operator = data_received[it].operator

		if (array.indexOf (operator) < 0)
			{
			array.push (operator)
			}
		}

	array.sort ()

	return	array
}

// -----------------------------------------------------------------------
function table_sum_display_proc (table_sum,operators)
{
// jQuery ("#outarea_bb").html ("*** table_sum_display_proc *** aaa ***<br>")
// console.log ("*** table_sum_display_proc *** aaa ***")

	var str_out = ""

	str_out += "<table>"

	var icount = 0
	for (var month in table_sum)
		{
		if (icount == 0)
			{
			str_out += "<tr>"
			str_out += "<th>month</th>"
			for (var operator in table_sum[month])
				{
				str_out += "<th>"
				if (operator in operators)
					{
				const jpn = operators[operator].jpn
				str_out += jpn
					}
				str_out += "</th>"
				}
			str_out += "</tr>"
			}

		str_out += "<tr>"
		str_out += "<td>"
		str_out += month
		str_out += "</td>"
		for (var operator in table_sum[month])
			{
			str_out += "<td>"
			str_out += table_sum[month][operator]
			str_out += "</td>"
			}

		str_out += "</tr>"

		icount += 1
		}
	
	str_out += "<t/>"
	str_out += "</table>"

	return	str_out
}

// -----------------------------------------------------------------------
