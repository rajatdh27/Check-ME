import { db } from "../firebaseConfig";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const expenseCollectionRef = collection(db, "data");

class DataService {
  addExpense = (newExpense) => {
    return addDoc(expenseCollectionRef, newExpense);
  };
  updateExpense = (id, updatedExpense) => {
    const expenseDoc = doc(db, "data", id);
    return updateDoc(expenseDoc, updatedExpense);
  };

  deleteExpense = (id) => {
    const expenseDoc = doc(db, "data", id);
    return deleteDoc(expenseDoc);
  };

  getAllExpenses = () => {
    return getDocs(expenseCollectionRef);
  };
  setData = (id, data) => {
    return setDoc(doc(db, "data", id), {
      name: data.name,
      userName: data.userName,
    });
  };

  getExpense = (id) => {
    const expenseDoc = doc(db, "data", id);
    return getDoc(expenseDoc);
  };
}

export default new DataService();
