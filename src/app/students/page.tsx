import Link from "next/link";
import { students } from "@/data/students";

export default function StudentsPage() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <Link href={`/students/${student.id}`}>{student.name}</Link>
        </li>
      ))}
    </ul>
  );
}
