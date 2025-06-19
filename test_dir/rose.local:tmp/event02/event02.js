// -------------------------------------------------------------------
/*
	event02.js

					May/19/2021
*/
// -------------------------------------------------------------------
var EventSource = window.EventSource || window.MozEventSource

function initial ()
{
        if (!EventSource){
            alert("EventSourceが利用できません。")
            return
        }
        
// var source = new EventSource ('event02.py')
var source = new EventSource ('event02.php')

source.onmessage = function(event)
	{
	var ol = document.getElementById('msgs')
	ol.innerHTML = '<li>' + event.data + '</li>' + ol.innerHTML
	}
}

// -------------------------------------------------------------------
