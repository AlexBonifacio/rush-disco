(function() {
	const halo = document.querySelector('.cursor-halo');
	const core = document.querySelector('.cursor-core');

	// position actuelle de la souri
	let targetX = window.innerWidth  / 2;
	let targetY = window.innerHeight / 2;

	// position animée du halo
	let currentX = targetX;
	let currentY = targetY;

	// coefficient d'interpolation (entre 0 et 1) : plus il est petit, plus la traînée est longue
	const ease = 0.15;

	// on met à jour targetX/Y à chaque mouvement de souris
	window.addEventListener('mousemove', function(e) {
	  targetX = e.clientX;
	  targetY = e.clientY;
	});

	// boucle d'animation via requestAnimationFrame
	function animate() {
	  // interpolation linéaire
	  currentX += (targetX - currentX) * ease;
	  currentY += (targetY - currentY) * ease;
	  halo.style.left = currentX + 'px';
	  halo.style.top  = currentY + 'px';
	  core.style.left = targetX  + 'px';
	  core.style.top  = targetY  + 'px';

	  requestAnimationFrame(animate);
	}

	// on démarre l'animation
	requestAnimationFrame(animate);
  })();