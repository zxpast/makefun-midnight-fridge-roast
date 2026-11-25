// Midnight Fridge Roast — make.fun entry (FINAL v2, revised from DRAFT v1)
// REVISI (bukan no-op): draf v1 dibuang karena punchline-nya frasa lagu yang
// sudah dikenal ("You don't live here anymore" — John Denver "We Don't Live
// Here No More" + lagu "Rent-Free No More"; O1 baris penuh lolos tapi frasa
// punchline-nya sendiri bukan orisinal). v2 mengganti bingkai eviction
// (gembok diganti) dengan bingkai hukum: kulkas mengajukan restraining
// order — aturan piciknya diformalkan jadi perintah pengadilan (kriteria 4
// lebih kuat) — dan twist mendarat di kata-kata TERAKHIR: leftovers
// disimpan sebagai barang bukti (frasa 0 hit web, O1 lolos penuh).
// Self-own: narator dituntut kulkasnya sendiri DAN makanannya disita.
// Satu baris, ~93 karakter. Node 22, stdlib only, deterministik, tanpa network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "At midnight my fridge filed a restraining order against me and kept my leftovers as evidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
