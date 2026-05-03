export const generateWhatsAppLink = (product: any) => {
  const phone = "+5493718462342";
  const text = `Hola! 👋 Quiero consultar por este llavero:

🧩 Producto: ${product.name}
🎨 Personalizable: ${product.customizable ? "Sí" : "No"}

¿Está disponible?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
