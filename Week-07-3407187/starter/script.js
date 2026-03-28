// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Tienda de Productos Orgánicos y Naturales
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict"; // activa el modo estricto — mejores errores

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";

// Constantes globales de la tienda orgánica
const DOMAIN_NAME = "Tienda de Productos Orgánicos y Naturales";
const VALUE_LABEL = "precio"; // etiqueta del valor numérico del dominio
const CURRENCY = "COP";       // moneda de la tienda
const DISCOUNT_RATE = 0.10;   // descuento estándar para clientes frecuentes

// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
// const items = [
//   { id: 1, name: "El Quijote",  category: "clásico",    value: 15,  active: true },
//   { id: 2, name: "1984",        category: "distopía",   value: 12,  active: true },
//   ...
// ];

// Catálogo de productos orgánicos con id, nombre, categoría, precio y disponibilidad
const products = [
  { id: 1, name: "Aceite de coco orgánico",  category: "aceites",     value: 28_000, active: true  },
  { id: 2, name: "Granola natural",          category: "cereales",    value: 15_500, active: true  },
  { id: 3, name: "Proteína vegana vainilla", category: "suplementos", value: 65_000, active: true  },
  { id: 4, name: "Miel de abejas pura",      category: "endulzantes", value: 22_000, active: true  },
  { id: 5, name: "Avena orgánica integral",  category: "cereales",    value: 12_000, active: false },
  { id: 6, name: "Aceite de oliva extra",    category: "aceites",     value: 35_000, active: true  },
  { id: 7, name: "Stevia en polvo",          category: "endulzantes", value: 18_500, active: false },
  { id: 8, name: "Proteína de cáñamo",       category: "suplementos", value: 72_000, active: true  },
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

// TODO: Implementa una arrow function que reciba un elemento
// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

// Formatea un producto para mostrar en el reporte de consola
const formatProduct = (product) =>
  `🌿 ${product.name} [${product.category}] — $${product.value.toLocaleString()} ${CURRENCY} — ${product.active ? "Disponible" : "Agotado"}`;

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

// Calcula el total de una compra aplicando cantidad y porcentaje de descuento
const calculateTotal = (price, quantity, discountPct = 0) =>
  +(price * quantity * (1 - discountPct / 100)).toFixed(0);

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

// Verifica si un producto está disponible para la venta
const isAvailable = (product) => product.active === true;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

// TODO: Implementa una función que use al menos un parámetro
// por defecto significativo para tu dominio.
//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;

// Formatea el precio de un producto con moneda y descuento opcionales
const formatWithDefault = (value, label = VALUE_LABEL, currency = CURRENCY) =>
  `${label}: $${value.toLocaleString()} ${currency}`;

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (products.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado: usa formatProduct como función de formato ---
  console.log("\n📋 Listado de productos:");
  let lineNumber = 1;
  for (const product of products) {
    // formatProduct actúa como callback de formato para cada elemento
    console.log(`  ${lineNumber}. ${formatProduct(product)}`);
    lineNumber++;
  }

  // --- Validación: cuenta productos disponibles con isAvailable ---
  let validCount = 0;
  for (const product of products) {
    if (isAvailable(product)) validCount++;
  }
  console.log(`\n✅ Productos disponibles: ${validCount} / ${products.length}`);

  // --- Cálculo: total del catálogo usando calculateTotal ---
  let totalValue = 0;
  for (const product of products) {
    // calcula el valor unitario sin descuento para el total del catálogo
    totalValue += calculateTotal(product.value, 1);
  }
  console.log(formatWithDefault(totalValue, `Total catálogo`));

  // --- Ejemplo de cálculo con descuento para cliente frecuente ---
  const exampleProduct = products[0];
  const totalWithDiscount = calculateTotal(exampleProduct.value, 3, DISCOUNT_RATE * 100);
  console.log(`\n🛒 Ejemplo de compra — ${exampleProduct.name} x3 con 10% descuento:`);
  console.log(`   ${formatWithDefault(totalWithDiscount, "Total a pagar")}`);
}

console.log(`\n${"═".repeat(45)}\n`);