

// intervengo con html 
const form = document.getElementById("suscrib-form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");


// Evento
form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // input
    const nombre = nombreInput.value;
    const email = emailInput.value;


    // Creo objeto JSON con los datos
    const subscriberData = {
        nombre,
        email,
    };

    // localstorage
    localStorage.setItem('subscriber', JSON.stringify(subscriberData));

    // imprimir mensaje
    document.getElementById("estadoLogueado").textContent = `Bienvenido ${nombre} !`;
});




// Selecciono botones de productos
const botonesProductos = document.querySelectorAll('.producto');

// Creo un arreglo para almacenar la selección
let seleccion = [];

// evento de clic 
botonesProductos.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // Agregamos el producto seleccionado al arreglo
        seleccion.push(`Producto ${index + 1}`);
        console.log(`Producto ${index + 1} seleccionado`);
    });
});


// evento de clic al botón "Guardar selección"
document.getElementById('guardar').addEventListener('click', () => {
    // Guardamos la selección en el localStorage
    localStorage.setItem('seleccionProductos', JSON.stringify(seleccion));
    console.log('Selección guardada');
    // imprimir mensaje     
    alert(`¡usted selecciono ${seleccion}!`);
    });




            // Función para manejar la selección
            function opSelection() {
                const selectElement = document.getElementById("Select");
                const selectOpcion = selectElement.value;
    
                // Guardar la selección en el localStorage
                localStorage.setItem("userSeleccion", selectOpcion);
                // Imprimir mensaje 
                console.log("seleccion realizada con éxito");
            }
    
            // Función para extraer la información del localStorage
            function ultimaSeleccion() {
                const seleccion = localStorage.getItem("userSeleccion");
                if (seleccion) {
                    console.log("Tu ultima seleccion fue : " + seleccion);
                } else {
                    console.log("Debes seleccionar una opción");
                }
            }
    


