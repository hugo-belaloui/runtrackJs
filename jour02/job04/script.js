function keylog(event)
{
    let textarea = document.getElementById("keylogger");

    let touch = event.key;

    if (/^[a-zA-Z]$/.test(touch))
    {
        if (document.activeElement === textarea)
        {
            textarea.value = textarea.value + touch + touch;
        }
        else
        {
            textarea.value = textarea.value + touch;
        }
    }
}
window.addEventListener("keydown", keylog);