function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);

  //repite todo lo de adentro 10 veces y las variables let x y let y centran el dibujo
  for (let i = 0; i < 10; i++) { 
    let x = width / 2;
    let y = height / 2;

  
    push();
    translate(x, y); 
    rotate(i * 0.6); //gira el dibujo
    stroke(255);

    let largo = 100; //define cuanto miden las lineas

  // for con variable j que crea muchas lineas horizontales separadas por 10px
    for (let j = -300; j < 300; j +=10) {
    line (-largo/2, j , largo/2, j);
  }

  pop(); //vuelve a su estado anterior y esto evita que las rotaciones se acumulen mal 

    }}
