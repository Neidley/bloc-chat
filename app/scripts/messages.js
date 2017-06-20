(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
        // Filter the messages by their room ID.
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };

    Message.send = function(roomId, newMessage) {
        // Send method logic
        if (newMessage && newMessage !== '') {
            messages.$add({
                username: $cookies.currentUser,
                content: newMessage,
                roomId: roomId,
                sentAt: firebase.database.ServerValue.TIMESTAMP
            });
            //this.newMessage = $firebaseArray(ref.orderByChild('content').equalTo(newMessage)).$add(newMessage);
        }
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
