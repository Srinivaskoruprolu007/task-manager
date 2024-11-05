import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const taskCollection = collection(db, "tasks");

export const addTask = async (task) => {
  await addDoc(taskCollection, task);
};

export const getTasks = async () => {
  const snapshot = await getDocs(taskCollection);
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateTask = async (id, task) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, task);
};

export const deleteTask = async (id) => {
  const taskDoc = doc(db, "tasks", id);
  await deleteDoc(taskDoc);
};
