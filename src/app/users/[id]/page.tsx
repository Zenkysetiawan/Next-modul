import Link from "next/link";
import { notFound } from "next/navigation";
import type { User } from "@/types/user";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Gagal mengambil data pengguna");
  }

  const user: User = await response.json();

  return (
    <div>
      <Link href="/users">← Kembali</Link>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Perusahaan: {user.company.name}</p>
    </div>
  );
}
