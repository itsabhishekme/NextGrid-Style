import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.nextgridstyle.app",
  appName: "NextGrid Style",
  webDir: "out",

  server: {
    androidScheme: "https",
  },
};

export default config;