var enterButton = document.getElementById("add");
var input = document.getElementById("input1");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function inputLength(){
	return input.value.length;
} 
function listLength(){
	return item.length;
}
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = "";
	function crossOut() {
		li.classList.toggle("done");
	}
	var dBtn3 = document.createElement("txt");
	dBtn3.appendChild(document.createTextNode("Pending"));
	li.appendChild(dBtn3);
	li.addEventListener("click",crossOut);
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	function deleteListItem(){
		li.classList.add("delete")
	}
	var dBtn1 = document.createElement("text");
	dBtn1.appendChild(document.createTextNode("Completed"));
	li.appendChild(dBtn1);
	var dBtn2 = document.createElement("button");
	dBtn2.appendChild(document.createTextNode("Edit"));
	li.appendChild(dBtn2);
	dBtn2.addEventListener('click', () => this.edit(input));
}
function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();	
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
	console.log("completed")
  }
}, false);
enterButton.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
