let pomodoroCount = parseInt(localStorage.getItem('pomodoroCount')) || 0; // Recuperar el valor de localStorage
const pomodoroDuration = 25 * 60; // 25 minutes in seconds
const breakDuration = 5 * 60; // 5 minutes in seconds
let timer;
let isBreak = false;

function startPomodoro() {
    let timeLeft = isBreak ? breakDuration : pomodoroDuration; // Usar el tiempo correcto según el estado
    updateTimerDisplay(timeLeft);

    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
            if (isBreak) {
                isBreak = false;
                location.href = "pomodoro2.HTML"; // Redirigir a la página de descanso
            } else {
                pomodoroCount++;
                localStorage.setItem('pomodoroCount', pomodoroCount); // Guardar en localStorage
                if (pomodoroCount >= 4) {
                    localStorage.setItem('pomodoroCount', 0); // Reiniciar el conteo de pomodoros
                    location.href = "actividadTerminada.HTML"; // Redirigir al finalizar
                } else {
                    isBreak = true;
                    location.href = "pomodoro2.HTML"; // Redirigir a la página de descanso
                }
            }
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.querySelector('.time-display').textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function skipPomodoro() {
    clearInterval(timer);
    if (isBreak) {
        isBreak = false;
        location.href = "pomodoro2.HTML"; // Redirigir a la página de descanso
    } else {
        pomodoroCount++;
        localStorage.setItem('pomodoroCount', pomodoroCount); // Guardar en localStorage
        if (pomodoroCount >= 4) {
            localStorage.setItem('pomodoroCount', 0); // Reiniciar el conteo de pomodoros
            location.href = "actividadTerminada.HTML"; // Redirigir al finalizar
        } else {
            isBreak = true;
            location.href = "pomodoro2.HTML"; // Redirigir a la página de descanso
        }
    }
}

document.querySelector('.start-button').addEventListener('click', () => {
    if (!timer) startPomodoro();
});

document.querySelector('.skip-button').addEventListener('click', skipPomodoro);

// PDF upload and preview logic
const fileInput = document.getElementById('pdf-upload');
const pdfIframe = document.getElementById('pdf-iframe');

fileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        const objectURL = URL.createObjectURL(file);
        pdfIframe.src = objectURL;
    } else {
        alert('Por favor, selecciona un archivo PDF.');
    }
});
