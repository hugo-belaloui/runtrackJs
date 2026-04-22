function showhide()
{
    let article = document.getElementById("hideShowArticle")

    if (article)
    {
        article.remove();
    }
    else
        {
            let newArticle = document.createElement("article");
            newArticle.id = "hideShowArticle";
            newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage";

            document.body.appendChild(newArticle);
        }
}

let button = document.getElementById("button");
button.addEventListener("click", showhide);