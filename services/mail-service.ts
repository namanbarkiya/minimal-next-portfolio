let nodemailer = require("nodemailer");

export async function sendMail(
    name: string,
    message: string,
    socialLink: string,
    email: string
) {
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PWD,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: "naman.barkiya02@gmail.com", // my email to recieve message
        subject: `Portfolio: ${name} sent you a message`,
        text: `message from ${name}: ${message}. Email: ${email}, Social Link: ${socialLink}`,
    };

    transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
            throw new Error(error);
        } else {
            console.log("Email Sent");
            return true;
        }
    });
}
