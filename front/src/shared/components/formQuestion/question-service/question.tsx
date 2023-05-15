import {db} from '../../../../app/api/firebase'
import {
    doc,
    collection,
    getDocs,
    setDoc,
    deleteDoc,
  } from "firebase/firestore";


  const collectionQuestion = "questions";

  export async function getQuestions() {
    const colRef = collection(db, collectionQuestion);
    const docsRef = await getDocs(colRef);
  
    docsRef.forEach((doc) => {});
    return docsRef;
  }
  
  export function addQuestion(question:string,id:string) {
    if(id){
        setDoc(doc(db, collectionQuestion,id), {
            pregunta:question
          });
    }else{
        console.log('error')
    }
   
  }
  