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
  { date: "2025-09-01", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "English", chapter: "Reading Comprehension", notes: "morning revision" },
  { date: "2025-09-02", startTime: "08:30", endTime: "10:00", hours: 1.5, subject: "Math", chapter: "Algebra", notes: "formula practice" },
  { date: "2025-09-03", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "Science", chapter: "Motion", notes: "chapter summary" },
  { date: "2025-09-04", startTime: "14:00", endTime: "15:00", hours: 1, subject: "English", chapter: "Grammar", notes: "noun and verb rules" },
  { date: "2025-09-05", startTime: "13:30", endTime: "15:00", hours: 1.5, subject: "Math", chapter: "Geometry", notes: "area and perimeter" },
  { date: "2025-09-06", startTime: "12:00", endTime: "13:30", hours: 1.5, subject: "Science", chapter: "Plants", notes: "types of leaves" },
  { date: "2025-09-07", startTime: "18:00", endTime: "19:00", hours: 1, subject: "English", chapter: "Essay Writing", notes: "topic practice" },
  { date: "2025-09-08", startTime: "17:30", endTime: "19:00", hours: 1.5, subject: "Math", chapter: "Fractions", notes: "problem solving" },
  { date: "2025-09-09", startTime: "19:00", endTime: "20:30", hours: 1.5, subject: "Science", chapter: "Light", notes: "reflection refraction" },
  { date: "2025-09-10", startTime: "21:00", endTime: "22:30", hours: 1.5, subject: "English", chapter: "Adjectives", notes: "grammar practice" },
  { date: "2025-09-11", startTime: "21:30", endTime: "23:00", hours: 1.5, subject: "Math", chapter: "Decimals", notes: "practice exercises" },
  { date: "2025-09-12", startTime: "22:00", endTime: "23:30", hours: 1.5, subject: "Science", chapter: "Sound", notes: "experiment review" },
  { date: "2025-09-13", startTime: "08:45", endTime: "10:15", hours: 1.5, subject: "English", chapter: "Poetry", notes: "summary writing" },
  { date: "2025-09-14", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "Math", chapter: "Percentages", notes: "formula recap" },
  { date: "2025-09-15", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Science", chapter: "Electricity", notes: "lab notes" },
  { date: "2025-09-16", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "English", chapter: "Comprehension", notes: "reading practice" },
  { date: "2025-09-17", startTime: "08:45", endTime: "10:15", hours: 1.5, subject: "Math", chapter: "Simple Interest", notes: "problem solving" },
  { date: "2025-09-18", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "Science", chapter: "Force", notes: "concept notes" },
  { date: "2025-09-19", startTime: "09:00", endTime: "10:00", hours: 1, subject: "English", chapter: "Tenses", notes: "grammar rules" },
  { date: "2025-09-20", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Math", chapter: "Ratios", notes: "practice worksheet" },
  { date: "2025-09-21", startTime: "08:30", endTime: "10:00", hours: 1.5, subject: "Science", chapter: "Human Body", notes: "nervous system" },
  { date: "2025-09-22", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "English", chapter: "Prepositions", notes: "examples study" },
  { date: "2025-09-23", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Math", chapter: "Speed and Time", notes: "word problems" },
  { date: "2025-09-24", startTime: "08:45", endTime: "10:15", hours: 1.5, subject: "Science", chapter: "Heat", notes: "lab experiments" },
  { date: "2025-09-25", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "English", chapter: "Vocabulary", notes: "new words list" },
  { date: "2025-09-26", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "Math", chapter: "Probability", notes: "examples practice" },
  { date: "2025-09-27", startTime: "08:30", endTime: "10:00", hours: 1.5, subject: "Science", chapter: "Energy", notes: "renewable sources" },
  { date: "2025-09-28", startTime: "09:00", endTime: "10:00", hours: 1, subject: "English", chapter: "Speech", notes: "writing practice" },
  { date: "2025-09-29", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Math", chapter: "Trigonometry", notes: "intro basics" },
  { date: "2025-09-30", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "Science", chapter: "Magnetism", notes: "key points" },

  { date: "2025-10-01", startTime: "09:00", endTime: "10:00", hours: 1, subject: "English", chapter: "Nouns", notes: "school studies" },
  { date: "2025-10-02", startTime: "10:00", endTime: "11:30", hours: 1.5, subject: "Math", chapter: "Algebra", notes: "practice problems" },
  { date: "2025-10-03", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Science", chapter: "Plants", notes: "experiment notes" },
  { date: "2025-10-04", startTime: "08:00", endTime: "09:30", hours: 1.5, subject: "English", chapter: "Verbs", notes: "grammar practice" },
  { date: "2025-10-05", startTime: "09:00", endTime: "10:00", hours: 1, subject: "Math", chapter: "Geometry", notes: "shapes practice" },
  { date: "2025-10-06", startTime: "10:00", endTime: "12:30", hours: 2.5, subject: "Science", chapter: "Animals", notes: "classification" },
  { date: "2025-10-07", startTime: "09:00", endTime: "10:30", hours: 1.5, subject: "English", chapter: "Noun", notes: "school studies" },
  { date: "2025-10-08", startTime: "09:30", endTime: "11:00", hours: 1.5, subject: "Math", chapter: "Algebra", notes: "practice problems" },
  { date: "2025-10-08", startTime: "12:30", endTime: "14:30", hours: 2, subject: "English", chapter: "Noun", notes: "practice problems" }
];

