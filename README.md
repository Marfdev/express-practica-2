**creditos del front a los sgtes codepens**

https://codepen.io/kh3996/pen/pojXrBj - login/signup

https://codepen.io/GilaniRabbu/pen/rNPrqoN - navbar

---
# Para inicializar
```
npm i
node server.js
```
---

# Entrega 1
Explicacion y descripcion paso a paso de como se completo el proyecto

# Paso 1:
## inicializacion

creamos nuestro folder con mkdir y entramos a el para inicializar nuestro proyecto de node

# Paso 2:
## estructura de carpetas
creamos una estructura de carpetas algo asi:
- config
    - db.config.js | configure MySQL database & Sequelize
    - auth.config.js | configure Auth Key
- routes
    - auth.routes.js| POST del signup & signin
    - user.routes.js| GET de los mensajes mostrados en las vistas
- middlewares
    - verifySignUp.js: verificacion de usuarios
    - authJwt.js: verificacion de token y roles correctos
- controllers
    - auth.controller.js: maneja las acciones del signup y signin
    - user.controller.js: maneja los mensajes mostrados en las vistas
-  models 
    - user.model.js modelo de squelize de usuario
    - role.model.js mmodelo de sequelize de rol
- server.js: base de nuestro proyecto que maneja los modulos necesarios para el funcionamiento del proyecto

# Paso 3:
## Dependencias
Para esta entrega se utilizaron las dependencias:
- express
- mysql2
- jsonwebtoken
- cors
- sequelize

# Paso 4:
## tutorial

seguimos las bases del [tutorial visto en clase](https://www.bezkoder.com/node-js-jwt-authentication-mysql/) hasta tener un backend funcional con autenticacion jwt

# Paso 5:
## Front

Creamos una carpeta public, donde tendremos nuestras vistas 
- [Entry](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/entry.html) Para el login y signup | asignado a la ruta "/signin"
- [Home](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/home.html) La pagina base, donde podemos ver el mensaje de info publica | asignado a las rutas "/" y "/all"
- [User](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/user.html) Pagina de usuario, todo aquel que este logueado correctamente con un token podra ver el mensaje | asignado a la ruta "/user"
- [Mod](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/mod.html) Pagina de moderador, solo aquellos con rol de admin o moderador podran ver el mensaje | asignado a la ruta "/mod"
- [Admin](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/admin.html) Pagina de administrador, solo administradores podran ver el mensaje | asignado a la ruta "/admin"

utilizando los recursos mencionados anteriormente y modificandolos para que nos sean de utilidad

en estas se encontraran los fetch a nuestra api para podernos registrar, loguear y visualizar los mensajes de cada rol correspondiente

cada opcion en el navbar nos llevara a una accion o mensaje diferente y tambien tendremos la opcion de desloguearnos

las funciones de signin y signup que se encuentran en [Entry](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/public/html/entry.html) guardan el token que nos devuelve la api en el localstorage para su uso al momento de llamar los mensajes desde la api en las paginas de user, mod, y admin

# Paso 6:
## Rutas del front

adaptamos y creamos las diferentes rutas para el front en un archivo [front.routes.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/app/routes/front.routes.js) en la carpeta correspondiente

y finalmente añadimos las rutas nuevas a la app configurandolas correctamente en nuestro archivo [server.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega1/src/manuel.rondon/server.js)


---
# Entrega 2

Explicacion y descriipcion paso a paso de como se completo el proyecto

# Paso 1:
## Dependencias

contando ya con *express* y *jsonwebtoken*
para esta entrega usaremos el odm de mongodb, *mongoose*
ademas de *bcrypt* para el manejo de la encryptacion de contraseñas con hash

# Paso 2: 
## Modelos

creamos Nuestros modelos de User y Roles en sus respectivos archivos y carpetas

[app > models > user.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/models/user.js)

[app > models > role.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/models/role.js)

# Paso 3:
## Autentificacion

creamos nuestro *controlador de autentificacion*

reutilizando nuestro [secret](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/config/auth.config.js) de la entrega anterior para el JWT

donde estaran nuestras funciones de login y signup

aqui es donde creamos los documentos de tipo "User" en la base de datos

que siguen nuestro modelo ya definido

[app > controllers > authController](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/controllers/authController.js)

# Paso 4: 
## Verificacion

Creamos nuestro middleware para autenticarnos

es decir, verificar que estemos utilizando el token de manera correcta en los requests

con la funcion de authenticateToken

[app > middleware > authMiddleWare](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/middleware/authMiddleWare.js)

# Paso 5:
## Comodidad

creamos 2 controladores mas, el primero,

roleController, donde tendremos la funcion que creara nuestros roles al inicializar el servidor de una manera mas simple

[app > controllers > roleController](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/controllers/roleController.js)

y el segundo será userController lo reutilizaremos para hacer un poco mas corto el codigo a la hora de definir las rutas

[app > controllers > userController](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/controllers/userController.js)

# Paso 6:
## Rutas

en esta entrega se utiliza mayoormente el router de express en vez de llamar las rutas directamente de la app (app.get)
pero su funcionamiento es bastante similar

agrupamos nuestras rutas segun su funcionalidad 

[authRoutes](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/routes/authRoutes.js) para la api de autentificacion

[dashboardRoutes](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/routes/dashboardRoutes.js) para las vistas y el front

y [testRoutes](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/routes/testRoutes.js) para los mensajes de visualizacion segun corresponda

# Paso 7:
## Vistas

reutilizamos nuestras vistas de la entrega 1 y las adaptamos a nuestras rutas, 

cambiando un poco algunos nombres de algunas variables, pero sin ningun cambio mayor a las llamadas que hacen ni a la logica que utilizan

el mayor cambio que recibio fue en cuanto a el manejo de los roles al momento de su creacion, para hacerlo de una manera mas eficiente a nivel de datos

las vistas son 

-[Entry](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/public/html/entry.html) Para el login y signup | asignado a la ruta "/signin"
-[Home](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/public/html/home.html) La pagina base, donde podemos ver el mensaje de info publica | asignado a la ruta "/"
-[User](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/public/html/user.html) Pagina de usuario, todo aquel que este logueado correctamente con un token podra ver el mensaje | asignado a la ruta "/user"
-[Mod](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/public/html/mod.html) Pagina de moderador, solo aquellos con rol de admin o moderador podran ver el mensaje | asignado a la ruta "/mod"
-[Admin](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/public/html/admin.html) Pagina de administrador, solo administradores podran ver el mensaje | asignado a la ruta "/admin"

los permisos y autorizaciones de los mensajes estan definidas en las rutas de [testRoutes](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/app/routes/testRoutes.js)


# Paso 8:
## server.js

Finalmente creamos la base de nuestra app en el archivo [server.js](https://bitbucket.org/uneatlantico/pw1_23-24_entrega2/src/manuel.rondon/server.js)

primero importando las dependencias,

despues conectamos a la base de datos con mongoose.connect

despues registramos las rutas con app.use

inicializamos el servidor en el puerto 3000
 
y finalmente creamos los roles en la base de datos (solamente si no estan)

