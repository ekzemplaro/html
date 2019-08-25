// -----------------------------------------------------------------------
//	index_visitors.js
//
//					Jun/17/2011
//
// -----------------------------------------------------------------------
jQuery (function ()
{
	var url_php = "./index_visitors.php";

	jQuery.get (url_php,function (data_received)
                {
		jQuery("#visitors").html (data_received);
		});


});

// -----------------------------------------------------------------------
