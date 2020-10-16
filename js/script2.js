function add() {

    let name = document.getElementById("nameInput").value
    let breed = document.getElementById("breedInput").value
    let age = document.getElementById("ageInput").value
    let color = document.getElementById("colorInput").value
    if (name) {
        var t = document.getElementById("dashTable");
        var r = document.createElement("TR");
        r.innerHTML = `
                                             <tr>
                                                <td>${name}</td>
                                                <td>${breed}</td>
                                                <td>${age}</td>
                                                <td>${color}</td>
                                            </tr>
                                    `
        t.tBodies[0].appendChild(r)

        var clearName = document.getElementById("nameInput")
        clearName.value = ""

        var clearBreed = document.getElementById("breedInput")
        clearBreed.value = ""

        var clearAge = document.getElementById("ageInput")
        clearAge.value = ""

        var clearColor = document.getElementById("colorInput")
        clearColor.value = ""

    }
}