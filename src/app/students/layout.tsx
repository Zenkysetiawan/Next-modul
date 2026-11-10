export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2>Bagian Mahasiswa</h2>
      {children}
    </section>
  );
}
