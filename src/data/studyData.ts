export interface StudySession {
  date: string;
  startTime: string;
  endTime: string;
  hours: number;
  subject: string;
  chapter: string;
  notes: string;
}

export const studyData: StudySession[] = [
  { date: "2025-10-08", startTime: "18:30", endTime: "20:30", hours: 2, subject: "Math", chapter: "Linear Equation", notes: "Lecture" },
];

