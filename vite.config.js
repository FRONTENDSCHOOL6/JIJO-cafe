// import * as path from 'node:path'
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import {env} from "node:process";
import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import imageminGifSicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngQuant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import jsconfigPath from "vite-jsconfig-paths";
import {createHtmlPlugin} from "vite-plugin-html";
import {loadEnv} from "vite";
import viteCompression from "vite-plugin-compression";
import {visualizer} from "rollup-plugin-visualizer";
const isDev = env.NODE_ENV === "development";
const envLoad = loadEnv(isDev, process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    jsconfigPath(),
    // 이미지 최적화 플러그인 구성
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
        png: imageminPngQuant(),
        gif: imageminGifSicle(),
        svg: imageminSvgo(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
          png: imageminWebp(),
        },
      },
    }),
    // HTML 플러그인 구성
    createHtmlPlugin({
      minify: !isDev,
      inject: {
        data: {
          kakaoJsKey: envLoad.VITE_KAKAO_JS_KEY,
        },
      },
    }),
    viteCompression(),
  ],

  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev
        ? "[name]_[local]__[hash:base64:5]"
        : "[hash:base64:4]",
    },
  },

  // 빌드 시, 청크 파일 생성 매뉴얼 구성
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true,
        }),
      ],
      output: {
        manualChunks: {
          react: ["react", "react-dom", "zustand", "@tanstack/react-query"],
          reactRouter: ["react-router-dom"],
          animations: ["framer-motion", "gsap", "aos"],
          swiperBundle: ["swiper"],
        },
      },
    },
  },
});
