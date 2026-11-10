export interface Student {
  id: number;
  name: string;
  major: string;
  semester: number;
}

export const students: Student[] = [
  { id: 1, name: "Budi", major: "Hukum", semester: 3 },
  { id: 2, name: "Sari", major: "Sastra", semester: 5 },
  { id: 3, name: "Andi", major: "Informatika", semester: 1 },
  { id: 4, name: "Zenky", major: "Informatika", semester: 5 },
];
