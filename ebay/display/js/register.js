// -----------------------------------------------------------------------
//	register.js
//
//					Feb/23/2017
//
// -----------------------------------------------------------------------
// [4-8-6]:
function register_proc (data_received,operators,asin_in,used_in,operator)
{
	jQuery(".message").text ('')

	var ii_used = 0
	if (used_in)
		{
		ii_used = 1
		}

	const array = to_asin_array_proc (data_received,used_in)
	const hantei = array.indexOf (asin_in)

	if (0 <= hantei)
		{
		var str_out = ""
		str_out += '<span class="red">Already Exist</span><br />'

		jQuery(".message").html (str_out)
		}
	else
		{
	

	const url_py ="py/register_data.py"

	const args = {"asin": asin_in,
			"used": ii_used,
			"operator": operator
			} 

	jQuery.getJSON (url_py,args,function (rec)
		{
		var str_tmp = ""
		str_tmp += "asin = " + rec.asin + "<br />"
		str_tmp += "used = " + rec.used + "<br />"
		str_tmp += "operator = " + rec.operator + "<br />"
		jQuery("#outarea_ee").html (str_tmp)
		})

		}
}

// -----------------------------------------------------------------------
