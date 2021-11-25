import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.gatsbycapacitor",
  appName: "gatsby-starter-capacitor",
  bundledWebRuntime: false,
  webDir: "public",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
