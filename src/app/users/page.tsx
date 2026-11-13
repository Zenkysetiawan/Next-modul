import Link from "next/link";
import type { User } from "@/types/user";
import { resolve } from "path";

export default async function UsersPage() {
  // SEMENTARA: bikin lambat 2 detik supaya loading.tsx kelihatan. Hapus nanti.
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("gagal mengambil data pengguna");
  }

  const users: User[] = await response.json();

  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
