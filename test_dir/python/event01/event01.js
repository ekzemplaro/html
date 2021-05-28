// -------------------------------------------------------------------
/*
	event01.js

					May/18/2021
*/
// -------------------------------------------------------------------
var EventSource = window.EventSource || window.MozEventSource

function initial ()
{
        if (!EventSource){
            alert("EventSourceが利用できません。")
            return
        }
        
var source = new EventSource ('./event01.py')

source.onmessage = function(event)
	{
	var ol = document.getElementById('msgs')
	ol.innerHTML = '<li>' + event.data + '</li>' + ol.innerHTML
	}
}

// -------------------------------------------------------------------
