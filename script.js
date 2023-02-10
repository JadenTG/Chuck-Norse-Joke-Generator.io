var url = `https://api.chucknorris.io/jokes/random`
var btn = document.getElementById("btn")

function generate(){

    fetch(url)
    .then(res => res.json())
    .then(data => {

        var joke = data.value

        console.log(joke)

        document.getElementById("one").innerHTML = "A tale of the Great Chuck Norse, : <br>" + `"${joke}"`;
        document.getElementById("one").style.color = "white"
        document.getElementById("one").style.textShadow = "white 0px 0px 10px";

    })
}

btn.addEventListener('click', generate);