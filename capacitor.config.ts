import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nextgrid.app",

  appName: "NextGrid",

  webDir: "out",

  android: {
    backgroundColor: "#000000",
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#000000",
      showSpinner: false,
    },

    StatusBar: {
      style: "DARK",
      backgroundColor: "#000000",
    },

    Keyboard: {
      resize: "body",
      resizeOnFullScreen: true,
    },
  },
};

export default config;