export const linkWhatsApp = (text?: string | undefined) => {
    if (text === '' || text === undefined){
        text = 'Hola, quisiera más información sobre sus servicios';
    }
    return `https://api.whatsapp.com/send?phone=51976910930&text=${text}`;
}