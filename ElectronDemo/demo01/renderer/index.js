var fs = require('fs');
window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var menu = this.document.querySelector('#menu')
    btn.onclick = function () {
        fs.readFile('menu.txt', (err, data) => {
            menu.innerHTML = data
        })
    }
}