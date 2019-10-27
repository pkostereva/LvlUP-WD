function name() {
    let val = document.getElementById('skillName').value
    if (val.length != 0) {
        let x = document.getElementById('skillSet')
        let nd = document.createElement('li')
        let text = document.createTextNode(val)
        nd.appendChild(text)
        x.appendChild(nd)
    } else { 
        alert('заполни инпут')
    }
}


document.getElementById('addSkill').addEventListener('click', name)