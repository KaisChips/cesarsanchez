// Importamos el visor de IFC.js (web-ifc-viewer)
import { Viewer } from 'web-ifc-viewer';

// Configuración inicial del visor IFC
const container = document.getElementById('ifc-container');
const viewer = new Viewer({
    container: container,
    backgroundColor: 0xffffff, // Fondo blanco
    theme: 'dark',  // Establece un tema oscuro opcional
});

// Ajustamos el tamaño del contenedor del visor al redimensionar la ventana
window.addEventListener('resize', () => {
    viewer.resize();
});

// Función para cargar y renderizar un archivo IFC
const loadIfcFile = async (file) => {
    if (!file) return;

    const url = URL.createObjectURL(file); // Creamos una URL temporal del archivo

    console.log('Cargando archivo IFC:', url); // Para depuración

    try {
        // Cargamos el modelo IFC desde la URL temporal y lo añadimos a la escena
        const model = await viewer.IFC.loadIfcUrl(url);
        console.log('Modelo IFC cargado exitosamente:', model); // Verifica que el modelo haya sido cargado

        viewer.scene.add(model);
        viewer.fitToFrame(model);
    } catch (error) {
        console.error('Error al cargar el archivo IFC:', error);
    }
};

// Añadimos un evento al input para cargar archivos IFC
const input = document.getElementById('ifc-upload');
input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Archivo seleccionado:', file.name); // Para depuración
    }
    loadIfcFile(file);
});

// Código adicional para inicializar el visor y manejar eventos globales
(async () => {
    // Inicializamos el visor y cargamos alguna configuración adicional si es necesario
    console.log('Visor IFC inicializado correctamente.');
})();
