let firstStr = prompt ()
let secondStr = prompt ()

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

const secondRegExp = new RegExp('^\\d\\d[/]\\d\\d[/]\\d\\d\\d\\d \\d-\\d$');
const regexp = /^\d\d[/]\d\d[/]\d\d\d\d \d\d-\d\d$/;

const firstString = '12/02/2021 12-00';

alert((firstString.replace('/', '.').replace('/', '.').replace('-', ':')));




