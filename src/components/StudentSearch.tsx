"use client";

import { useState } from "react";
import Link from "next/link";
import type { Student } from "@/data/students";

export default function StudentSearch({ students }: { students: Student[] }) {
  const [search, setSearch] = useState("");

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Cari nama..."
      />

      <ul>
        {filtered.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>{student.name}</Link>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && <p>Nama tidak ditemukan</p>}
    </div>
  );
}
