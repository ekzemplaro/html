// -----------------------------------------------------------------------
//	index_visitors.js
//
//					Apr/25/2021
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	const url_php = "./index_visitors.php"

	jQuery.get (url_php,function (data_received)
                {
		jQuery("#visitors").html (data_received)
		})

})

// -----------------------------------------------------------------------
