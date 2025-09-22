let radius = document.getElementById("radius");
let volume = document.getElementById("volume");

function volume_sphere(event) {
    event.preventDefault(); // stop form refresh

    let valu = parseFloat(radius.value);

    // check valid input
    if (isNaN(valu) || valu < 0) {
        volume.value = "NaN";
        return;
    }

    // correct formula: (4/3) * π * r^3
    let vol = (4 / 3) * Math.PI * Math.pow(valu, 3);

    // round to 4 decimals
    volume.value = vol.toFixed(4);
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
