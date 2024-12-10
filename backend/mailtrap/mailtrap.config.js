import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MAILTRAP_TOKEN) {
    console.error("MAILTRAP_TOKEN is not defined in environment variables.");
    process.exit(1); // Exit if the token is missing
}

export const mailtrapClient = new MailtrapClient({
    token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
    email: "hello@demomailtrap.com",
    name: "Tarun Sumanth",
};
