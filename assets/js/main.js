var c = document.getElementById( "mon_canvas" );
var ctx = c.getContext("2d");

// Rectangle bleu
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(80,120);
ctx.lineTo(80,360);
ctx.lineTo(320,360);
ctx.lineTo(320,120);
ctx.fillStyle = "#A0D7E6";
ctx.fill();            // Application du remplissage


// Toit
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(80,120);
ctx.lineTo(200,20);
ctx.lineTo(320,120);
ctx.fillStyle = "#D88437";
ctx.fill();            // Application du remplissage


// Porte
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(170,360);
ctx.lineTo(170,280);
ctx.lineTo(230,280);
ctx.lineTo(230,360);
ctx.fillStyle = "#C9C9C9";
ctx.fill();            // Application du remplissage


// Fenetre1 avec fill
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(110,150);
ctx.lineTo(110,200);
ctx.lineTo(160,200);
ctx.lineTo(160,150);
ctx.fillStyle = "#C9C9C9";
ctx.fill();            // Application du remplissage

// Fenetre2 avec stroke
ctx.beginPath();      // Début d'un autre chemin
ctx.moveTo(240,150);
ctx.lineTo(240,200);
ctx.lineTo(290,200);
ctx.lineTo(290,150);
ctx.fillStyle = "#C9C9C9";
ctx.fill();            // Application du remplissage