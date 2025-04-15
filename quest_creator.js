let questsContainerElement = document.getElementById("questsContainer");
let questTemplateElement = document.getElementById("questTemplate");

let inputTitleElement = document.getElementById("inputTitle");
let inputDescriptionElement = document.getElementById("inputDescription");

let inputTypeElement = document.getElementById("inputType");
let inputAmountElement = document.getElementById("inputAmount");
let inputItemElement = document.getElementById("inputItem");

let previewElement = document.getElementById("preview");

inputTypeElement.onchange = onCompletionChanged;
inputAmountElement.onchange = onCompletionChanged;
inputItemElement.oninput = onCompletionChanged;

function onCompletionChanged() {
  previewElement.innerText = FormatCompletionElement();
}

btnCreate.onclick = function() {
  CloneQuestTemplate();
  ClearDataEntries();
}

function ClearDataEntries() {
  inputTitleElement.value = "";
  inputDescriptionElement.value = "";
  inputTypeElement.value = "Gather";
  inputAmountElement.value = "";
  inputItemElement.value = "";
  onCompletionChanged();
}

function CloneQuestTemplate() {
  let newQuest = questTemplateElement.cloneNode(true);
  newQuest.removeAttribute("hidden");
  newQuest.removeAttribute("id");

  let title = newQuest.getElementsByClassName("questTitle")[0];
  title.innerText = inputTitleElement.value;

  let content = newQuest.getElementsByClassName("questContent")[0];
  content.innerHTML = `<p><small>${FormatCompletionElement()}</small></p>` + inputDescriptionElement.value;

  let removeBtn = newQuest.getElementsByTagName("button")[0];
  removeBtn.onclick = () => newQuest.remove();

  questsContainerElement.appendChild(newQuest);
}

function FormatCompletionElement() {
  return inputTypeElement.value + " " + inputAmountElement.value + " " + inputItemElement.value;
}