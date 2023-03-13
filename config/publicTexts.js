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
  }
};
var chosenTranslationObj = {};
if(localStorage.lang == null) {
  chosenTranslationObj = translationObj.EN;
}
else {
  chosenTranslationObj = translationObj[localStorage.lang];
}
