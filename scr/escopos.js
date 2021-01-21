// var local, e também global
{
    var y = 2
}
console.log(y)


//hoisting
console.log('existe z antes do bloco?', z)
{
   var z = 10
}
console.log('existe z depois do bloco?', z)

/**
 * let e const

    * const e let são variaveis locais e só funcionam dentro do escopo em que foi criada
 */
let x = 1
{
    x = 0
    console.log('existe x ?', x )// valor de x=0 do escopo local
}
console.log('existe x depois do bloco?', x) //valor de x=1 declarado antes do escopo local, e modificado para x=0

const w = 1
{
   /*w = 2
    w não pode ser modificado, pois é uma constante
    console.log('existe w ?', w)
    */
}
console.log('existe w depois do bloco?', w) //valor w=1 do escopo global
