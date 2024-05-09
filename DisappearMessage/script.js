function Sub() {
    const old = document.getElementById('old');
    old.id = 'clock';
    const clock = document.getElementById('clock');

    const time = parseInt(document.getElementById('time').value); // Parse input value as integer
    let value = 0;

    const k = setInterval(function () {
        value++;
        clock.innerHTML = value;
        if (value === time) {
            clearInterval(k);
            clock.id = 'old'; // Change clock id to 'old'
            old.style.display = 'none';
            document.getElementById('message').style.display = 'none';
            document.getElementsByTagName('button')[0].style.display = 'none';
            document.getElementsByTagName('input')[0].style.display = 'none';
            document.getElementById('newText').innerHTML = "Your text has disappeared!!";
        }
    }, 1000);
}



