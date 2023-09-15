// -----------------------------------------------------------------------
//
//
// -----------------------------------------------------------------------
window.onload = ()=>
{
document.querySelector("#outarea_aa").innerText = "*** click *** start ***"

const tabs = document.getElementsByClassName('tab');
	for(let i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', tabSwitch, false);
	}

// -----------------------------------------------------------------------
	function tabSwitch(){
document.querySelector("#outarea_bb").innerText = "*** tabSwitch *** start ***"
		// タブのclassの値を変更
		document.getElementsByClassName('is-active')[0].classList.remove('is-active');
		this.classList.add('is-active');
		// コンテンツのclassの値を変更
		document.getElementsByClassName('is-show')[0].classList.remove('is-show');
		const arrayTabs = Array.prototype.slice.call(tabs);
		const index = arrayTabs.indexOf(this);
document.querySelector("#outarea_cc").innerText = "*** index = " + index
		document.getElementsByClassName('panel')[index].classList.add('is-show');
	};


document.querySelector("#outarea_hh").innerText = "*** click *** end ***"
}
// -----------------------------------------------------------------------
