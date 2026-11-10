import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";

export default async function StudentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    notFound();
  }

  return (
    <div>
      <Link href="/students">← Kembali</Link>
      <h3>{student.name}</h3>
      <p>Jurusan: {student.major}</p>
      <p>Semester: {student.semester}</p>
    </div>
  );
}
