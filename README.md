# 1. Título, Descripción y Objetivo
## Título: 
RayoCinema
## Descripción: 
Es un sitio de peliculas y series que contiene los títulos de todas tus plataformas favoritas.
## Objetivo: 
Implementación del login con backend, manejo de CORS implementado, documentación con Swagger y mejoras a consideración.

# 2. Nombre:
Pedro Mauricio Godinez Ortiz

# 3. Mockup:
![mockup](https://github.com/user-attachments/assets/ae2ce2d3-0ef5-4074-8752-898de557dad8)

# 4. Screenshots: 
<img width="1438" alt="principal" src="https://github.com/user-attachments/assets/39cb2152-f5db-4dc0-a9fa-5ea4723ce646" />
<img width="1438" alt="login" src="https://github.com/user-attachments/assets/d970f403-7eb6-409a-b25b-87c63afb930c" />
<img width="1440" alt="index" src="https://github.com/user-attachments/assets/ffd800a5-ebc0-47f5-8ebc-c91517d13056" />
<img width="1440" alt="fav" src="https://github.com/user-attachments/assets/df9f220d-4ff8-4336-b8f8-c824d7d2b839" />
<img width="1440" alt="series" src="https://github.com/user-attachments/assets/f0b24629-e745-4234-8365-f917d534ea6d" />


# 5. Como utilizar el sitio: 
Una vez descargado el repositorio deberas ingresar a la carpeta del proyecto mediante la terminal, ingresar a la carpeta de frontend y después deberás iniciar el servidor de desarrollo local con el comendo ng serve para que te permita ver el proyecto, una vez ejecutado el comando se deberá desplegar el url que te arroja la terminal (ejemplo: http://localhost:4200/), una vez que ya te cargó el proyecto te mostrará el archivo principal.html ahí te mostrará un vistazo previo al sitio, para ingresar deberás dar click en iniciar sesión para dirigirte al login, en el login introducirás tus datos, solo hay un usuario registrado así que si pones otros datos te dará error si deseas ingresar al sitio para pruebas puedes introducir el correo (mau@gmail.com) y la contraseña (mau) al dar click en iniciar sesión te redigirá a la pantalla principal dónde estan todos los títulos disponibles, si das click en ver te despliegará a una página donde te mostrará una algunos detalles del título, en la pestaña de favoritos se muestran los títulos que marcaste como favoritos, en la pestaña de series se muestran solo las series disponibles así como en la pestaña de películas y en cada pestaña encontrarás un botón para cerrar sesión que te redirigirá al login, eso es para levantar el frontend y para el back te diriges a la carpeta de backend y corres el comando dotnet run para levantar el servidor (no deberías tener problema si utilizas windows ya que utiliza autenticación integrada de Windows pero si usas mac deberas modificar el appsettings.json y añadir el server, user y password para poder realizar la conexión)y abrir http://localhost:5250/swagger/index.html para visualizar el API y conectar el frontend con el backend.

# 6. Dependencias o bibliotecas utilizadas: 
@angular/animations 18.2.13, @angular/common 18.2.13, @angular/compiler 18.2.13, @angular/core 18.2.13, @angular/forms 18.2.13, @angular/platform-browser 18.2.13, @angular/platform-browser-dynamic 18.2.13, @angular/router 18.2.13, @fortawesome/fontawesome-free ^6.7.2, bootstrap ^5.3.6, rxjs ^7.5.7, tslib ^2.6.2, zone.js ~0.14.10, @angular-devkit/build-angular 18.2.7, @angular/cli 18.2.7, @angular/compiler-cli 18.2.13, typescript 5.4.5

# 7. Como lo hice: 
Como ya tenía conectado el login con la bd me faltaba hacer el registro porque los nuevos usuarios no podrían ingresar, después de eso hice que el apartado de favoritos fuera dinámico, ahora al principio la pestaña estara vacía y al añadir el título se agregará a la pestaña, y finalmente verifiqué lo del CORS implementado para ver que todo esuviera bien.

# 8. Reporte de Code Coverage y reporte de testing:
<img width="1440" alt="test coverage" src="https://github.com/user-attachments/assets/7a0a4741-c291-4d95-9546-a551a6043c82" />
<img width="1440" alt="reporte de test" src="https://github.com/user-attachments/assets/ff7c3598-862e-4570-bc9f-8987cf59d071" />

# 9. Diagrama BD:
<img width="514" alt="BD" src="https://github.com/user-attachments/assets/072b12d1-a05d-4edc-a69b-014edf728484" />
<img width="420" alt="Codigo bd" src="https://github.com/user-attachments/assets/8d3591d7-7804-4468-b56d-c2658b6a5a14" />

# 10. Posibles mejoras futuras:
Listado dinámico de películas y series desde la base de datos ya que ahora solo es en el localstorage, página de perfil del usuario, búsqueda o filtros por género, nombre.

# 11. Documentación de swagger:
## URL Base: 
http://localhost:5250/swagger/index.html

## Endpoints disponibles:
/api/Usuarios/login
/api/Usuarios/registro

## Login de usuario:
Body (JSON)
{
  "correo": "usuario@ejemplo.com",
  "contrasena": "123456"
}

Respuesta exitosa (200)
{
  "id": 1,
  "nombre": "Nombre de Usuario",
  "correo": "usuario@ejemplo.com",
  "contrasena": "123456"
}

Error (401)
Usuario o contraseña incorrectos

## Registro de usuario:
Body (JSON)
{
  "nombre": "Nuevo Usuario",
  "correo": "nuevo@correo.com",
  "contrasena": "123456"
}

Respuesta exitosa (200)
{
  "id": 2,
  "nombre": "Nuevo Usuario",
  "correo": "nuevo@correo.com",
  "contrasena": "123456"
}

Error (400)
El correo ya está registrado.

<img width="1440" alt="swagger" src="https://github.com/user-attachments/assets/3ef8eb6f-f437-4097-bd39-ebf5b88256cb" />

# 12. Archivos de configuración de ambientes:

## Docker

### Como construir la imágen:
docker build -t rayo-backend .

### Cómo levantar el proyecto:
docker-compose up

### Dockerfile
<img width="558" alt="dockerfile" src="https://github.com/user-attachments/assets/6675b32e-666e-4291-853a-4620dd294ce0" />

### docker-compose.yml
<img width="558" alt="dockercompose" src="https://github.com/user-attachments/assets/7a518a30-a373-47d4-9b69-364041aba9ef" />

## Kubernetes

### Cómo desplegar kubernetes
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

### deployment.yaml
<img width="558" alt="kuber" src="https://github.com/user-attachments/assets/ccfc06ed-f7c2-49a9-9ea5-c204e271439e" />

### service.yaml
<img width="558" alt="kuber2" src="https://github.com/user-attachments/assets/dd5bd6f2-0ef2-4e49-9c70-6576ec11333b" />

# 13. Problemas conocidos: 
Esta vez no hubo muchas complicaciones, solamente algunos problemas para lograr la conexión del nuevo componente de registro con el end point pero nada grave.

# 14. Retrospectiva: 
Que hice bien? Tener bien definidas las funcionalidades que quería agregar para optimizar bien el tiempo. Que hice mal? No lograr que las películas y series ya se guarden en la bd y no sean arrays así como el manejo de las mismas en la parte de favoritos. Que puedo hacer diferente? Seguir mejorando en cada sprint contemplando lo que quiero hacer para dosificar bien mi tiempo y definir tareas que sean alcanzables en el tiempo definido.
