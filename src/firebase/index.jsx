import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiT2R9yW9-uRVqKgW78k4d1EObTvOsLQQ",
    authDomain: "https://to-do-list.jesusmarzor.com",
    projectId: "to-do-list-7c4cc",
    storageBucket: "to-do-list-7c4cc.appspot.com",
    messagingSenderId: "381328186290",
    appId: "1:381328186290:web:8c829a3bc6ab72c81022ab",
    measurementId: "G-YC7NL05D5Z"
};

const firebaseApp = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(firebaseApp);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile };

// DB
const db = getFirestore(firebaseApp);
const tasks = collection(db, 'tasks');

const addTaskFirebase = async (title) => await addDoc(tasks, {title})
const getTasksFirebase = async () =>{
    const querySnapshot = await getDocs(tasks);
    let list = [];
    querySnapshot.forEach( doc => {
        let task = {
            id: doc.id,
            title: doc.data().title
        }
        list.push(task);
    })
    return list;
}

export { addTaskFirebase, getTasksFirebase }