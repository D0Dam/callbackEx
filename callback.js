//콜백함수 동기성 비동기성 알아보기
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

//Promise 사용해보기
const checkOdd = function (num) {
	return new Promise((reslove, reject) => {
		setTimeout(function () {
			if (num % 2 == 0) {
				reslove("짝수! 성공입니다!");
			} else {
				reject(Error("홀수! 실패입니다!"));
			}
		}, 1000);
	});
};

function runCheckOddReslove() {
	checkOdd(4).then(
		function (text) {
			console.log(text);
		},
		function (error) {
			console.log(error);
		}
	);
}

function runCheckOddReject() {
	checkOdd(5).then(
		function (text) {
			console.log(text);
		},
		function (error) {
			console.log(error);
		}
	);
}

//Async await 사용해보기

async function asyncCheckOdd(num) {
	setTimeout(function () {
		if (num % 2 == 0) {
			reslove("짝수! 성공입니다!");
		} else {
			reject(Error("홀수! 실패입니다!"));
		}
	}, 1000);
}

function asyncRunCheckOddReslove() {
	checkOdd(4).then(
		function (text) {
			console.log(text);
		},
		function (error) {
			console.log(error);
		}
	);
}

function asyncRunCheckOddReject() {
	checkOdd(5).then(
		function (text) {
			console.log(text);
		},
		function (error) {
			console.log(error);
		}
	);
}
