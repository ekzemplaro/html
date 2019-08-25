// -------------------------------------------------------------------
/*
	event01.js

					Mar/21/2018
*/
// -------------------------------------------------------------------
var EventSource = window.EventSource || window.MozEventSource

function initial ()
{
        if (!EventSource){
            alert("EventSourceが利用できません。")
            return
        }
        
var source = new EventSource ('event01.php')

source.onmessage = function(event)
	{
	var ol = document.getElementById('msgs')
	ol.innerHTML = '<li>' + event.data + '</li>' + ol.innerHTML
	}
}

// -------------------------------------------------------------------
