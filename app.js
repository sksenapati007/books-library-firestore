import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const booksRef = db.collection('books');

// Subscribes to the db and constantly listens for any changes in the database

// Fetch data
booksRef.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    console.log("All data in 'books' collection", data);
})

// TODO: Create and Update, Delete pendingv