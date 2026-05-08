import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase'

export async function getClients() {
  if (!db) {
    return []
  }

  const snapshot = await getDocs(collection(db, 'clients'))

  return snapshot.docs.map((clientDoc) => ({
    id: clientDoc.id,
    ...clientDoc.data(),
  }))
}

export async function getClientById(clientId) {
  if (!db || !clientId) {
    return null
  }

  const clientDoc = await getDoc(doc(db, 'clients', clientId))

  if (!clientDoc.exists()) {
    return null
  }

  return {
    id: clientDoc.id,
    ...clientDoc.data(),
  }
}
