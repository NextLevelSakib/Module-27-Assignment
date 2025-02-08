import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api/':{  //Api File Name
        target:"http://localhost:5050"  //BackEnd Port With Address
      }
    }
  }
})
