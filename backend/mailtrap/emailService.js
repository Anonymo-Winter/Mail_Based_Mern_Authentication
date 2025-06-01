import { transporter, sender } from "./mailer.config.js";
import {
    VERIFICATION_EMAIL_TEMPLATE,
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("verificationCode", verificationToken),
        });
        if (process.env.MODE == "development") console.log("verification email sent successfully!", response);
    } catch (error) {
        if (process.env.MODE == "development") console.log("Failed to send verification email", error.message);
        throw new Error("Failed to send email");
    }
};

export const sendWelcomeEmail = async (email, name) => {
    try {
        const html = WELCOME_EMAIL_TEMPLATE.replace(/{{userName}}/g, name)
            .replace(/{{companyName}}/g, "AnonymoWinter")
            .replace(/{{companyEmail}}/g, "support@anonymowinter.com")
            .replace(/{{dashboardURL}}/g, "www.google.com")
            .replace(/{{year}}/g, new Date().getFullYear());
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: `Welcome to ${email.split("@")[0]}`,
            html,
        });
        if (process.env.MODE == "development") console.log("Welcome email sent successfully!", response);
    } catch (error) {
        if (process.env.MODE == "development") console.warn("Error sending welcome email", error.message);
        throw new Error("Error sending welcome email");
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("resetURL", resetURL),
        });
        if (process.env.MODE == "development") console.log(response);
    } catch (error) {
        if (process.env.MODE == "development") console.warn("Error sending password reset email", error.message);
        throw new Error("Error sending password reset email" + error.message);
    }
};

export const sendResetSuccessEmail = async (email) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });
        if (process.env.MODE == "development") console.log("Reset successful email sent successfully!", response);
    } catch (error) {
        if (process.env.MODE == "development")
            console.log("error occured while sending reset successful email" + error.message);
        throw new Error(error.message);
    }
};
