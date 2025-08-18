import { SendmailTransport } from "../sendMail.js";

export const bookVaccine = async (req, res) => {
    const { userEmail, vaccineName, bookingDate, deadline } = req.body;

    try {
        const bookingDetails = {
            userEmail,
            vaccineName,
            bookingDate,
            deadline,
        };
        await SendmailTransport(userEmail, vaccineName, 'Your vaccine booking details', deadline);
        res.status(200).json({ message: 'Vaccine booked successfully', bookingDetails });
    } catch (error) {
        console.error('Error booking vaccine:', error);
        res.status(500).json({ message: 'Error booking vaccine' });
    }
};
