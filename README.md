# Kalimas Group - Management Control Dashboard

Dashboard React + Vite + Tailwind CSS v4 (TypeScript).

## Jalankan lokal

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build ke folder dist/
npm run preview    # pratinjau hasil build
npm run typecheck  # cek tipe TypeScript
```

## Deploy ke GitHub Pages

Workflow `.github/workflows/deploy.yml` otomatis membangun dan deploy ke GitHub Pages setiap push ke branch `main`.

1. Push kode ini ke repository GitHub Anda.
2. Buka **Settings → Pages**, set **Source** ke **GitHub Actions**.
3. Lihat proses deploy di tab **Actions**.
4. Situs tersedia di `https://<username>.github.io/<repo>/` — pastikan `base` di `vite.config.js` sesuai nama repo (saat ini `/dashbordoverview/`).
