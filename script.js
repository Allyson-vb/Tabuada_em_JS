function gerar(){
    var num = window.document.getElementById('num')
    var sel = window.document.getElementById('sel')
    
    if(num.value.length == 0 ){
    window.alert('Impossivel multiplicar, Zé!! Digite um número')
    } else{
        var num = Number(num.value)
        sel.innerHTML = '';
        for (c = 1; c <= 10; c++ ){
            var item = window.document.createElement('option')
            item.text += `${num}X ${c} = ${num * c}`
            item.value = `tab${c}`
            sel.appendChild(item)
        }
    }
}