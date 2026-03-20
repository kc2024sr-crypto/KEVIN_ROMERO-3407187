📅 Semana 4 - Lo que aprendí
Esta semana aprendí a manipular cadenas de texto en JavaScript y a construir mensajes dinámicos usando métodos de string y template literals dentro de mi dominio de tienda de productos orgánicos y naturales.
Qué aprendí

trim() → elimina los espacios en blanco al inicio y al final de un string
toUpperCase() / toLowerCase() → convierten el texto a mayúsculas o minúsculas completas
slice(inicio, fin) → extrae una parte del string según las posiciones indicadas
startsWith() / endsWith() → verifican si un string empieza o termina con un valor específico
includes() → verifica si un string contiene una palabra o fragmento
repeat(n) → repite un string n veces, útil para construir separadores visuales
Template literals → permiten insertar variables dentro de un string usando ${} sin necesidad de concatenar con +

Qué hice
🧐 Hice un generador de mensajes para un producto de mi tienda orgánica que limpia y transforma el nombre del producto, extrae el prefijo del código con slice, valida el código y la descripción con startsWith, endsWith e includes, y construye una ficha multilínea completa más un mensaje corto de notificación, todo usando template literals.
Lo que no sabía antes y ahora sí sé
Que los template literals no son solo una forma más cómoda de escribir strings, sino que permiten construir textos multilínea reales sin trucos ni concatenaciones. También aprendí que métodos como trim() son importantes para limpiar datos que vienen con espacios inesperados, algo que pasa mucho cuando los datos los escribe un usuario.