const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
   nombres: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   apellidos: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
   dni: /^\d{8}$/, // 8 numeros.
   ruc: /^\d{11}$/, // 11 numeros.
   celular: /^\d{9}$/, // 9 numeros.
   telefono: /^\d{7,14}$/, // 7 a 14 numeros.
   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
   nombres: false,
   apellidos: false,
   dni: false,
   ruc: false,
   celular: false,
   telefono: false,
   correo: false
}

const validarFormulario = (e) => {
   switch (e.target.name) {
      case "nombres":
         validarCampo(expresiones.nombres, e.target, 'nombres');
         break;
      case "apellidos":
         validarCampo(expresiones.apellidos, e.target, 'apellidos');
         break;
      case "dni":
         validarCampo(expresiones.dni, e.target, 'dni');
         break;
      case "ruc":
         validarCampo(expresiones.ruc, e.target, 'ruc');
         break;
      case "celular":
         validarCampo(expresiones.celular, e.target, 'celular');
         break;
      case "telefono":
         validarCampo(expresiones.telefono, e.target, 'telefono');
         break;
      case "correo":
         validarCampo(expresiones.correo, e.target, 'correo');
         break;
   }
}

const validarCampo = (expresion, input, campo) => {
   if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;
   } else {
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
   }
}
/* Aplicar evento validarFormulario a todos mis inputs */
inputs.forEach((input) => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
   e.preventDefault();

   if (campos.nombres && campos.apellidos && campos.dni && campos.ruc && campos.celular && campos.telefono && campos.correo) {
      formulario.reset();

      alert("Datos validados correctamente.")

      document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
         icono.classList.remove('formulario__grupo-correcto');
      });
   } else {
      document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
   }
});