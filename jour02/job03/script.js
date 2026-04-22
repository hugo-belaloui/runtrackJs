function addOne()
{
    let countbut = document.getElementById("compteur");
    let currenttext = countbut.textContent;

    let currentnum = parseInt(currenttext);

    let newnum = currentnum +1;
    countbut.textContent = newnum;

}

let button = document.getElementById("button");

button.addEventListener("click", addOne);