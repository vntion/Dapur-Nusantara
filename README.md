# 🍳 Dapur Nusantara

Selamat datang di Dapur Nusantara! Ini adalah proyek *front-end* website yang menyajikan berbagai resep masakan khas Indonesia. Proyek ini dibangun sebagai *Single Page Application* (SPA) modern yang cepat dan responsif.

**[✨ Kunjungi Live Demo di Sini ✨](https://dapurnusantara.surge.sh)**

---

## 📸 Tampilan

*(Disarankan untuk mengambil screenshot dari demo live Anda dan menaruhnya di sini. Anda bisa meng-upload gambar ke "Issue" di GitHub untuk mendapatkan link gambar, lalu tempelkan di sini)*

![Contoh Tampilan Dapur Nusantara](URL_GAMBAR_SCREENSHOT_ANDA)

---

## 🚀 Fitur Utama

* **Pencarian Resep:** Fitur pencarian untuk menemukan resep yang diinginkan dengan cepat.
* **Navigasi Halaman:** Berpindah antar halaman (Home, Detail, Kategori) secara instan tanpa *reload* halaman, berkat React Router.
* **Desain Responsif:** Tampilan website yang adaptif dan terlihat baik di perangkat desktop maupun mobile, dibangun dengan Tailwind CSS.
* **Halaman Detail:** Halaman khusus untuk melihat detail, bahan, dan cara membuat setiap resep.
* **Halaman Kategori:** Mengelompokkan resep berdasarkan kategori masakan.

---

## 💻 Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi web modern:

* **[Vite](https://vitejs.dev/)**: Sebagai *build tool* dan *development server* yang super cepat.
* **[React.js](https://reactjs.org/)**: Library JavaScript untuk membangun *user interface*.
* **[Tailwind CSS](https://tailwindcss.com/)**: *Utility-first CSS framework* untuk *styling* yang cepat dan kustom.
* **[React Router DOM](https://reactrouter.com/)**: Untuk menangani *client-side routing* (navigasi SPA).
* **[React Icons](https://react-icons.github.io/react-icons/)**: Untuk menyertakan ikon-ikon populer dengan mudah.
* **[ESLint](https://eslint.org/)**: Untuk menjaga kualitas dan konsistensi kode.

---

## 🛠️ Cara Menjalankan Proyek Secara Lokal

Jika Anda ingin menjalankan proyek ini di komputer Anda:

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/vntion/Dapur-Nusantara.git](https://github.com/vntion/Dapur-Nusantara.git)
    ```

2.  **Masuk ke direktori proyek:**
    ```bash
    cd Dapur-Nusantara
    ```

3.  **Install semua *dependencies* yang dibutuhkan:**
    (Gunakan `npm install` atau `yarn install`)
    ```bash
    npm install
    ```

4.  **Jalankan *development server*:**
    ```bash
    npm run dev
    ```

5.  Buka browser Anda dan kunjungi `http://localhost:5173` (atau alamat lain yang muncul di terminal Anda).

---

## 🚀 Deploy

Proyek ini dapat di-deploy sebagai situs statis di *hosting* mana pun.

1.  **Build proyek untuk produksi:**
    ```bash
    npm run build
    ```
    Perintah ini akan membuat folder `dist` yang berisi semua file statis (HTML, CSS, JS).

2.  **Deploy ke Surge (seperti demo live):**
    ```bash
    surge dist dapurnusantara.surge.sh
    ```
    *(Pastikan Anda sudah menginstal Surge secara global: `npm install -g surge`)*
