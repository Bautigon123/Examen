let lista=[]
function registrar(){
    let input1=document.getElementById("nombre")
    let input2=document.getElementById("edad")
    let input3=document.getElementById("dolor")

    let paciente ={
        nombre:input1.value,
        edad:input2.value,
        dolor:input3.value
    }
    lista.push(paciente)
    mostrarpaciente()
}

function mostrarpaciente(){
    let tbody=document.getElementById("salida")
    tbody.innerHTML=""
    lista.map((elemento,indice)=>{
        tbody.innerHTML+=`

        <tr class="table-danger">
                <th>${elemento.nombre}</th>
                <th>${elemento.edad}</th>
                <th>${elemento.dolor}</th>
                <th><button onclick="eliminarregistro(${indice})">eliminar</button></th>
            </tr>
            `})}
function eliminarregistro(indice){
    lista.splice(indice,1)
    mostrarpaciente()
}

