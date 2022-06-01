# 202210_S2_E2

# Wheels

## Descripción del proyecto

Nuestro proyecto consiste en que usuarios de la Universidad de los Andes puedan ya sea trasladar o ser trasladado por otros miembros de la comunidad uniandina a sus destinos. 

Los usuarios pueden ser de tipo conductor o pasajero:
- El pasajero puede reservar viajes y cancelar el cupo.
- El conductor puede crear viajes, actualizarlos y eliminarlos. Pero también tiene las funcionalidades de un pasajero.

Para poder utilizar la aplicación se debe iniciar sesión primero, si no se conoce el userName y constraseña entonces se debe registrar primero.

## URL live demo
https://app-wheels-uniandes.herokuapp.com/

## Instrucciones de uso

1. Registrarse con usuario, contraseña, email, nombre, telefono, la dirección preferente (casa) e indicar si es conductor o pasajero. En caso de ser conductor debe añadir la información de su vehículo.
2. Realizar el login en la aplicación con el usuario y contraseña registrados. 
3. Se puede proceder a utilizar las funcionalidades propias de cada rol: consultar, actualizar y eliminar información, crear, actualizar, reservar y cancelar viajes. Los endpoints válidos, junto con los parámetros adecuados se encuentran en la Wiki.

## URL video funcionalidad

https://youtu.be/37pe-a_cOmc

## Para desplegar la aplicación:
Primero se deben actualizar las dependencias de las librerias con npm install tanto en la carpeta raíz como en la carpta front. Posteriormente ejecutar npm run build en la carpeta front y por último en la carpeta raíz npm run start. Con esto la aplicación estará totalmente desplegada en el http://localhost:3001/ 

## URL video demo
https://youtu.be/GFCHY5FEaYo
