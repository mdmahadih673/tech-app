import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.BETTER_AUTH_MONGODB_URL);
const db = client.db("Tech-world");

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_URL,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET_URL
        }
    },
    database: mongodbAdapter(db, {
        client,
    }),
});