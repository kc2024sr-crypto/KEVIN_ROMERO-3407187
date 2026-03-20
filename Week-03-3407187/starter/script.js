// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

// const EXAMPLE_CONSTANT = 0; // TODO: Reemplazar con tus constantes

// Precios unitarios de productos orgánicos (COP)
const COCONUT_OIL_PRICE = 28_000;
const GRANOLA_PRICE = 15_500;
const VEGAN_PROTEIN_PRICE = 65_000;
// Capacidad máxima de bodega por producto
const MAX_STOCK = 200;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// Ejemplo con dominio Planetario (NO copiar):
// const ticketPrice = 12_000;
// const attendees = 38;
// const totalRevenue = ticketPrice * attendees;
// console.log("Ingresos función:", totalRevenue);
// const remainingSeats = 45 - attendees;
// console.log("Asientos disponibles:", remainingSeats);

// Unidades vendidas en el pedido del día
const coconutOilUnits = 12;
const granolaUnits = 30;

// Total de venta: suma de subtotales por producto (+ y *)
const totalSale = COCONUT_OIL_PRICE * coconutOilUnits + GRANOLA_PRICE * granolaUnits;
console.log("Total venta del día:", totalSale);

// Stock restante después del pedido (-)
const remainingStock = MAX_STOCK - coconutOilUnits;
console.log("Stock restante aceite de coco:", remainingStock);

// Precio promedio de los tres productos (/)
const averagePrice = (COCONUT_OIL_PRICE + GRANOLA_PRICE + VEGAN_PROTEIN_PRICE) / 3;
console.log("Precio promedio de productos:", averagePrice.toFixed(0));

// Descuento del 10% sobre el total (*)
const discountAmount = totalSale * 0.10;
console.log("Valor del descuento (10%):", discountAmount);

// Unidades sobrantes al empacar en cajas de 8 (%)
const packagingRemainder = granolaUnits % 8;
console.log("Unidades sobrantes al empacar:", packagingRemainder);

// Capacidad de almacenamiento al cuadrado (**)
const storageCapacity = MAX_STOCK ** 2;
console.log("Capacidad total al cuadrado (**):", storageCapacity);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// Ejemplo (NO copiar):
// let runningTotal = 0;
// runningTotal += 25_000;
// console.log("Tras primer item:", runningTotal);
// runningTotal += 18_000;
// console.log("Tras segundo item:", runningTotal);
// runningTotal *= 0.90; // descuento del 10%
// console.log("Con descuento:", runningTotal);

// Acumulado del carrito de compra
let cartTotal = 0;
console.log("Carrito inicial:", cartTotal);

// Agregar aceite de coco al carrito (+=)
cartTotal += COCONUT_OIL_PRICE * coconutOilUnits;
console.log("Tras agregar aceite de coco:", cartTotal);

// Agregar granola al carrito (+=)
cartTotal += GRANOLA_PRICE * granolaUnits;
console.log("Tras agregar granola:", cartTotal);

// Aplicar cupón de bienvenida de $5.000 (-=)
cartTotal -= 5_000;
console.log("Tras aplicar cupón de $5.000:", cartTotal);

// Aplicar descuento mayorista del 10% (*=)
cartTotal *= 0.90;
console.log("Tras descuento del 10%:", cartTotal);

// Convertir a precio base sin IVA (/=)
cartTotal /= 1.19;
console.log("Precio base sin IVA:", cartTotal.toFixed(0));

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
// const daysLate = 5;
// const isOnTime = daysLate === 0;
// console.log("¿Entregado a tiempo?", isOnTime);
// const hasFine = daysLate > 0;
// console.log("¿Tiene multa?", hasFine);

// Verificar si el método de pago es transferencia (===)
const paymentMethod = "transferencia";
const isDigitalPayment = paymentMethod === "transferencia";
console.log("¿Pago por transferencia?", isDigitalPayment);

// Verificar si el stock llegó exactamente al mínimo de alerta (===)
const alertLevel = 20;
const isAtAlertLevel = remainingStock === alertLevel;
console.log("¿Stock exactamente en nivel de alerta?", isAtAlertLevel);

// Verificar que el descuento aplicado no sea cero (!==)
const isDiscountApplied = discountAmount !== 0;
console.log("¿Se aplicó algún descuento?", isDiscountApplied);

// Verificar si el producto más barato no es la proteína (!==)
const cheapestIsNotProtein = VEGAN_PROTEIN_PRICE !== Math.min(COCONUT_OIL_PRICE, GRANOLA_PRICE, VEGAN_PROTEIN_PRICE);
console.log("¿La proteína no es el más barato?", cheapestIsNotProtein);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

// Ejemplo (NO copiar):
// const isMember = true;
// const purchaseAmount = 150_000;
// const qualifiesForDiscount = isMember && purchaseAmount >= 100_000;
// console.log("¿Descuento aplicable?", qualifiesForDiscount);

// Cliente frecuente Y compra supera $500.000 para envío gratis (&&)
const isFrequentCustomer = true;
const qualifiesFreeShipping = isFrequentCustomer && totalSale >= 500_000;
console.log("¿Envío gratis?", qualifiesFreeShipping);

// Acepta pago en efectivo O por transferencia (||)
const acceptsCash = false;
const acceptsTransfer = true;
const hasPaymentOption = acceptsCash || acceptsTransfer;
console.log("¿Tiene opción de pago disponible?", hasPaymentOption);

// Producto NO está agotado (!)
const isOutOfStock = false;
console.log("¿Disponible para venta?", !isOutOfStock);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("Total bruto de la venta:", totalSale);
console.log("Total del carrito con descuentos:", cartTotal.toFixed(0));
console.log("Stock restante aceite de coco:", remainingStock);
console.log("¿Pago por transferencia?", isDigitalPayment);
console.log("¿Se aplicó descuento?", isDiscountApplied);
console.log("¿Envío gratis?", qualifiesFreeShipping);
console.log("¿Producto disponible?", !isOutOfStock);

console.log("");