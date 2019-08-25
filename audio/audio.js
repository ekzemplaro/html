// -----------------------------------------------------------------------
//	audio.js
//
//					Sep/21/2016
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
