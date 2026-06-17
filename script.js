// Alert data for different types
const checkBtn = document.querySelector("#checkBtn")
const Alert = document.querySelector("#alertDetail")

checkBtn.addEventListener('click', function(){
  let userInput = Alert.value;
})
async function loadCharges() {
  let response = await fetch('app.json');
  let charges = await response.json();
  // charges is now your array — usable here
}