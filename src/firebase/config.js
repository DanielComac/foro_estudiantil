
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBSevaoGA3L9KoFzM7ciXwnpoZhVWxeobw",
  authDomain: "proyectoangular-a9b71.firebaseapp.com",
  projectId: "proyectoangular-a9b71",
  storageBucket: "proyectoangular-a9b71.appspot.com",
  messagingSenderId: "948603541492",
  appId: "1:948603541492:web:887ccbd2973d193f7bcba1",
  measurementId: "G-JV2P0KR30K"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, 'caca');
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url

}



