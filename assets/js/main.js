document.addEventListener("DOMContentLoaded", () => {
	let playerWrapper = document.getElementById("twitch-embed");
	let overlay = document.getElementsByClassName("overlay")[0];
	let divAbout = document.getElementsByClassName("about-wrapper")[0];
	let divMenu = document.getElementsByClassName("menu-wrapper")[0];
	let divButtons = document.getElementsByClassName("buttons-wrapper")[0];
	let buttonAbout = document.getElementsByClassName("about-button")[0];
	let buttonClose = document.getElementsByClassName("close-button")[0];
	let buttonMenu = document.getElementsByClassName("menu-button")[0];

	let twitterFeedWidth = 400;
	if(window.innerWidth <= 940) {
		twitterFeedWidth = 0;
	}
	let width = window.innerWidth - twitterFeedWidth;
	let height = window.innerHeight - 80;

	new Twitch.Embed("twitch-embed", {
		width:width,
		height:height,
		layout:"video",
		channel: "Mizkif",
		parent:["xtrendence.github.io"]
	});

	buttonAbout.addEventListener("click", toggleAbout);

	buttonClose.addEventListener("click", toggleAbout);

	buttonMenu.addEventListener("click", toggleMenu);

	function toggleAbout() {
		if(overlay.classList.contains("hidden")) {
			overlay.classList.remove("hidden");
			divAbout.classList.remove("hidden");
		}
		else {
			overlay.classList.add("hidden");
			divAbout.classList.add("hidden");
		}
	}

	function toggleMenu() {
		if(divMenu.classList.contains("hidden")) {
			divMenu.classList.remove("hidden");
			let buttons = divButtons.innerHTML;
			divButtons.innerHTML = "";
			divMenu.innerHTML = buttons;
		}
		else {
			divMenu.classList.add("hidden");
			let buttons = divMenu.innerHTML;
			divMenu.innerHTML = "";
			divButtons.innerHTML = buttons;
		}
	}

	window.addEventListener("resize", () => {
		let twitterFeedWidth = 400;
		if(window.innerWidth <= 940) {
			twitterFeedWidth = 0;
		}
		let currentWidth = window.innerWidth - twitterFeedWidth;
		let currentHeight = window.innerHeight - 80;

		if(window.innerWidth >= 700 && divButtons.innerHTML === "") {
			divMenu.classList.add("hidden");
			let buttons = divMenu.innerHTML;
			divMenu.innerHTML = "";
			divButtons.innerHTML = buttons;
		}

		playerWrapper.innerHTML = "";

		new Twitch.Embed("twitch-embed", {
			width:currentWidth,
			height:currentHeight,
			layout:"video",
			channel: "Mizkif",
			parent:["xtrendenceedu.github.io"]
		});
	});
});
