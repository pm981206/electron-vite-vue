import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  // 配置别名
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src"),
    },
  },
  plugins: [
    vue(),
    electron([
      {
        entry: "electron/main/index.ts",
      },
      {
        entry: "electron/preload/index.ts",
        onstart(options) {
          // 当 Preload-Scripts 构建完成时通知 Renderer-Process 重新加载页面，而不是重新启动整个 Electron App
          options.reload();
        },
      },
    ]),
    renderer(),
  ],
});
