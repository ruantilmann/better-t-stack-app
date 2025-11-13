import { betterAuth, type BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@my-better-t-app/db";

export const auth = betterAuth<BetterAuthOptions>({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || ""],
		emailAndPassword: {
			enabled: true,
		},
		github: {
			enabled: true,
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			syncUser: {
				email: true,
			},
		},
		google: {
			enabled: true,
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			syncUser: {
				email: true,
			},
		},
	});
