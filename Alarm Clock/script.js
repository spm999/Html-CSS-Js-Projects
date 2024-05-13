const stopAl = document.getElementById('stop-alarm');
const alarmSound = document.getElementById('alarm-sound');


const alarms = [];

function addAlarm() {
    const alarmTimeInput = document.getElementById('alarm-time');
    const alarmTime = alarmTimeInput.value;

    if (alarmTime && !alarms.includes(alarmTime)) {
        alarms.push(alarmTime);
        displayAlarms();
    }
    else {
        alert("That time is already added!!")
    }

    alarmTimeInput.value = '';
}

function displayAlarms() {
    const alarmsContainer = document.getElementById('alarms');
    alarmsContainer.innerHTML = '';

    alarms.forEach((alarm, index) => {
        const alarmDiv = document.createElement('div');
        alarmDiv.classList.add('alarm');
        alarmDiv.textContent = `${index + 1}=> ${alarm}`;
        alarmsContainer.appendChild(alarmDiv);
    });
}

let alarmPlaying = false; // Variable to track if alarm is currently playing

function checkAlarms() {
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
    const currentTimeHHMM = currentTime.slice(0, 5);

    if (alarms.includes(currentTimeHHMM) && !alarmPlaying) { // Check if alarm is not already playing
        alarmPlaying = true; // Set alarmPlaying to true to prevent multiple alarms from playing simultaneously
        playAlarmSound();
        setTimeout(() => {
            stopAlarmSound();
            alarmPlaying = false; // Reset alarmPlaying to false after the alarm has stopped
            // Remove the alarm that was triggered
            const index = alarms.indexOf(currentTimeHHMM);
            if (index !== -1) {
                alarms.splice(index, 1);
                stopAl.style.display = 'none'
                displayAlarms(); // Update displayed alarms
            }

        }, 60000); // Stop alarm after 1 minute
    }
}


function playAlarmSound() {
    const alarmSound = document.getElementById('alarm-sound');
    stopAl.style.display = 'block'

    alarmSound.loop = true;
    alarmSound.play()
        .then(() => {
            console.log('Alarm sound started playing');
        })
        .catch((error) => {
            console.error('Error playing alarm sound:', error);
        });
}

function stopThis() {
    stopAlarmSound();
    stopAl.style.display = 'none'
}


function stopAlarmSound() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
}

setInterval(checkAlarms, 1000); // Check alarms every second
