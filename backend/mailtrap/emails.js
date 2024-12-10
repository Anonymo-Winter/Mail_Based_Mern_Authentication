import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
    VERIFICATION_EMAIL_TEMPLATE,
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";
import { User } from "../models/user.model.js";
import { MailtrapClient } from "mailtrap";
export const sendVerificationEmail = async (email, verificationToken) => {
    const reciepent = [{ email }];
    try {
        const reponse = await mailtrapClient.send({
            from: sender,
            to: reciepent,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace(
                "verificationCode",
                verificationToken
            ),
            category: "Email Verification",
        });
        console.log("verification email sent successfully!", reponse);
    } catch (error) {
        console.log(
            "error occured while sending verification email",
            error.message
        );
        throw new Error("error sending mail");
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipients = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipients,
            template_uuid: "5be67701-2e97-403a-824e-eade2fc47e4c",
            template_variables: {
                company_info_name: "AnonymoWinter",
                name: name,
            },
        });
        console.log("Welcome email sent successfully!", response);
    } catch (error) {
        console.warn("Error sending welcome email", error.message);
        throw new Error("Error sending welcome email");
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipients = [{ email }];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipients,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("resetURL", resetURL),
            category: "Password reset",
        });
        console.log(response);
    } catch (error) {
        console.warn("Error sending password reset email", error.message);
        throw new Error("Error sending password reset email" + error.message);
    }
};

export const sendResetSuccessEmail = async (email) => {
    const reciepent = [{ email }];
    try {
        const result = await mailtrapClient.send({
            from: sender,
            to: reciepent,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Reset successfully",
        });
        console.log("Reset successful email sent successfully!", result);
    } catch (error) {
        console.log(
            "error occured while sending reset successful email" + error.message
        );
        throw new Error(error.message);
    }
};
