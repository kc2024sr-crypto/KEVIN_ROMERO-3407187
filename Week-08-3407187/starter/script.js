// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Tienda de Productos Orgánicos y Naturales
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Tienda de Productos Orgánicos y Naturales";
const VALUE_LABEL = "productos";

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

// Catálogo inicial de productos orgánicos
const items = [
  { id: 1, name: "Aceite de coco orgánico",  category: "aceites",     price: 28_000, stock: 45, active: true  },
  { id: 2, name: "Granola natural",          category: "cereales",    price: 15_500, stock: 80, active: true  },
  { id: 3, name: "Proteína vegana vainilla", category: "suplementos", price: 65_000, stock: 20, active: true  },
  { id: 4, name: "Miel de abejas pura",      category: "endulzantes", price: 22_000, stock: 60, active: true  },
  { id: 5, name: "Avena orgánica integral",  category: "cereales",    price: 12_000, stock:  0, active: false },
  { id: 6, name: "Aceite de oliva extra",    category: "aceites",     price: 35_000, stock: 30, active: true  },
  { id: 7, name: "Stevia en polvo",          category: "endulzantes", price: 18_500, stock:  0, active: false },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  // Agrega el nuevo producto al final del catálogo
  items.push(newItem);
  console.log(`  ✔ Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  // Elimina y retorna el último producto del catálogo
  const removed = items.pop();
  console.log(`  ✔ Eliminado (último): ${removed.name}`);
  return removed;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  // Inserta el producto destacado al inicio del catálogo
  items.unshift(priorityItem);
  console.log(`  ✔ Producto destacado agregado al inicio: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  // Elimina un producto del catálogo por su posición
  const removed = items.splice(index, 1);
  console.log(`  ✔ Eliminado en posición ${index}: ${removed[0].name}`);
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  // Filtra y retorna solo los productos disponibles en tienda
  return items.filter((product) => product.active === true);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  // Retorna el primer producto cuyo nombre coincida exactamente
  return items.find((product) => product.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  // Muestra id, nombre, categoría, precio y estado del producto
  const status = item.active ? "✅ Disponible" : "❌ Agotado";
  return `[${item.id}] ${item.name} — ${item.category} — $${item.price.toLocaleString()} COP — Stock: ${item.stock} — ${status}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial del catálogo
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// Muestra cada producto con su información completa usando forEach
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// Agrega un nuevo suplemento al catálogo con push
addItem({ id: 8, name: "Proteína de cáñamo", category: "suplementos", price: 72_000, stock: 15, active: true });

// Agrega un producto destacado de la semana al inicio con unshift
addPriorityItem({ id: 0, name: "Cúrcuma orgánica en polvo", category: "especias", price: 19_000, stock: 50, active: true });

// Elimina el producto en posición 3 (producto del medio) con splice
removeByIndex(3);

// Elimina el último producto del catálogo con pop
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// Muestra el catálogo actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// Busca un producto específico por nombre con find
const found = findByName("Granola natural");
console.log(`  🔍 Búsqueda "Granola natural": ${found ? found.name + " — $" + found.price.toLocaleString() + " COP" : "No encontrado"}`);

// Filtra y muestra los productos disponibles con getActiveItems
const activeItems = getActiveItems();
console.log(`  📦 Productos disponibles: ${activeItems.length} de ${items.length}`);
activeItems.forEach((item) => console.log(`    • ${item.name}`));

// Crea un snapshot inmutable con spread sin modificar el array original
const snapshot = [...items, { id: 99, name: "Jengibre deshidratado", category: "especias", price: 14_000, stock: 40, active: true }];
console.log(`\n  📸 Snapshot (sin mutar items): ${snapshot.length} productos — items original: ${items.length}`);

console.log("\n--- Transformación con map ---\n");

// Crea un array con solo los nombres de los productos usando map
const productNames = items.map((item) => item.name);
console.log("  📝 Nombres del catálogo:");
productNames.forEach((name) => console.log(`    • ${name}`));

// Crea un array con precios reducidos al 10% para promoción usando map
const discountedPrices = items.map((item) => ({
  name: item.name,
  originalPrice: item.price,
  discountedPrice: Math.round(item.price * 0.90),
}));
console.log("\n  🏷️  Precios con 10% de descuento:");
discountedPrices.forEach((p) =>
  console.log(`    • ${p.name}: $${p.originalPrice.toLocaleString()} → $${p.discountedPrice.toLocaleString()} COP`)
);

console.log("\n--- Resumen final ---\n");
console.log(`  Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`  Disponibles: ${activeCount} | Agotados: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);