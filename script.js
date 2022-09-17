let titulo =  document.createElement('h2')
titulo.style.color = 'black'
titulo.style.fontFamily = 'Roboto' 
titulo.textContent = 'Métodos de arreglos';

document.body.appendChild(titulo);




let arreglo =['😓','😳','😱','🤯','🤤','😬','🥰','🥰'];
document.write('<ul>El método <strong> ForEach()</strong> ejecuta la funcion indicada un vez por cada eleemnto</ul>')
arreglo.forEach(elemento =>
    document.write(`<br>${elemento}`)
   
)

arreglo.forEach(element => {
    document.write(`\t ${element}`)
});

document.write(`<br> <ul> El método <strong>push()</strong> agrega el ultimo elemento en un arrglo</br></ul>`)

arreglo.push('🥶')
arreglo.forEach(elemento => {
    document.write(`\t${elemento}`);
 } )

 document.write('<br><ul>El método <strong>Pop()</strong> nos permite elimina el ultimo elemento del arreglo</ul>')
 arreglo.pop();
 arreglo.forEach(element => {
    document.write(`\t`+element)
 });

 document.write('<br><ul>El método <strong>shift()</strong> nos permite elimina el primer elemento del arreglo</ul>')
 arreglo.shift()
 arreglo.forEach(elemento =>{
        document.write(`\t`+ elemento)
 })
 document.write('<br><ul>El método <strong>Unshift()</strong> nos permite agregar un elemento al inicio del arreglo</ul>')
arreglo.unshift('😋')
arreglo.forEach(element=>{
        document.write(`\t`+element)
})

document.write('<br><ul>El método <strong>indexOf()</strong> nos retorna el indice en el cual se encutra nuestro elemento </ul>')
let aux =arreglo.indexOf('🥰');
document.write('el posición en la que se encuentro: 🥰'+ aux)

document.write('<br><ul>El método <strong>splice()</strong> Nos retorna un rango entre los parametros  y afecta al arreglo directamente</ul>')
 aux =arreglo.splice(2,5);
document.write('Los elementos que se encuentrane en los rangos son: '+ aux)

document.write('<br><ul>El método <strong>slice()</strong> Nos retorna un rango entre los parametros</ul>')
document.write(' '+ arreglo.slice())

document.write('<br><ul>El método <strong>leght()</strong> Retorna el valor total de los elementos del arreglo</ul>')
document.write(' Tamaño de arreglo: '+ arreglo.length)

const dias =  ['lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']
document.write(`<ol>`)
dias.forEach(elemento => {
    document.write(`<li>`+elemento+`</li>`)
})
document.write(`</ol>`)
document.write('<br><ul>El método <strong>filter()</strong> Rertorna  un nuevo arra con los elementos que cumplen las condicioneso</ul>')
const res =  dias.filter(ele => ele.length >2);
document.write(res);

document.write('<br><ul>El método <strong>include()</strong> Verifica, si en el array se encunetra determinado item y devuelve false,true</ul>')
 //res =  dias.includes('🥰')
document.write(`<ul>Devuelve:`+dias.includes('🥰'));
let numeros =  [11,2,3,4,775,6,7,8,344]
document.write('<br><ul>El método <strong>map()</strong>Devuelve un nuevo array con los resultados de lllamada aplicando a cdan un </ul>')
document.write(`<br>Arreglo a mapiar: `);
numeros.forEach(element =>{
    document.write(element+`\t`)
})
let potencia =  numeros.map(e =>{
    return e*2
})
document.write(`<br>Resultado:`+ potencia )



document.write('<br><br>El método <strong>Sort()</strong>Retorna el ordenamiento de forma asendente¡.</ul>')
document.write(`el arreglo queda de la forma`+numeros.sort() );