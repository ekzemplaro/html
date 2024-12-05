// -----------------------------------------------------------------------
//	sort_array.js
//
//						May/29/2023
//
// -----------------------------------------------------------------------
'use strict'

// -----------------------------------------------------------------------
function sort_array_proc (array_aa)
{
	array_aa.sort(compare_by_told_proc)

	return array_aa
}

// ---------------------------------------------------------------
function compare_by_told_proc(left,right)
{
	const aa = new Date(left.told)
	const bb = new Date(right.told)

	var rvalue = 0

	if (aa > bb)
		{
		rvalue = -1
		}
	else if (aa < bb)
		{
		rvalue = 1
		}

	return	rvalue
}

// -----------------------------------------------------------------------
