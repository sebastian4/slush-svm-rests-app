Ext.onReady(function() {

	console.log("sample init ..");

	////

	var image = Ext.create('Ext.ux.Image');
	var sample2 = Ext.create('svm.mysample2');

	////

	Ext.create('Ext.container.Viewport', {
		items : [ 
			sample2,
			image
		]
	});

	////

	var imgIndex = 0;
	var imgs = [
		'http://www.sencha.com/img/sencha-large.png',
		'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png',
		'http://www.petyourdog.com/uploads/articles/17-6.jpg'
	];

	image.on('click', function(e) {
		if (imgIndex > 1)	imgIndex = 0;
		else	imgIndex++;
		image.setSrc(imgs[imgIndex]);
	    console.log(imgIndex+' image clicked: ', image.getSrc());
	});
	
	image.on('load', function() {
	    console.log('image loaded: ', image.getSrc());
	});

	image.setSrc(imgs[imgIndex]);

});