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
  { date: "2025-10-09", startTime: "16:00", endTime: "18:00", hours: 2, subject: "Math", chapter: "Linear Equation", notes: "Lecture Revision" },
  { date: "2025-10-09", startTime: "19:00", endTime: "21:00", hours: 2, subject: "Math", chapter: "Linear Equation", notes: "Lecture video" },
  { date: "2025-10-10", startTime: "18:00", endTime: "20:00", hours: 2, subject: "Math", chapter: "Linear Equation", notes: "Revision" },
  { date: "2025-10-11", startTime: "20:00", endTime: "21:00", hours: 1, subject: "Sst", chapter: "CH-14", notes: "Q+A" },
  { date: "2025-10-12", startTime: "15:00", endTime: "17:00", hours: 2, subject: "Math", chapter: "percentage", notes: "Lecture" },
  { date: "2025-10-13", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "percentage", notes: "Lecture" },
  { date: "2025-10-14", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "percentage", notes: "Lecture" },
  { date: "2025-10-15", startTime: "17:00", endTime: "21:00", hours: 4, subject: "Math", chapter: "percentage", notes: "Lecture" },
  { date: "2025-10-16", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Sst", chapter: "life on earth", notes: "Lecture" },
];];
