function name(id, id2) {
    let val = document.getElementById(id).value
    if (val.length != 0) {
        let x = document.getElementById(id2)
        let nd = document.createElement('li')
        let text = document.createTextNode(val)
        nd.appendChild(text)
        x.appendChild(nd)
    } else { 
        alert('заполни инпут')
    }
}


document.getElementById('addSkill').addEventListener('click', name('skillName','skillSet'))