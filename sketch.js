let ekis;
let ye;
let step = 0;
let time;
let intervalo = 30;
let sibala;
let i = 0;
let tamanoText = 0;
let modoPensar;
let estado=0;
  let buttonRock;
  let buttonPaper; 
  let buttonSisor; 

let showButtons= false;

let cachipun = ["CA", "CHI", "PÚN"];

function setup() {
  createCanvas(480, 400);
  ekis = width / 2;
  ye = height / 2;
    buttonRock = createButton("piedra");
   buttonPaper = createButton("papel");
 buttonSisor = createButton("tijera");
 
  buttonRock.hide();
  buttonPaper.hide();
  buttonSisor.hide();
  
}

function draw() {

  if (estado === 0) {
    startSetup();
  } 
  else if (estado === 1) {
    selectButton();
  } 
  else if (estado === 2) {
    pensando();
  }
  else if (estado === 3) {
    showResult();
  }

}

function piedra() {
  eleccion = "piedra";
  estado = 2; 
}

function papel() {
  eleccion = "papel";
  estado = 2; 
  
}
function tijera() {
  eleccion = "tijera";
  estado = 2; 
}

function pensando() {
  //   cambia de step cada x tiempo
  if (frameCount % intervalo === 0) {
    step = (step + 1) % 4; // ciclo entre 0,1,2
  }

  // Dibuja según el paso actual
    if (step >= 0) {
    background(0);
    estado=3;
  }  
  if (step >= 1) {
    background(0);
    ellipse(ekis - 50, ye, 20, 20);
  }

  if (step >= 2) {
    background(0);
    ellipse(ekis - 50, ye, 20, 20);
    ellipse(ekis, ye, 20, 20);
  }

  if (step >= 3) {
    background(0);
    ellipse(ekis - 50, ye, 20, 20);
    ellipse(ekis, ye, 20, 20);
    ellipse(ekis + 50, ye, 20, 20);
  }


}

function startSetup() {
  background(30, 100, 230);
  textAlign(CENTER, CENTER);
  textSize(tamanoText);
  text(cachipun[i], ekis, ye);
  tamanoText++;

  if (tamanoText > 100) {
    tamanoText = 0;
    i++;

    if (i >= cachipun.length) {
      estado++;
    }
  }
}

function selectButton() {
  if (!showButtons){
buttonRock.show();
buttonPaper.show();
buttonSisor.show();
  
  
  buttonRock.size(120, 60);
  buttonRock.style("border-radius", "12px");

  buttonPaper.size(120, 60);
  buttonPaper.style("border-radius", "12px");

  buttonSisor.size(120, 60);
  buttonSisor.style("border-radius", "12px");
    
      buttonRock.position(60, height);
    buttonPaper.position(180, height);
    buttonSisor.position(300, height);

    buttonRock.mousePressed(piedra);
    buttonPaper.mousePressed(papel);
    buttonSisor.mousePressed(tijera);
  
  showButtons = true;}
}

function showResult() {
  background(0);
  fill(250);
  textAlign(CENTER, CENTER);

  if (eleccion === "piedra") {
  textSize(100);
    text("📄", ekis, ye);
  textSize(30);
    text("perdiste :(",ekis, ye+90)                   
  }
  if (eleccion === "papel"){ 
  textSize(100);
    text("✂️", ekis, ye);
  textSize(30);
    text("perdiste :(",ekis, ye+90)                       
                           }

  if (eleccion === "tijera") {
  textSize(100);
    text("🪨", ekis, ye);
  textSize(30);
    text("perdiste :(",ekis, ye+90)                        
                             }
                       
}
