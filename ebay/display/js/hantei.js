// -----------------------------------------------------------------------
//	hantei.js
//
//					Jan/25/2017
//
// -----------------------------------------------------------------------
// [4-8-4]:
function hantei_proc (data_received,asin_in,used_in)
{
	const array = to_asin_array_proc (data_received,used_in)

	const hantei = array.indexOf (asin_in)

	var str_out = ""
	str_out += "hantei_proc  ***<br />"
	str_out += "asin = " + asin_in + "<br />"
	str_out += "used = " + used_in + "<br />"
	str_out += "array.length = " + array.length + "<br />"

	if (0 <= hantei)
		{
		str_out += "hantei = " + hantei + "<br />"
		str_out += "*** duplicated ***<br />"
		jQuery ("input#asin").css ("background","yellow")
		}
	else
		{
		str_out += "hantei = " + hantei + "<br />"
		str_out += "*** unique ***<br />"
		jQuery ("input#asin").css ("background","white")
		}

	jQuery("#outarea_dd").html (str_out)
	jQuery(".message").text ('')
}

// -----------------------------------------------------------------------
function to_asin_array_proc (data_received,used_in)
{
	var array = []

	if (used_in)
		{
		for (var it in data_received)
			{
			if (data_received[it].used)
				{
				array.push (data_received[it].asin)
				}
			}
		}
	else
		{
		for (var it in data_received)
			{
			if (! data_received[it].used)
				{
				array.push (data_received[it].asin)
				}
			}
		}

	return	array
}

// -----------------------------------------------------------------------
