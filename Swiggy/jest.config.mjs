import { createRequire } from "module";
const require = createRequire(import.meta.url);

export default {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/(?!swiper|ssr-window|dom7)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
