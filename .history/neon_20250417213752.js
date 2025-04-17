(function() {
	const halo = document.querySelector('.cursor-halo');
	const core = document.querySelector('.cursor-core');

	/* Dès qu’on bouge la souris, on repositionne nos cercles */
	window.addEventListener('mousemove', function(e) {
	  let x = e.clientX;
	  let y = e.clientY;
	  halo.style.left = x + 'px';
	  halo.style.top  = y + 'px';
	  core.style.left = x + 'px';
	  core.style.top  = y + 'px';
	});
  })();