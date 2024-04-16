const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const out = document.querySelector(".out");
let s = 0;
let p = 0;

btn.addEventListener('click',calculateSP);

function calculateSP(){
    const v = display.value;
    s = v*v;
    p = v*4;
    out.textContent = `S = ${s} and P = ${p}`
}