var player;
var is_active;
var global_id;

/* Div fade in */
 $(function(){
 
	var main = $('#lyrics-tracklist ul');
	$(".current").click(function () {
		main.children().removeClass(); 
		$(this).parent().addClass('active');
		var id = $(this).attr("id");
		
		if (is_active) {
			$("#" + global_id + "div").hide()
			$("#"+ id + "div").fadeIn(1000);
			is_active = true;
			global_id = id;
		}
		
		global_id = id;
		$("#"+ id + "div").fadeIn(600);
		is_active = true;	
	});
		
/* Div fade out */	

	$(".close-button").click(function() {
		var id = $(this).parent().attr("id");
		$("#" + id).fadeOut("slow");
		is_active = false;
		var main = main = $('#lyrics-tracklist ul');
		main.children().removeClass(); 
	})
});
	
/* Album link player show/hide */	
/*	
function loadPlayer(id) {
	var background = document.getElementById('player-container');
	background.style.display = 'block';
	var div = document.getElementById(id);
	div.style.display = 'block';
	var player = new MediaElementPlayer('#song');
	if (song.paused) {
		document.getElementById("span-pause").style.display = 'block';
		document.getElementById("p-pause").style.display = 'block';
		document.getElementById("span-play").style.display = 'none';
		document.getElementById("p-play").style.display = 'none';
		player.play();
	}
	else {
		document.getElementById("span-play").style.display = 'block';
		document.getElementById("p-play").style.display = 'block';
		document.getElementById("span-pause").style.display = 'none';
		document.getElementById("p-pause").style.display = 'none';
		player.pause();
	}
} */

/* Album link player fadein/out */

$(function() {

	player = new MediaElementPlayer('#song');

	$("#album-play-link").click(function() {
	if (song.paused) {
		$('#player-container').fadeIn(1000);
		$('#music-player').fadeIn(1000);
		$("#span-pause").css("display", "block");
		$("#p-pause").css("display", "block");
		$("#span-play").css("display", "none");
		$("#p-play").css("display", "none");
		player.play();
	}
	else {
		$('#player-container').fadeOut(600);
		$('#music-player').fadeOut(600);
		$("#span-pause").css("display", "none");
		$("#p-pause").css("display", "none");
		$("#span-play").css("display", "block");
		$("#p-play").css("display", "block");
		player.pause();
	}
	});
});

/* Tracklist link player fadein/out */

$(function() {
	$("#track-play-link").click(function() {
	if (song.paused) {
		$('#player-container').fadeIn(1000);
		$('#music-player').fadeIn(1000);
		player.play();
	}
	else {
		$('#player-container').fadeOut(600);
		$('#music-player').fadeOut(600);
		player.pause();
	}
	});
});



function showPlayPause() {
	if (song.paused) {
		var showPlayBtn = document.getElementById("span-play");
		var showPlayTxt = document.getElementById("p-play");
		showPlayBtn.style.display = 'block';
		showPlayTxt.style.display = 'block';
	}
	else {
		var showPauseBtn = document.getElementById("span-pause");
		var showPauseTxt = document.getElementById("p-pause");
		showPauseBtn.style.display = 'block';
		showPauseTxt.style.display = 'block';
	}
}
	
function hidePlayPause() {
		var hidePlayBtn = document.getElementById("span-play");
		var hidePlayTxt = document.getElementById("p-play");
		hidePlayBtn.style.display = 'none';
		hidePlayTxt.style.display = 'none';
		var hidePauseBtn = document.getElementById("span-pause");
		var hidePauseTxt = document.getElementById("p-pause");
		hidePauseBtn.style.display = 'none';
		hidePauseTxt.style.display = 'none';
}

function showUnderline(id) {
	var span = document.getElementById(id);
	span.style.textDecoration="underline";
	}
	
function hideUnderline(id) {
	var span = document.getElementById(id);
	span.style.textDecoration="none";
	}
	
/*var overlaps = (function () {
    function getPositions(ldiv, rdiv) {
        var lpos, rpos, lwidth;
        lpos = $( ldiv ).position();
		lwidth = $( ldiv ).width();
		rpos = $( rdiv ).position();
		return [ lpos.left+500 + lwidth, rpos.left ];
    }

    return function ( a, b ) {
        var pos = getPositions( a,b );
        return (pos[0] >= pos[1])
    };
})();

function collisionCheck() {
	var collision = overlaps(document.getElementById('header-left'), document.getElementById('fp-links'));
	if (collision) {documment.getElementById('header-left').style.display='none';}
}
	*/
