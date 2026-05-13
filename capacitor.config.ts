import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nextgrid.app",

  appName: "NextGrid Style",

  webDir: "out",

  server: {
    androidScheme: "https",
  },

  android: {
    backgroundColor: "#000000",

    allowMixedContent: true,

    captureInput: true,
  },

  ios: {
    contentInset: "automatic",

    backgroundColor: "#000000",
  },

  plugins: {
    SplashScreen: {

      // Native splash duration
      launchShowDuration: 2500,

      // Auto hide splash
      launchAutoHide: true,

      // Disable spinner
      showSpinner: false,

      // Smooth fade
      fadeSplashScreen: true,

      fadeSplashScreenDuration: 500,

      // Background
      backgroundColor: "#000000",

      // Android scaling
      androidScaleType: "CENTER_CROP",

      // Fullscreen splash
      splashFullScreen: true,

      // Immersive mode
      splashImmersive: true,
    },

    StatusBar: {
      style: "DARK",

      backgroundColor: "#000000",

      overlaysWebView: false,
    },

    Keyboard: {
      resize: "body",

      resizeOnFullScreen: true,
    },
  },
};

export default config;