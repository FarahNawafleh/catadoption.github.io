
fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json()).then((data) => {
    let catsId = data[0].id

    let catsIdElement = document.createElement("h6")

    let label1 = document.getElementById("label1")
    let label2 = document.getElementById("label2")
    let label3 = document.getElementById("label3")
    let label4 = document.getElementById("label4")
    let label5 = document.getElementById("label5")
    let label6 = document.getElementById("label6")
    label1.append(`${catsId}`)
    label2.append(`${catsId}`)
    label3.append(`${catsId}`)
    label4.append(`${catsId}`)
    label5.append(`${catsId}`)
    label6.append(`${catsId}`)

    /*If I want to show random cat images from the API, simply creat element ("img"),
    and then set it's class attribute (src) to the extracted url from the json from the api  */

    // for testing 
    console.log(label1)
})