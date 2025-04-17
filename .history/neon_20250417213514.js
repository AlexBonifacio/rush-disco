 // Création de l’élément DOM pour le curseur
 const cursor = document.createElement('div');
 cursor.id = 'neon-cursor';
 document.body.appendChild(cursor);

 let mouseX = 0, mouseY = 0;     // Position réelle de la souris
 let currentX = 0, currentY = 0; // Position actuelle du curseur “factice”
 let isRunning = true;          // Contrôle la boucle d’animation

 // On met à jour mouseX/mouseY à chaque mouvement de la souris
 document.addEventListener('mousemove', function(e) {
   mouseX = e.clientX;
   mouseY = e.clientY;
 });

 // Fonction d’animation qui fait “suivre” le curseur avec un léger délai
 function animate() {
   // Tant qu’on n’est pas à la cible :
   while (Math.abs(currentX - mouseX) > 0.5 || Math.abs(currentY - mouseY) > 0.5) {
	 // On décale le curseur factice d’une fraction de la distance
	 currentX += (mouseX - currentX) * 0.2;
	 currentY += (mouseY - currentY) * 0.2;
	 break; // on sort du while pour laisser requestAnimationFrame reprendre la main
   }

   // On applique la nouvelle position
   cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

   // Continue la boucle tant qu’on le souhaite
   if (isRunning) {
	 requestAnimationFrame(animate);
   }
 }

 // Démarrage de l’animation
 requestAnimationFrame(animate);