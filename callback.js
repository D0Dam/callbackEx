function myFav() {
	console.log(`My favorite is coding!`);
}

function introduce(name, favoriteText) {
	console.log(`Hi! This is ${name}!`);
	favoriteText();
}

function callbackButton() {
	introduce("callback", myFav);
	console.log("callbackButton finish!");
}

function AsyncButton() {
	setTimeout(introduce, 1000, "Async", myFav);
	console.log("AsyncButton finish!");
}

function twiceButton() {
	callbackButton();
	AsyncButton();
	console.log("twiceButton finish!");
}
