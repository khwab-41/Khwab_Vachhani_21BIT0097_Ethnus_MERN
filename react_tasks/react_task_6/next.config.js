/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {},
  assetPrefix:
    process.env.NODE_ENV == "production"
      ? `https://khwab-41.github.io/Khwab_Vachhani_21BIT0097_Ethnus_MERN/react_tasks/react_task_6/out/`
      : "/",
};

module.exports = nextConfig;
