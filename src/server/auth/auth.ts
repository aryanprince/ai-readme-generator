import { betterAuth } from "better-auth";

export const auth = betterAuth({
  appName: "ai-readme-generator",
  plugins: [],
  emailAndPassword: {
    enabled: true,
  },
});
