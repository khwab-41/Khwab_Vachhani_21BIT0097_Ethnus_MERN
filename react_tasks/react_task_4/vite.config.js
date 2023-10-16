import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const baseUrl =
    mode == "production"
      ? `https://khwab-41.github.io/Khwab_Vachhani_21BIT0097_Ethnus_MERN/react_tasks/react_task_4/dist/`
      : "/";
  return defineConfig({
    base: baseUrl,
    plugins: [react()],
  });
};