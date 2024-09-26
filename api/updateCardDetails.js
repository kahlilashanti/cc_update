// export default function handler(req, res) {
//     if (req.method === 'POST') {
//         const { cardNumber, cardExpiry, cardCVC } = req.body;

//         // Simulate updating card details for Netflix, Amazon, and DAZN
//         console.log(`Updating Netflix with card: ${cardNumber}`);
//         console.log(`Updating Amazon with card: ${cardNumber}`);
//         console.log(`Updating DAZN with card: ${cardNumber}`);

//         // Send response back
//         res.status(200).json({ message: 'Simulated update for Netflix, Amazon, and DAZN.' });
//     } else {
//         res.status(405).json({ message: 'Only POST requests are allowed' });
//     }
// }



export default function handler(req, res) {
    if (req.method === 'POST') {
        const { cardNumber, cardExpiry, cardCVC } = req.body;

        // Log the card details to the console
        console.log(`Updating Netflix with card: ${cardNumber}`);
        console.log(`Updating Amazon with card: ${cardNumber}`);
        console.log(`Updating DAZN with card: ${cardNumber}`);

        // Simulate logging card information
        console.log(`Card Number: ${cardNumber}`);
        console.log(`Card Expiry: ${cardExpiry}`);
        console.log(`Card CVC: ${cardCVC}`);

        // Send back a JSON response
        res.status(200).json({ message: 'Simulated update for Netflix, Amazon, and DAZN.' });
    } else {
        console.log('Only POST requests are allowed');
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}

