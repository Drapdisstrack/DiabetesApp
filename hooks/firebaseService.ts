import { db } from '@/app/auth/firebase';
import { collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; // Importa la autenticación

interface Question {
  pregunta: string;
  opciones: string[];
  respuesta: number;
  nivel: number;
}

interface UserData {
  exp: number;
  level: number;
}

// Obtener preguntas
export async function fetchQuestions(): Promise<Question[]> {
  const preguntasCollection = collection(db, 'preguntas');
  const preguntasSnapshot = await getDocs(preguntasCollection);
  const preguntasList = preguntasSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Question, 'id'>),
  }));
  return preguntasList;
}

// Obtener el usuario actual autenticado
export function getCurrentUser() {
  const auth = getAuth();
  return auth.currentUser;
}

// Obtener los datos del usuario de la base de datos
export async function fetchUserData(userId: string): Promise<UserData | null> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    } else {
      console.error('No se encontraron datos para el usuario:', userId);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener los datos del usuario:', error);
    return null;
  }
}

// Actualizar la experiencia y el nivel del usuario
export async function updateUserExperience(userId: string, points: number): Promise<void> {
  try {
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const userData = userDoc.data() as UserData;
      const newExp = userData.exp + points;
      let newLevel = userData.level;

      // Si el usuario tiene suficiente experiencia para subir de nivel
      if (newExp >= 100 * Math.pow(newLevel, 2)) {
        newLevel += 1; // Subir de nivel
      }

      // Actualizar experiencia y nivel en Firestore
      await updateDoc(userRef, {
        exp: newExp,
        level: newLevel,
      });
    }
  } catch (error) {
    console.error('Error al actualizar la experiencia del usuario:', error);
  }
}
