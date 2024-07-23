-----------------CHALLENGE WEATHER-----------------

Este proyecto permite:
.- Conocer la ubicacion de diferentes ciudades.
.- Saber el estado actual del clima o prolongado en 5 dias de tu ciudad o cualquier otra.

RUTA BASE: /v1

1.- Endpoint para conocer la ubicacion de tu ciudad actual: /location

2.- Endpoint para conocer el estado del tiempo actual de tu ciudad o cualquier otra: /current/city
En donde city es un parametro opcional, Ejemplo, si le pegamos a la ruta /v1/current/madrid, nos devolvera los datos de locacion de la ciudad de Madrid y su estado del clima.

3.- Endpoint para conocer el estado del tiempo prolongado de tu ciudad o cualquier otra:/forecast/city
En donde city es un parametro opcional, Ejemplo, si le pegamos a la ruta /v1/current/londres, nos devolvera los datos de locacion de la ciudad de Londres.

\*\* Tanto para el punto 1 y 2 si solamente le pegamos a la ruta sin agregar el parametro city, ejemplo:
/v1/current, esto nos devolvera los datos de nuestra ciudad actual.

\*\* En algunos casos los nombres de ciudades que pasamos como parametro no funcionan debido a la API utilizada,
como por ejemplo "Jujuy".

\*\*\* El proyecto se encuentra dockerizado, por lo tanto, no es necesario tener instalada la misma version de Nodejs.
Con solo descargarse el proyecto y correr el comando docker-compose up podria utilizarlo.
