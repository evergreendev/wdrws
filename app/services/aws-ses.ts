"use server"
import * as AWS from "aws-sdk";
import * as nodeMailer from "nodemailer";

AWS.config.update({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    },
    region: "us-east-2",
});
AWS.config.getCredentials((err, credentials) => {
    if (err) {
        console.error(err.stack);
    }
});
const ses = new AWS.SES({apiVersion: "latest"});

const adminMail = "noreply@wdrws.org"/*todo Change this*/

const transporter = nodeMailer.createTransport({
    SES: ses
});

export const sendMembershipMail = async (prevState: any, formData: FormData) => {
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const address = formData.get("address");
    const pointOfContactPrimary = formData.get("point_of_contact-primary");
    const pointOfContactSecondary = formData.get("point_of_contact-secondary");
    const website = formData.get("website");
    const membership = formData.getAll("membership_choice");

    const membershipMap = membership.map((item:any) => {
        return (item as string).split("_").map(x => {
            return x.charAt(0).toUpperCase() + x.slice(1);
        }).join(" ");
    })

    console.log(membership);


    let error = "";

    if(!email){
        error += "Please enter a valid email address. ";
    }
    if(!firstName){
        error += "Please enter a valid first name. ";
    }
    if(!lastName){
        error += "Please enter a valid last name. ";
    }
    if(!phone){
        error += "Please enter a valid phone number. ";
    }
    if(!address){
        error += "Please enter an address.";
    }

    if (error){
        return {
            message:"",
            error:error
        }
    }

    try {
        await transporter.sendMail({
            from: adminMail,
            to: "Katie.LeClair@wdrws.org",
            replyTo: email as string,
            subject: `New Membership Request from ${firstName} ${lastName} (wdrws.org)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
<strong>Name:</strong> ${firstName} ${lastName} <br/>
${pointOfContactPrimary ? `<strong>Primary Point of Contact:</strong> ${pointOfContactPrimary} <br/>` : ""}
${pointOfContactSecondary ? `<strong>Secondary Point of Contact:</strong> ${pointOfContactSecondary} <br/>` : ""}
<strong>Email:</strong> ${email} <br/>
<strong>Phone:</strong> ${phone} <br/>
<strong>Address:</strong> ${address} <br/>
${website ? `<strong>Website:</strong> ${website}<br/>` : ""}
<strong>Membership Choice:</strong> ${membershipMap}
</p>
<p>

</p>
</div>
</div>
</body>
</html>
            `
        });
//confirmation email
        await transporter.sendMail({
            from: adminMail,
            to: email as string,
            replyTo: adminMail,
            subject: `Membership request confirmation (wdrws.org)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
<strong>Name:</strong> ${firstName} ${lastName} <br/>
${pointOfContactPrimary ? `<strong>Primary Point of Contact:</strong> ${pointOfContactPrimary} <br/>` : ""}
${pointOfContactSecondary ? `<strong>Secondary Point of Contact:</strong> ${pointOfContactSecondary} <br/>` : ""}
<strong>Email:</strong> ${email} <br/>
<strong>Phone:</strong> ${phone} <br/>
<strong>Address:</strong> ${address} <br/>
${website ? `<strong>Website:</strong> ${website}<br/>` : ""}
<strong>Membership Choice:</strong> ${membershipMap}
</p>
<p>

</p>
</div>
</div>
</body>
</html>
            `
        });

        return {
            message: "Your membership request has been sent. Thank you for your interest in joining Western Dakota Regional Water System.",
            error: ""
        }

    } catch (e) {
        console.error(e);
        return {error: "There was a problem sending your message please try again later.", msg: ""}
    }
}

export const sendMail = async (prevState: any, formData: FormData) => {
    const email = formData.get("email");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phone = formData.get("phone");
    const message = formData.get("message");
    let error = "";

    if(!email){
        error += "Please enter a valid email address. ";
    }
    if(!firstName){
        error += "Please enter a valid first name. ";
    }
    if(!lastName){
        error += "Please enter a valid last name. ";
    }
    if(!phone){
        error += "Please enter a valid phone number. ";
    }
    if(!message){
        error += "Please enter a message.";
    }

    if (error){
        return {
            message:"",
            error:error
        }
    }

    try {
        await transporter.sendMail({
            from: adminMail,
            to: "cheryl.chapman@wdrws.org",
            replyTo: email as string,
            subject: `New Contact form submission from ${firstName} ${lastName} (wdrws.org)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
Name: ${firstName} ${lastName} <br/>
Email: ${email} <br/>
Phone: ${phone} <br/>
</p>
<p>
${message}
</p>
</div>
</div>
</body>
</html>
            `
        });
//confirmation email
        await transporter.sendMail({
            from: adminMail,
            to: email as string,
            replyTo: adminMail,
            subject: `Contact form submission confirmation (wdrws.org)`,
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<p>
This is to acknowledge your recent contact form submission from (WDRWS.org)<br/>
Name: ${firstName} ${lastName} <br/>
Email: ${email} <br/>
Phone: ${phone} <br/>
</p>
<p>
${message}
</p>
</div>
</div>
</body>
</html>
            `
        });

        return {
            message: "Your contact submission has been sent. Thank you for contacting Western Dakota Regional Water System.",
            error: ""
        }

    } catch (e) {
        console.error(e);
        return {error: "There was a problem sending your message please try again later.", msg: ""}
    }


}

export const testMail = async (userEmail: string) => {
    try {
        const response = await transporter.sendMail({
            from: adminMail,
            to: userEmail,
            subject: "test",
            html: `
            <!DOCTYPE html >
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>test</title>
</head>
<body>
<div style="padding:20px;">
<div style="max-width: 500px;">
<h2>Test Mail</h2>
<p>
Hi there,<br/><br/>
This is a test mail.
</p>
</div>
</div>
</body>
</html>
            `
        });
        return response?.messageId;
    } catch (e) {
        console.error(e);
        return {ok: false, msg: "Failed to Send"}
    }
}