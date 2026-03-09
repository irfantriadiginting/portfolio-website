/**
 * useScrollReveal — Composable untuk scroll reveal animation
 * 
 * Composable adalah fungsi reusable di Vue 3 (Composition API).
 * Daripada copy-paste logika yang sama di setiap komponen,
 * kita buat sekali di sini dan import di mana pun dibutuhkan.
 * 
 * Cara kerja:
 * 1. Cari semua elemen yang punya class "reveal"
 * 2. Pasang IntersectionObserver pada tiap elemen
 * 3. Saat elemen masuk viewport, tambahkan class "visible"
 * 4. Class "visible" memicu animasi CSS (lihat style.css)
 */
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
    let observer = null

    onMounted(() => {
        // IntersectionObserver: browser API yang mendeteksi elemen masuk/keluar viewport
        // tanpa perlu event listener scroll yang boros performa
        observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Elemen masuk viewport → tambahkan class "visible" → animasi jalan
                        entry.target.classList.add('visible')
                        // Setelah animasi sekali, berhenti mengobservasi elemen ini
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                // threshold: 0.15 → animasi mulai saat 15% elemen sudah terlihat
                threshold: 0.15,
                // rootMargin: sedikit margin agar animasi tidak terlalu terlambat
                rootMargin: '0px 0px -50px 0px',
            }
        )

        // Cari semua elemen dengan class "reveal" dan observasi tiap satunya
        // nextTick-like: setTimeout 0 agar DOM sudah siap
        setTimeout(() => {
            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el)
            })
        }, 0)
    })

    onUnmounted(() => {
        // Cleanup: hentikan observer saat komponen dihapus agar tidak memory leak
        if (observer) observer.disconnect()
    })
}
