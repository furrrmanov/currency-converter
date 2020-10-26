import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDjtQly8ygwCOhwVUphwUFE_-RibLrP2X4',
  authDomain: 'idle-currency-converter.firebaseapp.com',
  databaseURL: 'https://idle-currency-converter.firebaseio.com',
  projectId: 'idle-currency-converter',
  storageBucket: 'idle-currency-converter.appspot.com',
  messagingSenderId: '748508664397',
  appId: '1:748508664397:web:eca87b696ce1d39502c204',
}

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()
const provider = new firebase.auth.GoogleAuthProvider()
export default firebase

export const getLastLimitingItemsFromFirebaseDB = () => {
  return firebase
    .database()
    .ref('/history')
    .limitToLast(100)
    .once('value')
    .then((snapshot) =>
      Object.keys(snapshot.val()).reduce((acc, id) => {
        acc.push(snapshot.val()[id])
        return acc
      }, [])
    )
}

export const getLastCurrenciesRatesFirebaseDB = () => {
  return database
    .ref('/history')
    .limitToLast(1)
    .once('value')
    .then((snapshot) => Object.entries(snapshot.val())[0][1].date)
}

export const singInGoogleAccountUsingFirebase = () => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const { user } = result
      return user
    })
    .catch(function (error) {
    })
}

export const singOutGoogleAccountUsingFirebase = () => {
  return firebase.auth().signOut()
}

export const checkUserAuth = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
