function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  
  console.log(tabName);
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  if (evt != null) {
	  evt.currentTarget.className += " active";
  }
}

const tabsList = ["Live", "Code", "Docs"];

tabsList.forEach(el => {
	let tabName = "tab-" + el.toLowerCase();
	let tab = document.getElementById(tabName);
	tab.addEventListener("click", () => { openTab(null, el); } )
} );

openTab(null, "Live");