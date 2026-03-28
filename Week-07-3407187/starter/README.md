📅 Semana 7 - Lo que aprendí
Esta semana aprendí a crear funciones reutilizables en JavaScript y a organizarlas como una librería aplicada a mi dominio de tienda de productos orgánicos y naturales.
Qué aprendí

Funciones con return → una función debe devolver un valor para ser reutilizable, separando el cálculo del console.log
Arrow functions () => → forma corta de declarar funciones, ideal para funciones de una sola expresión
Parámetros por defecto → permiten que una función funcione aunque no reciba todos los argumentos
Funciones puras → siempre devuelven el mismo resultado con los mismos parámetros, sin modificar nada externo
Funciones de formato → reciben un objeto y devuelven un string listo para mostrar
Funciones de validación → reciben un elemento y devuelven true o false según una regla del dominio
Usar funciones como valores → una función puede pasarse como argumento o usarse dentro de un bucle como callback de formato

Qué hice
🧐 Hice una librería de funciones para mi tienda orgánica con 8 productos en 4 categorías que incluye una arrow function formatProduct para formatear cada producto en consola, una función pura calculateTotal que calcula el total de una compra con cantidad y porcentaje de descuento opcional, una función isAvailable que valida si un producto está disponible para venta, y una función formatWithDefault con parámetros por defecto para formatear precios con moneda. Todo se integra en un reporte final que usa cada función dentro de un for...of.