import Link from "next/link";
import { students } from "@/data/students";
import StudentSearch from "@/components/StudentSearch";

export default function StudentsPage() {
  return <StudentSearch students={students} />;
}
