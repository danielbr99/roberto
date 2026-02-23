let editando = false

const botonesEditar = document.querySelectorAll('.btn-edit');

botonesEditar.forEach((boton, index) => {
    const fila = boton.closest('tr');
    const celdas = fila.querySelectorAll('td');
    boton.addEventListener('click', () => {

        editando = true;
        celdas[3].style.backgroundColor = 'blue';
        celdas[3].style.color = 'lightgray';
        celdas[3].textContent = 'editando';

        console.log(`Editando registro con ID`);
 
        const id = celdas[0].appendChild(document.create(' - editando')).textContent;
        const nombre = celdas[1].textContent;
        const email = celdas[2].textContent;
    })
})