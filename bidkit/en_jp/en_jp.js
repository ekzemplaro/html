// -----------------------------------------------------------------------
//	en_jp.js
//
//					Dec/09/2020
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** en_jp *** start ***")

	var file_in = "./dbase.json"

	jQuery.getJSON (file_in,function (data_aa)
		{
		var str_out = ""
		str_out += "<table>"
		str_out += "<tr>"
		str_out += "<th>No</th>"
		str_out += "<th>seq</th>"
		str_out += "<th>en</th>"
		str_out += "<th>ja</th>"
		str_out += "<th>key</th>"
		str_out += "</tr>"
		var icount = 0
		for (var key in data_aa)
			{
			const unit_aa = data_aa[key]
//			if (1 < unit_aa.name.length)
//				{
			str_out += "<tr>"
			str_out += "<td>" + (icount + 1) + "</td>"
			str_out += "<td>" + unit_aa.seq + "</td>"
			str_out += "<td>" + unit_aa.en + "</td>"
			str_out += "<td>" + unit_aa.ja + "</td>"
			str_out += "<td>" + key + "</td>"
			str_out += "</tr>"

				icount += 1
//				}
			}

		str_out += "</table>"

		jQuery(".contents").html (str_out)
		})

	jQuery("#outarea_hh").text ("*** en_jp *** end ***")

})

// -----------------------------------------------------------------------
