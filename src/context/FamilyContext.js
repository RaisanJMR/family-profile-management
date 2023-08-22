import {
  onSnapshot,
  collection,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../firebase'
import { createContext, useState } from 'react'

const FamilyContext = createContext()

export const FamilyProvider = ({ children }) => {
  const [member, setMembers] = useState([])
  const getFamilyMembers = () => {
    const collectionReference = collection(db, 'members')
    const q = query(collectionReference, orderBy('createdAt'))
    try {
      onSnapshot(q, (snap) => {
        const newMembers = snap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        console.log(newMembers)
        setMembers(newMembers)
      })
    } catch (error) {
      console.log('ERROR FETCHING DATA', error)
    }
  }

  const deleteFamilyMember = (id) => {
    const documentRef = doc(db, 'members', id)
    deleteDoc(documentRef)
      .then(() => {
        alert('DATA DELETED')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <FamilyContext.Provider
      value={{ member, getFamilyMembers, deleteFamilyMember }}>
      {children}
    </FamilyContext.Provider>
  )
}

export default FamilyContext
