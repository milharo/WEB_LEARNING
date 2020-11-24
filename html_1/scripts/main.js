const machineBtn = document.getElementById('machine-button');
const machineTxt = document.getElementById('machine-status');
const nameBtn = document.getElementById('name-button');

machineBtn.addEventListener('click', updateBtn);

function updateBtn() {
    if (machineBtn.textContent == 'Start the machine') {
        machineBtn.textContent = 'Stop the machine';
        machineTxt.textContent = 'Machine running';
    }
    else {
        machineBtn.textContent = 'Start the machine';
        machineTxt.textContent = 'Machine is stopped';
    }
}
nameBtn.onclick = function() {
    let name = prompt('What is your name?');
    alert('Nazdar '+ name + '!');

}

let veta = "Aby sme sa..";
let vystup = `Davajte si pozor ${veta}`;
console.log(vystup);

function readFile(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        document.write(reader.result);
    };

    reader.onerror = function() {
        document.write(reader.error);
    };
}
    

function my_event(e) {
        if (e.code =='Enter') {
            my_output.value = 3*Number(my_input.value);
            my_input.value = '';
        }

}

// reading input from Input text file when enter is pressed
my_input = document.getElementById('vstup');
my_input.addEventListener('keydown',my_event);
my_input_label = document.getElementById('vstup-label');
my_output = document.getElementById('vystup');
