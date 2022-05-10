// -----------------------------------------------------------------------
//	audio.js
//
//					Jun/13/2021
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	jQuery("#outarea_aa").text ("*** start *** audio.js ***")

	var file_text = "txt/sounds.txt"

	jQuery.get (file_text,function (data_received)
		{
		jQuery("#contents").html (data_received)
		})

	jQuery ("button").click (function ()
	{
	var title = this.id
	jQuery ("button").css ("color","black")
	jQuery ("#" + this.id).css ("color","blue")

	file_text = "txt/" + title + ".txt"

	jQuery.get (file_text,function (data_received)
		{
		jQuery("#contents").html (data_received)
		})

	})

	jQuery("#outarea_hh").text ("*** end *** audio.js ***")
})

// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
