let count = 0;
let max = 30;

function show() {

    document.getElementById("count").innerHTML = count;

    if (count > 10) {
        document.getElementById("mood").innerHTML = "😍";
    }
    else if (count > 0) {
        document.getElementById("mood").innerHTML = "🙂";
    }
    else if (count == 0) {
        document.getElementById("mood").innerHTML = "😐";
    }
    else if (count > -10) {
        document.getElementById("mood").innerHTML = "🙁";
    }
    else {
        document.getElementById("mood").innerHTML = "😭";
    }

    let degree = Math.abs(count) / max * 360;

    let color;

    if (count >= 0) {
        color = "green";
    } else {
        color = "red";
    }

    document.getElementById("ring").style.background =
        `conic-gradient(${color} ${degree}deg, #333 ${degree}deg)`;
}

function plus() {
    if (count < 30) {
        count++;
        show();
    }
}

function minus() {
    if (count > -30) {
        count--;
        show();
    }
}

function resetCount() {
    count = 0;
    show();
}

show();