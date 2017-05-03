import * as firebase from 'firebase'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyArsPs6i7_irDrrtRUu7uB_Z0L_3UDdWnU',
  databaseURL: 'https://messenger-a845c.firebaseio.com'
})

export default app.database()
