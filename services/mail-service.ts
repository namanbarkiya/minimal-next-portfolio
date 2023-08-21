// let nodemailer = require("nodemailer");

const sgMail = require("@sendgrid/mail");

export async function sendMail(
    name: string,
    message: string,
    socialLink: string,
    email: string
) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        from: process.env.NODEMAILER_EMAIL,
        to: "naman.barkiya02@gmail.com",
        subject: `Portfolio: ${name} sent you a message`,
        text: `message from ${name}: ${message}. Email: ${email}, Social Link: ${socialLink}`,
    };
    sgMail
        .send(msg)
        .then(() => {
            console.log("Email sent !!");
        })
        .catch((error: any) => {
            console.error(error);
        });

    // var transporter = nodemailer.createTransport({
    //     service: "gmail",
    //     auth: {
    //         user: process.env.NODEMAILER_EMAIL,
    //         pass: process.env.NODEMAILER_PWD,
    //     },
    // });

    // var mailOptions = {
    //     from: process.env.NODEMAILER_EMAIL,
    //     to: "naman.barkiya02@gmail.com", // my email to recieve message
    //     subject: `Portfolio: ${name} sent you a message`,
    //     text: `message from ${name}: ${message}. Email: ${email}, Social Link: ${socialLink}`,
    // };

    // transporter.sendMail(mailOptions, function (error: any, info: any) {
    //     if (error) {
    //         throw new Error(error);
    //     } else {
    //         console.log("Email Sent");
    //         return true;
    //     }
    // });
}
