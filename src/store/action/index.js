import firebase from '../../config/firebase';


const facebook_login = () => {
    return(dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (result){
            var token = result.credential.accessToken;
            var user = result.user;

            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                uid: user.uid
            }
            
            console.log("user==>>",create_user);
        }).catch(function (error){
            var errorCode = error.code;
            var errorMessage = error.errorMessage;
            console.log(errorMessage)
        });
    }
}

export{
    facebook_login
}