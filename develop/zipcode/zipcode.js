// -----------------------------------------------------------------------
//  zipcode.js
//
//						Oct/18/2020
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text  ("*** zipcode *** start ***")

	button_zip_click_monitor ()

	jQuery("#outarea_hh").text ("*** zipcode *** end ***")
})

// -----------------------------------------------------------------------
// [8]:
function button_zip_click_monitor ()
{
	jQuery ("#button_zip").click (function ()
		{
		jQuery ("button").css ("color","black")
		jQuery ("#" + this.id).css ("color","blue")

		jQuery ("#outarea_bb").text ("this.id = " + this.id)

		const postal1 = jQuery("#postal1").val()
		const postal2 = jQuery("#postal2").val()
		const zipcode = "" + postal1 + postal2

		var str_tmp = ""
		str_tmp += "postal1 = " + postal1 + "<br />"
		str_tmp += "postal2 = " + postal2 + "<br />"
		str_tmp += "zipcode = " + zipcode + "<br />"
		jQuery ("#outarea_cc").html (str_tmp)

		const url_zip = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode + "&callback=?"

//		const args = {"zipcode": zipcode}

//		jQuery.getJSON(url_zip,args,function (data)
		jQuery.getJSON(url_zip,function (data)
			{
			jQuery ("#outarea_dd").text (JSON.stringify(data["results"]))
//			jQuery ("#outarea_dd").text (data)
			const unit = data["results"][0]
			var str_out = ""
			str_out += "pref: " + unit['address1'] + '<br />' 
			str_out += "city: " + unit['address2'] + '<br />' 
			str_out += "town: " + unit['address3'] + '<br />' 
			jQuery ("#outarea_ee").html (str_out)

			jQuery ("#pref").val (unit['address1'])
			jQuery ("#city").val (unit['address2'])
			jQuery ("#town").val (unit['address3'])
			})
		})
}

// -----------------------------------------------------------------------
