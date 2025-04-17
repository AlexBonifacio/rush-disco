(function() {
	const halo = document.querySelector('.cursor-halo');
	const core = document.querySelector('.cursor-core');

	let targetX = window.innerWidth  / 2;
	let targetY = window.innerHeight / 2;
	let currentX = targetX;
	let currentY = targetY;
	const ease = 0.15;

	window.addEventListener('mousemove', function(e) {
	  targetX = e.clientX;
	  targetY = e.clientY;
	});

	function animate() {
	  currentX += (targetX - currentX) * ease;
	  currentY += (targetY - currentY) * ease;
	  halo.style.left = currentX + 'px';
	  halo.style.top  = currentY + 'px';
	  core.style.left = targetX  + 'px';
	  core.style.top  = targetY  + 'px';
	  requestAnimationFrame(animate);
	}
	requestAnimationFrame(animate);

	// À chaque clic, on crée une onde puis on la supprime à la fin de l'animation
	window.addEventListener('click', function(e) {
	  const ripple = document.createElement('div');
	  ripple.className = 'ripple';
	  ripple.style.left = e.clientX + 'px';
	  ripple.style.top  = e.clientY + 'px';
	  document.body.appendChild(ripple);

	  // Quand l'animation est finie, on enlève l'élément
	  ripple.addEventListener('animationend', function() {
		ripple.remove();
	  });
	});
  })();