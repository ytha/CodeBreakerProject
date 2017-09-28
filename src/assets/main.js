let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if(answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }

    if(!validateInput(input.value)) {
        return false;
    }
    attempt.value++;

    if(getResults(input.value)) {
        setMessage('You Win! :)');
        showAnswer(true);
        showReplay();
    } else if(attempt.value >= 10) {
        setMessage('You lose! :(');
        showAnswer(false);
        showReplay();
    } else {
        setMessage('incorrect, try again.');
    }
}
function getResults(input) {
    let html = '<div class="row"><spn class="class="col-md-6">' + input + '</span><div class="col-md-6">';
    for(i = 0; i < input.length; i++) {
        if(input.charAt(i) == answer.value.charAt(i)) {
            html += '<spn class=glyphicon glyphicon-ok"></span>';
        }else if(answer.value.indexOf(input.charAt(i)) > -1) {
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html += '</div></div>';
    document.getElementById('results').innerHTML += html;

    if(input == answer.value) {
        return true;
    }
    return false;
}

function setHiddenFields () {
    answer.value = Math.floor(Math.random() *1000).toString();
    while(answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
    attempt.value = "0";
}

function setMessage(message) {
    document.getElementById('message').innerHTML = message;
}

function showAnswer(success) {
    let code = document.getElementById('code');
    if(success) {
        code.className += ' success';
    } else {
        code.className +=' failure';
    }
    code.innerHTML = answer.value;
}

function showReplay() {
    document.getElementById('guessing-div').style.display = "none";
    document.getElementById('replay-div').style.display = "block";
}

function validateInput (input) {
    if(input.length != 4) {
        setMessage('Guesses Must be exactly 4 charactors long.');
        return false;
    }
    return true;
}