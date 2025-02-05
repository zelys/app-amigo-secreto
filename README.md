# App Sorteo Amigo Secreto

Una aplicación web simple que permite a los usuarios crear una lista de nombres y realizar sorteos aleatorios entre ellos.

## Características

- Agregar nombres a una lista mediante un input de texto
- Agregar nombres presionando Enter o mediante botón
- Validaciones de entrada:
  - No permite nombres vacíos
  - No permite nombres duplicados
  - Solo acepta letras y espacios (sin números ni caracteres especiales)
- Sistema de notificaciones para errores
- Sorteo aleatorio entre los nombres ingresados
- Interfaz responsiva y fácil de usar

### Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript

### Instalación

1. Clona este repositorio:

   ```bash
   clone https://github.com/zelys/app-amigo-secreto.git
   ```

1. Navega al directorio del proyecto:

   ```bash
   app-amigo-secreto
   ```

1. Abre el archivo index.html en tu navegador web preferido.

### Uso

1. Ingresa un nombre en el campo de texto.
1. Agrega el nombre a la lista mediante:
   - Presionando la tecla Enter
   - Haciendo clic en el botón "Agregar"
1. Repite el proceso para agregar más nombres.
1. Para realizar un sorteo, haz clic en el botón "Sortear".

## Funcionalidades del JavaScript

### Validaciones

- **Nombres Vacíos**: No permite agregar cadenas vacías o solo espacios
- **Nombres Duplicados**: Evita la duplicación de nombres (no distingue entre mayúsculas y minúsculas)
- **Caracteres Permitidos**: Solo acepta letras (incluyendo acentos y ñ) y espacios

## Sistema de Notificaciones

- Muestra mensajes de error en popups
- Los popups desaparecen automáticamente después de 3 segundos
- Diseño visual distintivo para mensajes de error

## Personalización

Para modificar los estilos de los popups de error, puedes ajustar las propiedades en la función `showError()` dentro de `app.js`.
