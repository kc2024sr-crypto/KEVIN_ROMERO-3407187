// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Tienda de Productos Orgánicos y Naturales
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.
//
// NOTA PARA EL APRENDIZ:
// Ejemplos de adaptación:
//   Biblioteca  → { name: "El Principito", category: "ficción", value: 96 }
//   Farmacia    → { name: "Ibuprofeno", category: "analgésico", value: 150 }
//   Gimnasio    → { name: "Bicicleta", category: "cardio", value: 6.5 }
//   Restaurante → { name: "Ensalada César", category: "entrada", value: 8.5 }

// Productos de la tienda: nombre, categoría y precio en COP
const products = [
  { name: "Aceite de coco orgánico",   category: "aceites",      value: 28_000 },
  { name: "Granola natural",           category: "cereales",     value: 15_500 },
  { name: "Proteína vegana vainilla",  category: "suplementos",  value: 65_000 },
  { name: "Miel de abejas pura",       category: "endulzantes",  value: 22_000 },
  { name: "Avena orgánica integral",   category: "cereales",     value: 12_000 },
  { name: "Aceite de oliva extra",     category: "aceites",      value: 35_000 },
  { name: "Stevia en polvo",           category: "endulzantes",  value: 18_500 },
  { name: "Proteína de cáñamo",        category: "suplementos",  value: 72_000 },
];

// Categorías del inventario de la tienda
const categories = ["aceites", "cereales", "suplementos", "endulzantes"];

// Etiqueta para el valor numérico del dominio
const valueLabel = "precio (COP)";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

// Recorre todos los productos e imprime nombre, categoría y precio
let lineNumber = 0;

for (const item of products) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: $${item.value.toLocaleString()}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

// Para cada categoría cuenta cuántos productos pertenecen a ella
for (const category of categories) {
  let count = 0;

  for (const item of products) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} producto(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

// Acumula el precio de todos los productos
let totalValue = 0;

for (const item of products) {
  totalValue += item.value;
}

// Calcula el precio promedio del catálogo
const averageValue = products.length > 0 ? totalValue / products.length : 0;

console.log(`Total ${valueLabel}: $${totalValue.toLocaleString()}`);
console.log(`Promedio ${valueLabel}: $${averageValue.toFixed(1)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

// Inicializa con el primer producto como referencia
let maxItem = products[0] ?? null;
let minItem = products[0] ?? null;

if (products.length > 0) {
  // Recorre y actualiza el producto más caro y el más barato
  for (const item of products) {
    if (item.value > maxItem.value) maxItem = item;
    if (item.value < minItem.value) minItem = item;
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} ($${maxItem?.value.toLocaleString()})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} ($${minItem?.value.toLocaleString()})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

// Genera reporte indicando si cada producto está sobre o bajo el promedio
for (let i = 0; i < products.length; i++) {
  const item = products[i];

  // Compara el precio del producto contra el promedio del catálogo
  const comparison = item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} ($${item.value.toLocaleString()}) — ${comparison}`);
}

console.log("");

// ============================================
// SECCIÓN 7: Búsqueda con while + break
// ============================================
console.log("=== BÚSQUEDA CON WHILE ===");

// Busca el primer suplemento disponible en el catálogo usando while + break
const targetCategory = "suplementos";
let searchIndex = 0;
let foundProduct = null;

while (searchIndex < products.length) {
  if (products[searchIndex].category === targetCategory) {
    foundProduct = products[searchIndex];
    break; // detiene la búsqueda al encontrar el primero
  }
  searchIndex++;
}

console.log(`Primer producto en categoría "${targetCategory}": ${foundProduct?.name ?? "No encontrado"}`);

console.log("");

// ============================================
// SECCIÓN 8: Filtro con for...of + continue
// ============================================
console.log("=== PRODUCTOS SOBRE $25.000 ===");

// Lista solo los productos con precio mayor a $25.000, saltando los demás con continue
for (const item of products) {
  if (item.value <= 25_000) continue; // omite productos económicos
  console.log(`✔ ${item.name} — $${item.value.toLocaleString()}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");