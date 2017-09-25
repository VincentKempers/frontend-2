//formulier  radiobutton

var radiobuttonProject = document.querySelector('input[value="project"]'); 
var radiobuttonStage = document.querySelector('input[value="stage"]')

var projectFieldset = document.getElementById('project');
var stageFieldset = document.getElementById('stage');

function stageUitProjectAan() {
	stageFieldset.classList.remove('active');
	projectFieldset.classList.add('active');
}

function projectUitStageAan() {
	projectFieldset.classList.remove('active');
	stageFieldset.classList.add('active');	
}

radiobuttonProject.addEventListener('click', stageUitProjectAan);

radiobuttonStage.addEventListener('click', projectUitStageAan);


//menuknop

var hamburger = document.getElementById('piet');


function showMenu() {
document.getElementById('menu').classList.toggle('active');
}

hamburger.addEventListener('click', showMenu);