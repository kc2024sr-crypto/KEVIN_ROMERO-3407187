📅 Semana 8 - Lo que aprendí
Esta semana aprendí a gestionar colecciones de datos en JavaScript usando métodos de arrays para agregar, eliminar, buscar, filtrar y transformar productos de mi tienda de productos orgánicos y naturales.
Qué aprendí

push → agrega un elemento al final del array
pop → elimina y retorna el último elemento del array
unshift → agrega un elemento al inicio del array
splice → elimina o reemplaza elementos en cualquier posición por índice
filter → recorre el array y retorna un nuevo array solo con los elementos que cumplen una condición
find → retorna el primer elemento que cumple una condición, o undefined si no lo encuentra
forEach → recorre el array ejecutando una función por cada elemento, sin retornar nada
map → recorre el array y retorna un nuevo array transformando cada elemento
Spread operator ... → copia un array sin mutar el original, útil para crear snapshots seguros

Qué hice
🧐 Hice un sistema de gestión de inventario para mi tienda orgánica con 7 productos en 4 categorías que agrega un nuevo suplemento con push, inserta un producto destacado al inicio con unshift, elimina un producto del medio con splice y el último con pop, busca un producto por nombre con find, filtra los disponibles con filter, crea un snapshot inmutable del catálogo con el spread operator, y genera dos transformaciones con map: una lista de nombres y una lista de precios con descuento del 10%.