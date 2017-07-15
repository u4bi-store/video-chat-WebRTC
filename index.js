/* firebase 인증 */
firebase.initializeApp({
    apiKey: "AIzaSyDWjUAC-8Wk9ZajKutcqkOZ-AerIlWsQ3g",
    authDomain: "video-webrtc.firebaseapp.com",
    databaseURL: "https://video-webrtc.firebaseio.com",
    projectId: "video-webrtc",
    storageBucket: "video-webrtc.appspot.com",
    messagingSenderId: "863612026529"
});

var database = firebase.database().ref(),
    pc = new window.webkitRTCPeerConnection({ // https://developer.mozilla.org/ko/docs/Web/API/RTCPeerConnection
        'iceServers': [
            {'url': 'stun:stun.l.google.com:19302'} 
        ]
    }),
    userId = 'user'+new Date().getTime();




send(userId, 'data'); // TEST



// console.log(database);
// console.log(pc);



database.on('child_added', function(e){
    var message = e.val().message,
        sender  = e.val().sender;

    console.log(message, sender);

});




function send(senderId, data){
    var msg = database.push({
        sender : senderId,
        message : data
    });

    msg.remove();

}


