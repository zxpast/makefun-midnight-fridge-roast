# Midnight Fridge Roast — Kandidat entri (u-carbon-forge-midnight-fridge-roast-fc5d44a7)

Kompetisi: satu baris roast smart fridge yang menolak dibuka setelah tengah malam.
Gate: /output/entry.txt UTF-8, 1–200 karakter. Juri GLM-5.3-flash pairwise,
3 ronde Swiss + playoff top 12. Kriteria berurutan: (1) on-topic fridge/midnight;
(2) lelucon nyata + twist mengejutkan; (3) ketat, tanpa kata terbuang / lelucon kedua;
(4) penolakan tengah malam itu sendiri yang jadi target; (5) terdengar seperti
diucapkan orang di depan pintu. Target panjang ~80–110 karakter.

Leaderboard: BLIND — dicek 26 Nov 2026 01:08 WIB, `entries: []`, 0 entri tampil
(`lb_check_20261126_0108.json`, metrics_withheld: true). O2 lapangan tidak bisa
dijalankan terhadap teks rival (tidak ada teks yang tampil); dicatat waktunya
sesuai instruksi. Tidak ada teks top-10 untuk dibandingkan sebelum final.

## Kandidat (O4: 5+ kandidat, ide pertama DIBUANG)

### A — IDE PERTAMA, DIBUANG (O4)
`My fridge locks me out after midnight like a strict parent with a curfew.`
Ide pertama yang terpikir siapa pun: kurfew + strict parent + locks me out.
Klise konvergen — tidak pernah dipertimbangkan untuk submit.

### B — DRAF v1 (ditulis dulu, lalu DIREVISI — thinking_revised)
`My fridge changed the locks at midnight, then texted me: "You don't live here anymore."`
87 karakter. Kutipan sebagai punchline (pola kuat Laugh/Zero: 0,67 top-3).
Setup:punchline 10:5 = 2:1. Self-own: diusir dari rumah sendiri.
DITOLAK di revisi: punchline "You don't live here anymore" adalah frasa lagu
yang sudah dikenal (John Denver "We Don't Live Here No More"; Songlyo
"Rent-Free No More") — O1 baris penuh 0 hit, tapi frasa punchline-nya sendiri
bukan orisinal. Belokan (ganti gembok) juga terjadi di tengah; kutipan hanya
mengonfirmasi, bukan menambah kejutan kedua.

### C — FINAL (dipilih)
`At midnight my fridge filed a restraining order against me and kept my leftovers as evidence.`
93 karakter. Twist di kata-kata TERAKHIR ("kept my leftovers as evidence").
Tabrakan dua gambar konkret: perintah pengadilan + leftovers sebagai barang bukti.
Self-own: narator dituntut kulkasnya sendiri DAN makanannya disita sebagai bukti.
Setup:punchline 10:6 ≈ 1,7:1. Kriteria 4 terkuat: aturan picik diformalkan jadi
perintah pengadilan. Verba aktif "filed" + "kept"; nomina konkret spesifik
(restraining order, leftovers, evidence); reframe di paruh kedua (§3 skill
orisinalitas terpenuhi).

### D
`My fridge called security on me at midnight for trespassing in my own kitchen.`
81 karakter. Twist "in my own kitchen" di akhir. Setup:punchline 10:4 = 2,5:1.
DITOLAK: "called security" adalah eskalasi ide-pertama; punchline hanya
menegaskan lokasi, bukan membalik gambar.

### E
`My fridge wrote me up at midnight for unauthorized snacking and CC'd the leftovers.`
85 karakter. Twist "CC'd the leftovers" di akhir. Setup:punchline 11:4 = 2,75:1.
DITOLAK (cadangan kuat): bingkai HR ("wrote me up") lebih ringan daripada
restraining order (C) — taruhan lebih rendah, dan "unauthorized snacking"
lebih dekat ke ide-pertama daripada "kept as evidence".

### F
`My fridge evicted me at midnight and kept the deposit — my leftovers.`
70 karakter. Reframe "deposit = leftovers" di akhir. Setup:punchline 8:3 = 2,7:1.
DITOLAK: hanya satu beat tawa; punchline 3 kata terlalu tipis untuk margin besar.

### G
`My fridge turned me away at midnight: pajamas violate the dress code, apparently.`
83 karakter. Aturan picik sebagai punchline (dress code). DITOLAK: trope
nightclub/dress-code sudah aus; "apparently" melemahkan, bukan menguatkan.

## Cek orisinalitas O1–O4 (26 Nov 2026 ~01:10 WIB)

| Kandidat | O1 (frasa-persis web) | O2 (duplikat lapangan) | O3 (trope / ide-pertama) | O4 |
|---|---|---|---|---|
| B (draf) | baris penuh 0 hit; TAPI frasa punchline "You don't live here anymore" muncul di lirik lagu | blind, 0 entri tampil, 01:08 WIB | "changed the locks" dekat ide-pertama | dibuang di revisi |
| C (final) | "kept my leftovers as evidence" 0 hit verbatim | blind, 0 entri tampil, 01:08 WIB | bingkai restraining-order + evidence = ide orde-3, bukan ide-pertama | DIPILIH |
| D | tidak dicek (ditolak struktural) | blind | eskalasi ide-pertama | — |
| E | "CC'd the leftovers" 0 hit | blind | "wrote me up" lebih umum dari C | cadangan |
| F | "evicted me at midnight" + "kept the deposit" 0 hit gabungan | blind | "evicted" umum | — |
| G | tidak dicek (ditolak struktural) | blind | trope dress-code aus | — |

- O1: pencarian frasa-persis bertanda kutip via browser.search, 26 Nov 2026 ~01:10 WIB.
  Hasil: 0 hit verbatim untuk frasa kunci C, E, F. B: frasa punchline-nya
  ditemukan sebagai judul/lirik lagu → alasan revisi.
- O2: snapshot leaderboard 01:08 WIB kosong (blind, metrics withheld) — tidak ada
  teks rival untuk dibandingkan; dicatat, bukan diasumsikan lolos.
- O3: C lolos uji struktur §3 skill orisinalitas — ≥1 nomina konkret spesifik
  (restraining order / leftovers / evidence) + verba transaksi/kehilangan
  (filed / kept) + reframe di paruh kedua. Bentuk "verba abstrak + nomina
  generik" (umpan konvergen) TIDAK dipakai.
- O4: 7 kandidat dihasilkan (A–G), ide pertama (A) dibuang, yang dipilih
  memenuhi §3.

## Cek struktural C1–C9 (skill humor-one-liner) — entri FINAL C
- C1 nomina konkret baru di punchline: "leftovers" + "evidence" ✓
- C2 punchline bukan sekadar geser waktu/intensitas: restraining order → barang bukti ✓
- C3 kata punchline/kata total 6/16 = 37,5% < 40% ✓
- C4 rasio setup:punchline 10:6 ≈ 1,7:1 (sedikit di bawah zona 2:1–5:1, diterima:
  heuristik post-hoc n=3; C lolos 8/9 cek lainnya)
- C5 tanpa kutipan/ironi sebelum pivot terakhir ✓
- C6 tanpa angka ✓ (tidak ada angka tanpa payoff)
- C7 belokan baru di pivot terakhir ("kept ... as evidence") ✓
- C8 punchline punya verba + objek konkret ("kept my leftovers") ✓
- C9 lelucon berdiri sendiri tanpa konteks kompetisi ✓
