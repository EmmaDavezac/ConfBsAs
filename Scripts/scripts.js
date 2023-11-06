  
  //Valida si un Nombre sigue el formato correcto.
  function validarNombre(input) {
    let nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Expresión regular: Letras y espacios, pueden llevar acentos.
    if (nameRegex.test(input) === false || input.lenght > 40) {
      return false;
    }
    else return true;
  }
  
  //Valida si un Email sigue el formato correcto.
  function validateEmail(input) {
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/; // Expresión regular: Letras, números, símbolos especiales.
    if (emailRegex.test(input) === false || input.lenght > 40) {
      return false;
    } else return true;
  }

  function validateCantidad(input){
    int=parseInt(input)

    if (Number.isInteger(int)&&int>0) return true; else return false;
  }
  function validateCategoria(input){
    

    if (input!='') return true; else return false;
  }

  function quitarErrores (){
    let listaInputs = document.querySelectorAll(".form-control, .form-select");
    for(let i = 0; i < listaInputs.length; i++)
        {listaInputs[i].classList.remove('is-invalid');
    }
   
    let listaMensajes = document.querySelectorAll(".form-text");
    for(let i = 0; i < listaMensajes.length; i++)
      {listaMensajes[i].textContent='';
    }
    }

    
  function quitarAciertos (){
    let listaInputs = document.querySelectorAll(".form-control, .form-select");
    for(let i = 0; i < listaInputs.length; i++)
        {listaInputs[i].classList.remove('is-valid');
    }
   
    
    }

//Valida si el Formulario es correcto.
function validatarFormularioTickets() {
    quitarErrores();
    event.preventDefault();
    let accepted = false;
    let nombre, apellido, email;
    nombre = document.getElementById("InputNombre").value;
    apellido = document.getElementById("InputApellido").value;
    email = document.getElementById("InputEmail").value;
    cantidad = document.getElementById("InputCantidad").value;
    inputCategoria=document.getElementById("SelectCategoria")
    categoria=inputCategoria.options[inputCategoria.selectedIndex].text;
    inputname=document.getElementById("InputNombre");
    inputapellido=document.getElementById("InputApellido");
    inputemail=document.getElementById("InputEmail");
    inputcantidad=document.getElementById("InputCantidad");
    selectCategoria=document.getElementById('SelectCategoria');





    //A partir de aquí se comprueba si cada campo es correcto
   
    if (!validarNombre(nombre)) {
        alerta=document.getElementById('nombreHelp');
        inputname.classList.add('is-invalid');
        inputname.focus();
        alerta.textContent="Ingrese un nombre valido";
    }
    else{
      alerta=document.getElementById('nombreHelp');
      alerta.textContent="";
        inputname.classList.remove('is-invalid');
        inputname.classList.add('is-valid');

        
        if (!validarNombre(apellido)) {
          alerta=document.getElementById('apellidoHelp');
          inputapellido.classList.add('is-invalid');
          inputapellido.focus();
          alerta.textContent="Ingrese un apellido valido";
      }
      else{
          alerta=document.getElementById('apellidoHelp');
          alerta.textContent="";
          inputapellido.classList.remove('is-invalid');
            inputapellido.classList.add('is-valid');
          if (!validateEmail(email)) {
            alerta=document.getElementById('emailHelp');
            inputemail.classList.add('is-invalid');
            inputemail.focus();
            alerta.textContent="Ingrese un email valido";
        }
        else{
            alerta=document.getElementById('emailHelp');
            alerta.textContent="";
            inputemail.classList.remove('is-invalid');
            inputemail.classList.add('is-valid');
          if(!validateCantidad(cantidad)){
            alerta=document.getElementById('cantidadHelp');
            inputcantidad.classList.add('is-invalid');
            inputcantidad.focus();
            alerta.textContent="Ingrese una cantidad valida";
          }
          else{
            alerta=document.getElementById('cantidadHelp');
            alerta.textContent="";
            inputcantidad.classList.remove('is-invalid');
            inputcantidad.classList.add('is-valid');
            if(!validateCategoria(categoria)){
              alerta=document.getElementById('categoriaHelp');
              selectCategoria.classList.add('is-invalid');
              selectCategoria.focus();
              alerta.textContent="Seleccione una categoria";
            }
            else{
              alerta=document.getElementById('categoriaHelp');
              alerta.textContent="";
              selectCategoria.classList.remove('is-invalid');
              selectCategoria.classList.add('is-valid');
              
              accepted=true;
              
            }
          }
            
        } 
      }
    return accepted;   
    }
}


function CalcularPrecio (){
let precio=document.getElementById("Precio");
precio.value="Total a Pagar: $0";
if (validatarFormularioTickets()){
let cantidad=document.getElementById("InputCantidad").value;
let total=0;
let categoria=document.getElementById("SelectCategoria").options[inputCategoria.selectedIndex].text;
let boleto=200;
let descuentoEstudiante=80;
let descuentoTrainee=50;
let descuentoJunior=15;
switch(categoria){
    case 'Estudiante':boleto=boleto*descuentoEstudiante/100;
    break;
    case 'Trainee':boleto=boleto*descuentoTrainee/100;
    break;
    case 'Junior':boleto=boleto*descuentoJunior/100;
    break;
}
total=boleto*cantidad;
precio=document.getElementById("Precio");
precio.value="Total a Pagar: $"+total;
}}



function BorrarCamposCompra (){
  quitarErrores();
  quitarAciertos();

  let listaInputs=document.querySelectorAll(".form-input");
  for(let i=0;i<listaInputs.length;i++)
    {listaInputs[i].value='';
  
  }
  inputCategoria=document.getElementById("SelectCategoria")
  categoria=inputCategoria.selectedIndex=0;
  let precio=document.getElementById("Precio");
  precio.value="Total a Pagar: $0";
  }




function ActivarEnlace(enlace){
    EnlaceConferencia=document.getElementById("EnlaceConferencia");
    if(EnlaceConferencia.classList.contains("EnlaceActivo"))
    {EnlaceConferencia.classList.remove("EnlaceActivo")}
    EnlaceConferencia=document.getElementById("EnlaceOradores");
    if(EnlaceConferencia.classList.contains("EnlaceActivo"))
    {EnlaceConferencia.classList.remove("EnlaceActivo")}
    EnlaceConferencia=document.getElementById("EnlaceLugarYFecha");
    if(EnlaceConferencia.classList.contains("EnlaceActivo"))
    {EnlaceConferencia.classList.remove("EnlaceActivo")}
    EnlaceConferencia=document.getElementById("EnlaceFormulario");
    if(EnlaceConferencia.classList.contains("EnlaceActivo"))
    {EnlaceConferencia.classList.remove("EnlaceActivo")}
    enlaceActivo=document.getElementById(enlace);
    enlaceActivo.classList.add("EnlaceActivo");
    
    
    
    }
