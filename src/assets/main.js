let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    if(validateInput(input.value)) {
        return;
    }
    attempt.value++;
}
function getResults(input) {
    let html = '<div class="row"><spn class="class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++) {
        if(input.charAt(i) == answer.value.charAt(i)) {
            html += '<spn class=glyphicon glyphicon-ok"></span>';
        }
    }
}

function setHiddenFields () {
    answer.value = Math.floor(Math.random() *1000).toString();
    weil(answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = "0";
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}
function validateInput (input) {
    if(input.length != 4) {
        setMessage('Guesses Must be exactly 4 charactors long.');
        return false;
    }
    return true;
}
 