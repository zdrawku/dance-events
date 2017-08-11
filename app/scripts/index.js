/* eslint-disable */
window.fbAsyncInit = function() {
	FB.init({
		appId: '2035994816674976',
		xfbml: true,
		status     : true, // check login status
        cookie     : true,
		version: 'v2.10'
	});
	FB.AppEvents.logPageView();

	FB.api(
		'/salsaparty.bg/events',
		'GET',
		{
			access_token: '2035994816674976|L6j3O6oqJdpYPm7icOS0UV25ZDc'
		},
		function(response) {
			var events = response.data, upcomingEvents, pastEvents, section,
			wrapper = document.createElement('div'),
			container = $("#all"), today = new Date();

			// Get only upcoming events
			upcomingEvents = events.filter(function	(danceEvent){
				var evt = new Date(danceEvent.start_time);

				return today < evt;
			});

			// Sort them by start date
			upcomingEvents = upcomingEvents.sort(function(a, b) {
				return (a["start_time"] > b["start_time"]) ? 1 : ((a["start_time"] < b["start_time"]) ? -1 : 0);
			});

			for (i = 0; i < upcomingEvents.length; i++){
				section = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">' +
				'<div class="mdl-card mdl-cell mdl-cell--12-col">' +
				'<div class="mdl-card__supporting-text">' +
				'<h5 align="left" style="color: rgb(255,64,129)">' + upcomingEvents[i].name + '</h5>' +
				'<h6 align="left">Къде: <span style="color: rgb(63,81,181)">' + (upcomingEvents[i].place == undefined ? '' : upcomingEvents[i].place.name) + '</span></h6>' +
				'<h6 align="left">Кога: <span style="color: rgb(63,81,181)">' + new Date(upcomingEvents[i].start_time).toLocaleString() + '</span></h6>' +
				'<span style="color:rgb(63,81,181);">"' + upcomingEvents[i].description.substr(0, 300) + '"</span>' + "..." +
				'</div>' +
				'<div class="mdl-card__actions">' +
				'<a href="https://www.facebook.com/events/' + upcomingEvents[i].id + '" class="mdl-button" style="color: rgb(63,81,181)">Към събитието</a>' +
				'</div>' +
				'</div>' +
				'<ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn3">' +
				'<li class="mdl-menu__item">Lorem</li>' +
				'<li class="mdl-menu__item" disabled>Ipsum</li>' +
				'<li class="mdl-menu__item">Dolor</li>' +
				'</ul>' +
				'</section>';

				wrapper.innerHTML = section;

				container.append(wrapper.firstElementChild);
			}
		}
	);
};


(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.onload  = function() {
	$('a').click( function(e) {
		var elementId = e.target.parentElement.id;

		switch(elementId){
			case "ritmoEventsTab":
				requestData('/ritmo.bg/events', "#ritmo");
				break;
			case "latinForceTab":
				requestData('/latinforcedancestudio/events', "#latinF");
				break;
			default:
				break;
		}
	});
};

function requestData(id, container){
	var containerElement = container;

	FB.api(
		id,
		'GET',
		{
			access_token: '2035994816674976|L6j3O6oqJdpYPm7icOS0UV25ZDc'
		},
		function(response) {
			var events = response.data, upcomingEvents, pastEvents, section,
			wrapper = document.createElement('div'),
			container = $(containerElement), today = new Date();

			// Get only upcoming events
			upcomingEvents = events.filter(function	(danceEvent){
				var evt = new Date(danceEvent.start_time);

				return today < evt;
			});

			// Sort them by start date
			upcomingEvents = upcomingEvents.sort(function(a, b) {
				return (a["start_time"] > b["start_time"]) ? 1 : ((a["start_time"] < b["start_time"]) ? -1 : 0);
			});

			for (i = 0; i < upcomingEvents.length; i++){
				section = '<section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">' +
				'<div class="mdl-card mdl-cell mdl-cell--12-col">' +
				'<div class="mdl-card__supporting-text">' +
				'<h5 align="left" style="color: rgb(255,64,129)">' + upcomingEvents[i].name + '</h5>' +
				'<h6 align="left">Къде: <span style="color: rgb(63,81,181)">' + (upcomingEvents[i].place == undefined ? '' : upcomingEvents[i].place.name) + '</span></h6>' +
				'<h6 align="left">Кога: <span style="color: rgb(63,81,181)">' + new Date(upcomingEvents[i].start_time).toLocaleString() + '</span></h6>' +
				'<span style="color:rgb(63,81,181);">"' + upcomingEvents[i].description.substr(0, 300) + '"</span>' + "..." +
				'</div>' +
				'<div class="mdl-card__actions">' +
				'<a href="https://www.facebook.com/events/' + upcomingEvents[i].id + '" class="mdl-button" style="color: rgb(63,81,181)">Към събитието</a>' +
				'</div>' +
				'</div>' +
				'<ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn3">' +
				'<li class="mdl-menu__item">Lorem</li>' +
				'<li class="mdl-menu__item" disabled>Ipsum</li>' +
				'<li class="mdl-menu__item">Dolor</li>' +
				'</ul>' +
				'</section>';

				wrapper.innerHTML = section;

				container.append(wrapper.firstElementChild);
			}
		}
	);
}