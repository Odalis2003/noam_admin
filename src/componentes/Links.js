import React, {useEffect, useState} from "react"
import LinkForm from './LinkForm'
import { getFirestore } from 'firebase/firestore';
import "../firebase";
import fire from "../firebase";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"


 const Links = ()=> {

    const[links, setLinks] = useState([]);


    const db = getFirestore(fire);

    const addOrEditLink = async (linkObject)=>{
        await setDoc(doc(db, "productos", "LA"), linkObject);
        console.log("tarea añadida")
    }

    const getLinks = async () => {
        const querySnapshot = await db.collection('links').onSnapshot((querySnapshot) =>{

            querySnapshot.forEach(doc => {
                console.log(doc.data());
                console.log(doc.id)
        });
        });
    };


    useEffect(() => {
        console.log('getting data...')
        getLinks();

    }, []);



    return <div>
        <LinkForm addOrEditLink={addOrEditLink}/>
        Links
    </div>
}

export default Links;