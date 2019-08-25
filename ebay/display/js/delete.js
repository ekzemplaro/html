// -----------------------------------------------------------------------
//	js/delete.js
//
//					Jan/25/2017
//
// -----------------------------------------------------------------------
// [4-8-8]:
function delete_proc (data_received,asin_in,used_in)
{

	const array = to_asin_array_proc (data_received,used_in)

	const hantei = array.indexOf (asin_in)


	var str_out = ''
	str_out += "delete_proc  ***<br />"
	str_out += "asin = " + asin_in + "<br />"
	str_out += "used = " + used_in + "<br />"
	str_out += "hantei = " + hantei + "<br />"

	if (0 <= hantei)
		{
		str_out += '<span class ="blue">exist</span><br />'
		}

	jQuery("#outarea_dd").html (str_out)

	message_gen_proc (hantei,asin_in,used_in)

	delete_button_click_check_proc (asin_in,used_in)
}

// -----------------------------------------------------------------------
function message_gen_proc (hantei,asin_in,used_in)
{
	var str_out = ''

	var status = "新品"
	if (used_in)
		{
		status = "中古品"
		}

	if (0 <= hantei)
		{
		str_out += asin_in + " の"

		str_out += status + " を削除しますか。<p />"

		str_out += '<button class="delete" id="yes">Yes</button>'
		str_out += '&nbsp;&nbsp'
		str_out += '<button class="delete" id="no">No</button>'
		str_out += '<br />'
		}
	else
		{
		str_out += asin_in + " の"
		str_out += status + "はありません。<br />"
		}

	jQuery(".message").html (str_out)
}

// -----------------------------------------------------------------------
// [4-8]:
function delete_button_click_check_proc (asin_in,used_in)
{
	jQuery ("button.delete").click (function ()
	{
	var idx = this.id

	var str_out = "this.id = " + this.id + "<br />"
	str_out += "asin = " + asin_in + "<br />"
	str_out += "used = " + used_in + "<br />"

	jQuery("#outarea_ee").html (str_out)

	if (idx == "yes")
		{
		delete_exec_proc (asin_in,used_in)
		jQuery(".message").html ('ページを更新してください。<br />')
		}
	else if (idx == "no")
		{
		jQuery(".message").text ('')
		}

	})
}

// -----------------------------------------------------------------------
function delete_exec_proc (asin_in,used_in)
{
	var ii_used = 0
	if (used_in)
		{
		ii_used = 1
		}

	const url_py ="py/delete_data.py"

	const args = {"asin": asin_in,
			"used": ii_used
			} 

	jQuery.getJSON (url_py,args,function (rec)
		{
		var str_tmp = ""
		str_tmp += "delete asin = " + rec.asin + "<br />"
		str_tmp += "delete used = " + rec.used + "<br />"
		jQuery("#outarea_ee").html (str_tmp)
		})
}

// -----------------------------------------------------------------------
