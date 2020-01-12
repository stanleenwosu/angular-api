
const admin = require("firebase-admin");

const serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://angular-app-3c558.firebaseio.com"
});

const db = admin.firestore()

const firebase = {
    getAllEmployees() {
        return db.collection('employees').get()
    },

    getAnEmployee(id) {
        return db.collection('employees').doc(id).get()
    },

    deleteEmployee() {
        return db.collection('employees').doc(id).delete()
    }
}


module.exports = firebase