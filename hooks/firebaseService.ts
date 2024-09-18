import { db } from '@/app/auth/firebase';
import { collection, getDocs } from 'firebase/firestore';

interface Question {
  pregunta: string;
  opciones: string[];
  respuesta: number;
  nivel: number;
}

export async function fetchQuestions(): Promise<Question[]> {
  const preguntasCollection = collection(db, 'preguntas');
  const preguntasSnapshot = await getDocs(preguntasCollection);
  const preguntasList = preguntasSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Question, 'id'>), // Asegúrate de que los datos coincidan con la interfaz Question
  }));
  return preguntasList;
}
