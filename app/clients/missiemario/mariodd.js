
console.log("Welcome to Mario Menu - v33");

msprite = 'sprs=landon';
mdetail = 'gift=yes';
mlevel = 'lvid=0';

function changeLevel(lev) {
	console.log('set to level '+lev);
	mlevel = 'lvid='+lev;
	document.getElementById('mlevel').innerHTML = 'Level: '+lev;
}

function changeDetail(det) {
	console.log('set to detail '+det);
	if (det=='gift'){
		mdetail = 'gift=yes';
	} else if (det=='nogift') {
		mdetail = 'gift=no';
	} else if (det=='tablet') {
		mdetail = 'tabt=yes&gift=no';
	}
	document.getElementById('mdetail').innerHTML = 'Detail: '+det;
}

function changeSprite(spr) {
	console.log('set to sprite '+spr);
	msprite = 'sprs='+spr;
	document.getElementById('msprite').innerHTML = 'Sprite: '+spr;
}

function playMario() {
	window.location = "mario.html?"+mdetail+"&"+msprite+"&"+mlevel;
}