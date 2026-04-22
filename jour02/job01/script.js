function citation()
{
    let citation = document.getElementById("citation");
    let textCitation = citation.textContent;

    console.log(textCitation);
}

let button = document.getElementById("button");

button.addEventListener("click", citation);