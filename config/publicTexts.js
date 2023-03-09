var translationObj = {
  EN: {
    Form: [
      "Your Team Number",
      "Robot Team Number",
      "Test",
      "Practice Field",
      "Practice Match",
      "Qualification",
      "Quarterfinal",
      "Semifinal",
      "Final",
      "Match Number",
      "Start",
      "Back",
      "Single QR",
      "Undo",
      "Do you want to stop?",
      "Stop Recording",
      "Finish Recording",
      "Continue Recording"
    ],
    EventTitles: [
      "Auto Crossed Cable",
      "Auto Climbed Ramp",
      "Picked up Cone",
      "Dropped Cone",
      "Picked up Cube",
      "Dropped Cube",
      "Scored on Cargo Ship",
      "Failed on Cargo Ship",
      "Scored Lvl 1 (Floor)",
      "Failed on Rocket Lvl 1",
      "Scored Lvl 2",
      "Failed on Rocket Lvl 2",
      "Scored Lvl 3",
      "Failed on Rocket Lvl 3",
      "Climbed Ramp",
      "Balanced",
      "Hab Climb Lvl 3",
      "Failed Hab Climb",
      "Played Defense",
      "Crossed Over Ramp"
    ],
    ButtonName: [
      "Auto Crossed Cable",
      "Auto Climbed Ramp",
      "Picked up Cone",
      "Dropped Cone",
      "Picked up Cube",
      "Dropped Cube",
      "Scored on Cargo Ship",
      "Failed",
      "Scored Lvl 1 (Floor)",
      "Failed",
      "Scored Lvl 2",
      "Failed",
      "Scored Lvl 3",
      "Failed",
      "Climbed Ramp",
      "Balanced",
      "Lvl 3",
      "Failed",
      "Crossed Over Ramp",
      "Played Defense"
    ]
  },
  ES: {
    Form: [
      "Numero de Equipo",
      "Numero de Equipo del Robot",
      "Prueba",
      "Practica de Campo",
      "Match de Practica",
      "Match Calificatorio",
      "Cuartos de Final",
      "Semi-finales",
      "Final",
      "Num. de Match",
      "Iniciar",
      "Regresar",
      "Un solo QR",
      "Deshacer",
      "Deseas detenerla?",
      "Parar Grabación",
      "Finalizar Grabación",
      "Continuar Grabación"
    ],
    EventTitles: [
      "Cruzado Linea HAB Niv 1",
      "Cruzado Linea HAB Niv 2",
      "Cargo Recogido",
      "Cargo Caida",
      "Hatch Recogido",
      "Hatch Caido",
      "Puntaje en Cargo Ship",
      "Fallido en Cargo Ship",
      "Puntaje en Cohete Niv 1",
      "Fallido en Cohete Niv 1",
      "Puntaje en Cohete Niv 2",
      "Fallido en Cohete Niv 2",
      "Puntaje en Cohete Niv 3",
      "Fallido en Cohete Niv 3",
      "Hab Climb Niv 1",
      "Hab Climb Niv 2",
      "Hab Climb Niv 3",
      "Fallido Hab Climb",
      "Played Defense",
      "Crossed Over Ramp"
    ],
    ButtonName: [
      "Cruzado Linea HAB Niv 1",
      "Niv 2",
      "Cone Recogido",
      "Cone Caida",
      "Hatch Recogido",
      "Hatch Caido",
      "Puntaje en Cargo Ship",
      "Fallido",
      "Puntaje en Cohete Niv 1",
      "Fallido",
      "Puntaje en Cohete Niv 2",
      "Fallido",
      "Puntaje en Cohete Niv 3",
      "Fallido",
      "Hab Climb Niv 1",
      "Niv 2",
      "Niv 3",
      "Fallido",
      "Cruzo Arena",
      "Jugo Defense"
    ]
  }
};
var chosenTranslationObj = {};
if(localStorage.lang == null) {
  chosenTranslationObj = translationObj.EN;
}
else {
  chosenTranslationObj = translationObj[localStorage.lang];
}