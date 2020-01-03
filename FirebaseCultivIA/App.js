// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDqLs3ey0qyg9ER0COq22v2Wy6iXQss1hY",
    authDomain: "cultivia-26f7a.firebaseapp.com",
    databaseURL: "https://cultivia-26f7a.firebaseio.com",
    projectId: "cultivia-26f7a",
    storageBucket: "cultivia-26f7a.appspot.com",
    messagingSenderId: "716809425093",
    appId: "1:716809425093:web:0c5704ae5ce9262a3ee0ac",
    measurementId: "G-VMGCSFWEQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var textoVerificado = "";
        if (emailVerified === false) {
            textoVerificado = "Email no verificado";
        }
        else {
            textoVerificado = "Email verificado";
        }
        var providerData = user.providerData;

        document.getElementById('botonAcceso').style.display = "none";
        document.getElementById('checkLogin').style.display = "none";
        document.getElementById('areaRegistro').style.display = "none";
        document.getElementById('passA').style.display = "none";
        document.getElementById('areaLogin').style.display = "";
        document.getElementById('btnCerrar').style.display = "";
        document.getElementById('emailA').value = email;

        console.log(user);
    } else {
        //document.getElementById('login').innerHTML = "No logueado ";
        document.getElementById('botonAcceso').style.display = "";
        document.getElementById('checkLogin').style.display = "";
        document.getElementById('areaRegistro').style.display = "";
        document.getElementById('passA').style.display = "";
        document.getElementById('areaLogin').style.display = "none";
        document.getElementById('btnCerrar').style.display = "none";
    }
});

function enviar() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    firebase.auth().createUserWithEmailAndPassword(email, pass)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        })
        .then(function () {
            verificar();
        });
}
function acceso() {
    var emailA = document.getElementById('emailA').value;
    var passA = document.getElementById('passA').value;
    firebase.auth().signInWithEmailAndPassword(emailA, passA)
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
        });
}
function cerrar() {
    firebase.auth().signOut()
        .then(function () {
            console.log('Salir');
        })
        .catch(function (error) {
            console.log('error')
        })
}
function verificar() {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function () {
        // Email sent.
    }).catch(function (error) {
        // An error happened.
    });

}
$(document).ready(function () {
    $('#loginRegistrar').change(function () {
        if ($(this).is(':checked')) {
            $('#areaLogin').show();
            $('#areaRegistro').hide();
        }
        else {
            $('#areaLogin').hide();
            $('#areaRegistro').show();
        }
    });
});