$(document).ready(function() {

	// $("#avocado").hover(function() {
	// 	$("#avocado").css('animation', 'spin 1.5s ease-in-out');
	// });
	
	$('#laptopscreen').on('click', function() {
		if ($('#laptopscreen').css('opacity') == 0) $('#laptopscreen').css('opacity', 1);
		else ($('#laptopscreen').css('opacity', 0))
	});

	$('#iphoneon').on('click', function() {
		if ($('#iphoneon').css('opacity') == 0) $('#iphoneon').css('opacity', 1);
		else ($('#iphoneon').css('opacity', 0))
	});

	$('#avotoast').hover(function() {
		$('#avotoast').css('animation', 'spin 2s ease-in-out infinite');
		$('#avotoast').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#avotoast').css('animation', 'spin 2s ease-in-out infinite');
		});
	}, function(){
		$('#avotoast').css('animation', '');
	});

	$('#tea').hover(function() {
		$('#tea').css('animation', 'spin 2s ease-in-out infinite');
		$('#tea').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#tea').css('animation', 'spin 2s ease-in-out infinite');
		});
	}, function(){
		$('#tea').css('animation', '');
	});

	$('#notebook').hover(function() {
		$('#notebook').css('animation', 'wiggle 1s ease-in-out infinite');
		$('#notebook').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#notebook').css('animation', 'wiggle 1s ease-in-out infinite');
		});
	}, function(){
		$('#notebook').css('animation', '');
	});

	$('#pen2').hover(function() {
		$('#pen2').css('animation', 'spin 1.5s ease-in-out infinite');
		$('#pen1').css('animation', 'spinreverse 1.5s ease-in-out infinite');
		$('#pen2').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function(e) {
		$('#pen2').css('animation', 'spin 1.5s ease-in-out infinite');
		});
	}, function(){
		$('#pen2').css('animation', '');
		$('#pen1').css('animation', '');

	});


	$("#name").typeIt({
		speed: 60,
		loop: false
	})

	.tiType("Hi, I'm Ang")
	.tiPause(1000)
	.tiType("ela")
	.tiPause(500)
	.tiDelete(14)

	
	.tiPause(800)
	.tiType("I'm a cogsci/cs major")
	.tiPause(800)
	.tiDelete(16)


	.tiPause(800)
	.tiType("n aspiring designer")
	.tiPause(800)
	.tiDelete(19)

	.tiPause(800)
	.tiType(" part-time vegan")
	.tiPause(800)
	.tiDelete(15)

	.tiPause(800)
	.tiType("food blogger")
	.tiPause(800)
	.tiDelete(13)

	.tiPause(800)
	.tiType("n occasional meme-maker")
	.tiPause(800)
	.tiDelete(29)

	.tiType("Hi, I'm Angela")
	.tiPause(1000)

	




});