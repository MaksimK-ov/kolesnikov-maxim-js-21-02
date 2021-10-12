const firstStr = prompt ()
const secondStr = prompt ()

if(firstStr == secondStr) {
alert('true')
}
else { alert('false')
}


function truncate(str, maxlength) {
    if (str.length > maxlength) {
        str = str.substring(0, maxlength);
        return str + "...";
    }
    else
    return str;
}
alert(truncate("Функция усекает строку до количества символов и добавляет многоточие.", 32));