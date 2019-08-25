// -----------------------------------------------------------------------
//	ebay_settei.js
//
//					Jan/26/2017
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** ebay_settei *** start ***")

	var file_json = "../display/conf/operators.json"

	jQuery.getJSON (file_json,function (operators)
		{
		const str_out = table_gen_proc (operators)
		jQuery(".left").html (str_out)

		button_click_check_proc (file_json,operators)
		})

	jQuery("#outarea_hh").text ("*** ebay_settei *** end ***")

})

// -----------------------------------------------------------------------
// [4]:
function table_gen_proc (operators)
{
	var str_out = ""
	str_out += '<table class="main">'
	for (var key in operators)
		{
		const id_jpn = key + "_jpn"
		const id_disp = key + "_disp"
		str_out += "<tr>"
		str_out += "<td>" + key + "</td>"
		str_out += '<td><input type="text" '
		str_out += 'id=' + id_jpn + ' value="' + operators[key].jpn + '"></td>'
		str_out += '<td><input type="checkbox" '
		str_out += 'id=' + id_disp
		if (operators[key].disp == "true")
			{
			str_out += ' checked="checked"'
			}

		str_out += '></td>'
		str_out += "</tr>"
		}
	str_out += "</table>"

	return	str_out
}

// -----------------------------------------------------------------------
// [8]:
function button_click_check_proc (file_json,operators)
{
	jQuery ("button.operation").click (function ()
	{
	var idx = this.id

	jQuery ("button").css ("color","black")
	jQuery ("button#" + this.id).css ("color","blue")

	var str_out = ""
	str_out += "id = " + idx + "<br />"

	jQuery("#outarea_bb").html (str_out)

	if (idx == "register")
		{
		register_proc (file_json,operators)
		}
	else if (idx == "append")
		{
		operators = append_proc (operators)
		const str_out = table_gen_proc (operators)
		jQuery(".left").html (str_out)
		}
	})
}

// -----------------------------------------------------------------------
// [8-4]:
function register_proc (file_json,operators)
{
	var str_out = ""
	str_out += "*** register_proc ***<br />"


	for (var key in operators)
		{
		const id_jpn = key + "_jpn"
		const id_disp = key + "_disp"

		const jpn = jQuery ("#" + id_jpn).val ()
		var disp = "false"

		if (jQuery('#' + id_disp).prop('checked'))
			{
			disp = "true"
			}
		str_out += "jpn = " + jpn + "&nbsp;&nbsp;"
		str_out += "disp = " + disp + "<br />"

		operators[key].jpn = jpn
		operators[key].disp = disp
		}

	jQuery("#outarea_cc").html (str_out)

	conf_write_proc (file_json,operators)
}

// -----------------------------------------------------------------------
// [8-4-4]:
function conf_write_proc (file_out,operators)
{
	const url_php = "./json_write.php"

	var json_str = JSON.stringify (operators)


	var args = {"file_out": file_out,
			"json_str": json_str}

	jQuery.getJSON (url_php,args,function (data_received)
		{
		var str_out = ""
		str_out += data_received.message

		jQuery("#outarea_ff").html (str_out)
		})
}

// -----------------------------------------------------------------------
// [8-6]:
function append_proc (operators)
{
	for (var key in operators)
		{
		}
	const key_final = key

	const nn_next = parseInt ((key_final.slice (1)),10) + 1
	const key_next = 'p' + ( '000' + nn_next ).slice( -3 )
	var str_out = ""
	str_out += "*** append_proc ***<br />"
	str_out += "key_final = " + key_final + "<br />"
	str_out += "key_next = " + key_next + "<br />"

	jQuery("#outarea_cc").html (str_out)

	operators[key_next] = {"jpn": "","disp": "false"}

	return	operators
}

// -----------------------------------------------------------------------
