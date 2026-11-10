import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      {" | "}
      <Link href="/about">About</Link>
      {" | "}
      <Link href="/students">Students</Link>
      {" | "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
