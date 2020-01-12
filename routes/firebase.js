
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

    getAnEmployee(key) {
        return db.collection('employees').doc(key).get()
    },

    deleteEmployee(key) {
        return db.collection('employees').doc(key).delete()
    },

    updateEmployee(key, data) {
        return db.collection('employees').doc(key).update(data)
    }
}


module.exports = firebase