import Link from "next/link";

export default function UserNotFound() {
  return (
    <div>
      <h2>Pengguna tidak ditemukan</h2>
      <Link href="/>users">← Kembali ke daftar</Link>
    </div>
  );
}
