const students = [
  { id: 1, name: "Budi", major: "Hukum" },
  { id: 2, name: "Sari", major: "Sastra" },
  { id: 3, name: "Andi", major: "Informatika" },
];

export default function StudentsPage() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.major}
        </li>
      ))}
    </ul>
  );
}
