
<h1>Weekly</h1>

<ul>
                                
<h2>Modificaciones Sprint 2:</h2>
  
  <p>Estructura de carpetas de proyecto</p>
  <p>Prioridad por versión mobile</p>
  <p>Trabajar con Back up -Pato-Quiz y Vic y Pat</p>
  <p>Carga de historia de usuario al Trello</p>
  <p>Archivos de estilo y html separados por cada sección</p>
  <p>Header hamburguesa lo hace Quiz y lo comparte a todas</p>
  <p>Victoria hace footer</p>
  <p>Pat hace el detalle del producto</p>
  <p>Pato hace la home</p>
  <p>Pato se ocupa de que el home sea responsivo</p>
  <p>Pato linkea en el header</p>
  <p>Quiz hace el carrito</p>
  <p>Quiz modifica z-index del header</p>
  <p>Footer lo hace Vic más responsivo</p>
  <p>Definición de la retro</p>
  <p>Victoria hace Register page versión mobile</p>
  <p>Victoria hace Login page versión mobile</p>
  <p>Hacer responsive la Register page, medias queries</p>
  <p>Hacer responsive la Login page, medias queries</p>
  <p>Hacer responsive carrito de compras y Header, medias queries</p>
  <p>Colocar las tareas en el Trello</p>
  <p>Hojas de estilo ordenadas</p>
  
</ul>

<ul>                              
<h2>Modificaciones Sprint 3:</h2>
  
 <strong>Lunes 21 de Febrero:</strong>
 <p>Nos reunimos y nos organizarmos las tareas</p>
 <p>Actuaizamos el trello con las nuevas tarjetas del sprint 3 y nos asignamos las tarjetas</p>
  
 <strong>Lunes 24 de Febrero:</strong>
 <p>Comenzamos actualizar cada una las páginas: html de productDetail, Register, login para adaptarlo a los wireframes</p>
 <p>Creamos las etiquetas de cada html para que no se repitan y se pisen los estilos en la unificación del CSS</p>
 <p>Unificamos el css del register en un nuevo style.css donde vamos a unificar todas las páginas</p>
 <p>Quiz comenzó a trabajar en el HTML del formulario de carga de productos</p>
 <p>Victoria genera la nueva estructura de carpetas, y crea las rutas y controllers para main y products</p>
 <p>Victoria implementa el motor de templates EJS y utiliza el método render() en todos los archivos .ejs</p>
 <p>Vistas separadas en carpetas: users y products</p>
 <p>Carpeta partials creada y archivos head.ejs, header.ejs y footer.ejs implementados con include en las vistas principales</p>
 <br>
 <strong>Miércoles 2 de marzo:</strong>
 <p>Se decidió agregar nuevas categorías de productos</p>
 <p>Decidimos sincronizar de carrito de productos y product detail</p>
</ul>

<ul>                              
<h2>Modificaciones Sprint 4:</h2>
  
 <strong>Sábado 11 de Marzo:</strong>
 <p>Actualizamos el trello con las nuevas tarjetas del sprint 4.</p>
 <p>Implementación de CRUD.</p>
 <p>Desarrollo de nuevas rutas - GET - POST - PUT - DELETE</p>
 <p>Actualización de controladores, creación de nuevos métodos para eliminar, guardar y editar información de productos.</p>
 <p>Creación de archivos JSON para productos, usuarios y mentores.</p>
 <p>Carpeta Data en la estructura del proyecto.</p>
 <p>Revisión de vistas faltantes</p>
 <p>Mejoras estéticas y de css en las vistas existentes.</p>
  
  
  <h2>Modificaciones Sprint 5:</h2>
  
 <strong>Martes 29 de marzo</strong>
 <p>Tuvimos meeting y revisamos el documento de las consignas del sprint 5</p>
 <p>Creamos las tarjetas en Trello con las tareas principales de los entregables de la sprint 5</p>
 <strong>Sábado 1 de abril</strong>
 <p>Nos reunimos en una call en discord para seguir las tareas</p>
 <p>Se hizo push con modificaciones en la home de correcciones de la sprint 4</p>
 <p>Se hizo push de la página 404</p>
 <p>Se creó la vista de profile de usuario</p>
 <p>Se creó la estructura de archivos y directorios de usuarios.</p>
 <strong>Viernes 8 de Abril</strong>
 <p>Se comenzó a trabajar el login de usuarios con la implementación de middlewares, sesiones</p>
 <p>Se trabajó y se hizo push de express validator para los formularios</p>
 <p>Se agregó el middleware del multer de login para hacer el guardado de lña imágen del avatar de usuario</p>
 <p>Se agregó los middleware de los usuarios logueados y de los usuarios invitados (guest)</p>
 <strong>Viernes 9 de Abril</strong>
 <p>Se hizo push de la primera parte de session</p>
 <p>Se creó la página que redirecciona las páginas en construcción</p>
 <strong>Domingo 17 de Abril</strong>
 <p>Se creó el template enine de la vista profile y se agregó estilo CSS</p>
 <p>Se agregaron las rutas de user edit y creó en el userController el método editUsers</p>
 <p>Se completó la funcionalidad mostrar contraseña en el formulario de registro</p>
 <p>Como parte de rutas accesible: solo por usuarios logueados pueden editar o eliminar productos. Los usuarios logueados no tendrán disponible la opción de crear cuenta o ingresar</p>
 
<h2>Modificaciones Sprint 6:</h2>
<strong>Miércoles 20 de abril</strong>
<p>Revisamos las consignas de la sprint 6. Se comenzó a trabajar con el DER de la aplicación y lo compartimos con Lucas por discord</p>
<strong>Sábado 23 de abril</strong>
<p>Recibimos feedback del Lucas sobre el DER y se comenzó a trabajar en crear los modelos en el proyecto</p>
<strong>Viernes 29 de abril</strong>
<p>Se compartió el primero script de SQL y probamos iniciarlo todas en nuestras computadoras, cómo hubo errores y modificaciones en la tabla de mentores se procedió a editar el SQL script</p>
<p>Se acordó comenzar a rmeover las páginas que no están terminadas como newsletter, y otros links que no tienen vistas creadas para hacer m´s limpia la aplicación</p>
<strong>Viernes 6 de Mayo</strong>
<p>Pudimos levantar y conectar la base de datos al proyecto, comenzamos el CRUD</p>
<strong>Sábado 7 de Mayo</strong>
<p>Se creó el create y el detail (read) de productos. En el detail estamos resolviendo porque la relacion de products, produc_mentor, mentors y users no está mostrando la información de los mentores en la vista de detail:id</p>
<strong>Martes 10 de Mayo</strong>
<p>Identificamos que el error de las asociaciones entre la tabla de product_mentor, mentor y usuario estaba mal desde las relaciones en la base de datos, se removió la tabla pivote y se hizo una nueva relación mentor-user, y product user y se completó el CRUD de productos</p>
<p>Fueron removidas las páginas y links que no están en uso</p>
<p>Comenzamos a trabajar en el CRUD de usuarios</p>

  <h2>Modificaciones Sprint 7:</h2>
<strong>Lunes 30 de Mayo</strong>
<p>Dividimos las tareas y nos asignamos las actividades en las tarjetas de user stories</p>
<strong>Martes 31 de Mayo</strong>
<p>Comenzamos a trabajar con las validaciones del front end de usuarios y productos</p>
<p>Se modificó la vista de Register mentor ejs, se hicieron modificaciones en el header y footer</p>
<p>Se actualizó el script de base de datos para permitir que el mentor ID pudiese ser nulo por defecto en la tabla users, y se pudan registrar usuarios sin ser mentores</p>
<p>Pusheadas las validaciones del front end de usuarios con lo requerido para el srpint</p>
<strong>Miércoles 1 de junio</strong>
<p>Se pusheo la validación de creación de producto con lo requerido para la sprint</p>
<p>Hicimos una meeting para revisar el funcionamiento de la aplicación crear, actualizar, eliminar un usuario y un producto</p>
<p>Definimos qué mejoras tenemos que seguir trabajando para el siguiente sprint, como validación de producto en el front, agregar api de países a la edición del usuario, crear vista de contacto</p>
  

<h2>Modificaciones Sprint 8:</h2>
<strong>Lunes 6 de Junio</strong>
<p>Dividimos las tareas y nos asignamos las actividades en las tarjetas de React y API en user stories</p>
<strong>Martes 7 de Junio</strong>
<p>Se creó el campo date en el modelo de productos y se cambió en la base de datos</p>
<strong>Viernes 10 de Junio</strong>
<p>Se comenzó a crear el dashboard con React, pero se requerían las apis</p>
<strong>Viernes 10 de Junio</strong>
<p>Se creó la api de usuarios y de productos</p>
<strong>Viernes 10 de Junio</strong>
<p>Se creó la api de usuarios y de productos</p>
<strong>Viernes 12 de junio</strong>
<p>Se creó la api de categories y se pusheó el dashboard consumiendo data</p>
<p>Cómo detalles pendientes se creó la vista de contacto, con una nueva tabla en la base de datos, validaciones backen y frontend</p>
<p>Se creó la lógica de filtrar los productos por categoría</p>
