import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const {REACT_APP_API_KEY, 
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID, 
    REACT_APP_STORAGE_BUCKET, 
    REACT_APP_MESSAGING_SENDER_ID, 
    REACT_APP_APP_ID, 
    REACT_APP_MEASUREMENT_ID} = process.env;
const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
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

// Storage
var storage = getStorage(firebaseApp);
const changeUser = async(file, newName, setUser, setLoading) => {
    if(file){
        setLoading(prevState => ({...prevState,img: true}));
        var imageRef = ref(storage, '/'+auth.currentUser.uid+'/'+file.name); 
        await uploadBytesResumable(imageRef, file)
        .then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                updateProfile( auth.currentUser, {
                    photoURL: url
                })
                .then( () => {
                    let data = {
                        uid: auth.currentUser.uid,
                        name: auth.currentUser.displayName,
                        email: auth.currentUser.email,
                        img: auth.currentUser.photoURL
                    }
                    setUser(data);
                    setLoading(prevState => ({...prevState,img: false}));
                })
            });
        })
    }
    if(auth.currentUser.displayName !== newName){
        setLoading(prevState => ({...prevState,name: true}));
        updateProfile( auth.currentUser, {
            displayName: newName
        })
        .then( () => {
            let data = {
                uid: auth.currentUser.uid,
                name: auth.currentUser.displayName,
                email: auth.currentUser.email,
                img: auth.currentUser.photoURL
            }
            setUser(data);
            setLoading(prevState => ({...prevState,name: false}));
        })
    }
}

export { changeUser }