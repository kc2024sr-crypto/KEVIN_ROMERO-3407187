// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional

const elementName = "Aceite de coco orgánico";   // nombre del producto
const elementStatus = "active";                   // estado actual en inventario
const elementValue = 18;                          // unidades disponibles en stock
const elementType = "oil";                        // categoría del producto
const elementInfo = {                             // información adicional del producto
  origin: "Colombia",
  detail: "Prensado en frío, certificado orgánico"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }

// Clasifica el nivel de stock del producto
let classification;
if (elementValue >= 50) {
  classification = "Stock alto";
} else if (elementValue >= 20) {
  classification = "Stock medio";
} else if (elementValue >= 10) {
  classification = "Stock bajo";
} else {
  classification = "Stock crítico";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

// Etiqueta legible del estado del producto en tienda
const statusLabel = elementStatus === "active" ? "Disponible" : "No disponible";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

// Asigna la categoría legible según el tipo de producto
let typeLabel;
switch (elementType) {
  case "oil":
    typeLabel = "Aceites y grasas naturales";
    break;
  case "supplement":
    typeLabel = "Suplementos y proteínas";
    break;
  case "grain":
    typeLabel = "Granos y cereales orgánicos";
    break;
  case "herb":
    typeLabel = "Hierbas y plantas medicinales";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Ejemplo: const displayName = elementName ?? "Sin nombre";

// Nombre a mostrar, con fallback si es null
const displayName = elementName ?? "Sin nombre";
// Detalle del producto, con fallback si elementInfo no tiene la propiedad
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Ejemplo: const location = elementInfo?.location ?? "Ubicación no especificada";

// País de origen del producto, accedido de forma segura
const safeProperty = elementInfo?.origin ?? "Origen no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre:               ${displayName}`);
console.log(`Estado:               ${statusLabel}`);
console.log(`Clasificación:        ${classification}`);
console.log(`Tipo:                 ${typeLabel}`);
console.log(`Detalle:              ${infoDetail}`);
console.log(`Origen:               ${safeProperty}`);
console.log("=".repeat(40));