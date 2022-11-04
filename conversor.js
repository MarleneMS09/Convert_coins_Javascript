const coinConvert = (dollars) => {
  //primero vamos a crear constantes que tengan las equivalencias del dolar.
 
   // 3.25 solesPeruanos es igual a un dolar:
 
   // Asigna el monto equivalente en soles
   const soles = 3.25;
 
   // 18 pesosMexicanos es igual a un dolar:
 
   // Asigna el monto equivalente en pesos mexicanos
   const pesosMexicanos = 18;
 
   //660 pesosChilenos es igual a un dolar:
 
   // Asigna el monto equivalente en pesos chilenos
   const pesosChilenos = 660;
 
   //Ahora haremos el cálculo para convertirlo a equivalencia de
   // solesPeruanos, pesosMexicanos, pesosChilenos *numero de dolares
 
   let dollarsAsoles = [];
   dollarsAsoles.push(soles * dollars);
 
   let dollarsApesosMexicanos = [];
   dollarsApesosMexicanos.push(pesosMexicanos * dollars);
 
   let dollarsApesosChilenos = [];
   dollarsApesosChilenos.push(pesosChilenos * dollars);
 
   return [...dollarsAsoles, ...dollarsApesosMexicanos, ...dollarsApesosChilenos];
 };
 
 module.exports = coinConvert;
 
 



