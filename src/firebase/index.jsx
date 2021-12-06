import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiT2R9yW9-uRVqKgW78k4d1EObTvOsLQQ",
    authDomain: "to-do-list-7c4cc.firebaseapp.com",
    projectId: "to-do-list-7c4cc",
    storageBucket: "to-do-list-7c4cc.appspot.com",
    messagingSenderId: "381328186290",
    appId: "1:381328186290:web:8c829a3bc6ab72c81022ab",
    measurementId: "G-YC7NL05D5Z"
}

const firebaseApp = initializeApp(firebaseConfig);

// Auth
const auth = getAuth(firebaseApp);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile };

// DB
const db = getFirestore(firebaseApp);

const addTaskFirebase = async ({ title, done }) => await addDoc(collection(db,auth.currentUser.uid), {title, done})
const getTasksFirebase = async () =>{
    const querySnapshot = await getDocs(collection(db,auth.currentUser.uid));
    let list = [];
    querySnapshot.forEach( doc => {
        let task = {
            id: doc.id,
            title: doc.data().title,
            done: doc.data().done
        }
        list.push(task);
    })
    return list;
}

const editTaskFirebase = async (taskID, updateTask) => await updateDoc(doc(db, auth.currentUser.uid, taskID), updateTask);

const deleteTaskFirebase = async (taskID) => await deleteDoc(doc(db, auth.currentUser.uid, taskID));

const deleteTasksFirebase = async (list) => {
    list.map( ({id,done}) => {
        if(done)
            deleteDoc(doc(db, auth.currentUser.uid, id));
        return id;
    })
}

export { addTaskFirebase, editTaskFirebase, deleteTaskFirebase, deleteTasksFirebase, getTasksFirebase }