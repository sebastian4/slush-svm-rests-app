Ext.onReady(function() {

	console.log("sample init ..");

	////

	var images = Ext.create('Ext.ux.TwoImages');
	var sample2 = Ext.create('svm.MySample2');

	////

	Ext.create('Ext.container.Viewport', {
		items : [ 
			sample2,
			images
		]
	});

	////

	// var imgIndex = 0;
	// var imgs = [
	// 	'http://www.sencha.com/img/sencha-large.png',
	// 	'http://images.clipartpanda.com/clipart-smiley-face-smiley_face_13.png',
	// 	'http://www.petyourdog.com/uploads/articles/17-6.jpg'
	// ];

	// image.on('click', function(e) {
	// 	if (imgIndex > 1)	imgIndex = 0;
	// 	else	imgIndex++;
	// 	image.setSrc(imgs[imgIndex]);
	//     console.log(imgIndex+' image clicked: ', image.getSrc());
	// });

	images.on('click', function(e) {
		console.log("image clicked");
	});

	// image.setSrc(imgs[imgIndex]);

});