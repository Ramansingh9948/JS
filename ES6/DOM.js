const div = document.createElement('div');
const main = document.getElementById('main');

for(let i =0; i<100; i++) {
    const h1 = document.createElement('h1');
    h1.textContent = `ABES ENGINEERING COLLEGE ${i+1}`;
    div.append(h1);
}
main.appendChild(div);