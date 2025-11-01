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
  { date: "2025-10-17", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Sst", chapter: "life on earth", notes: "Lecture" },
  { date: "2025-10-24", startTime: "21:00", endTime: "12:00", hours: 3, subject: "Sst", chapter: "ch 15", notes: "Lecture" },
  { date: "2025-10-24", startTime: "15:00", endTime: "17:00", hours: 2, subject: "Science", chapter: "ch 4", notes: "Lecture" },
  { date: "2025-10-24", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "ch 8", notes: "Lecture" },
  { date: "2025-10-25", startTime: "21:00", endTime: "12:00", hours: 3, subject: "Sst", chapter: "ch 15", notes: "Lecture" },
  { date: "2025-10-25", startTime: "15:00", endTime: "17:00", hours: 3, subject: "Science", chapter: "ch 4", notes: "Lecture" },
  { date: "2025-10-25", startTime: "17:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "ch 7", notes: "test" },
  { date: "2025-10-26", startTime: "22:00", endTime: "12:00", hours: 2, subject: "Sst", chapter: "ch 15", notes: "lecture" },
  { date: "2025-10-26", startTime: "15:00", endTime: "17:00", hours: 2, subject: "Science", chapter: "ch 4", notes: "lecture" },
  { date: "2025-10-26", startTime: "18:00", endTime: "20:00", hours: 2, subject: "Math", chapter: "ch 8", notes: "lecture" },
  { date: "2025-10-27", startTime: "10:00", endTime: "12:00", hours: 3, subject: "Sst", chapter: "ch 15", notes: "learn" },
  { date: "2025-10-27", startTime: "15:00", endTime: "17:00", hours: 2, subject: "Science", chapter: "ch 4", notes: "learn" },
  { date: "2025-10-27", startTime: "20:00", endTime: "21:00", hours: 1, subject: "Math", chapter: "ch 8", notes: "lecture" },
  { date: "2025-10-28", startTime: "10:00", endTime: "12:00", hours: 3, subject: "Sst", chapter: "ch 5,14,15", notes: "learn" },
  { date: "2025-10-28", startTime: "15:00", endTime: "17:00", hours: 3, subject: "Science", chapter: "ch 6", notes: "Lecture" },
  { date: "2025-10-28", startTime: "18:00", endTime: "20:30", hours: 2.5, subject: "Math", chapter: "ch 8", notes: "Lecture" },
  { date: "2025-10-29", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "ch 8", notes: "Lecture" },
  { date: "2025-10-29", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "ch 8", notes: "Lecture" },
  { date: "2025-10-30", startTime: "8:30", endTime: "11:30", hours: 3, subject: "Sst", chapter: "ch 21", notes: "Lecture" },
  { date: "2025-10-30", startTime: "15:00", endTime: "17:00", hours: 2, subject: "Science", chapter: "ch 6", notes: "Lecture" },
  { date: "2025-10-30", startTime: "18:00", endTime: "21:00", hours: 3, subject: "Math", chapter: "ch 9", notes: "Lecture" },
  { date: "2025-10-31", startTime: "16:00", endTime: "17:00", hours: 1, subject: "Science", chapter: "ch 6", notes: "Lecture" },
  { date: "2025-10-31", startTime: "17:00", endTime: "18:00", hours: 1, subject: "Sst", chapter: "ch 21", notes: "Learn" },
  { date: "2025-10-31", startTime: "18:30", endTime: "21:30", hours: 3, subject: "Math", chapter: "ch 9", notes: "Lecture" },
  { date: "2025-11-1", startTime: "17:00", endTime: "18:00", hours: 1, subject: "Sst", chapter: "ch 21", notes: "Learn" },
  { date: "2025-11-1", startTime: "19:00", endTime: "20:00", hours: 1, subject: "Science", chapter: "ch 6", notes: "Lecture" },
  { date: "2025-11-1", startTime: "20:30", endTime: "21:30", hours: 1, subject: "Math", chapter: "ch 8", notes: "Revision" },



];
