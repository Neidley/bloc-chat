(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                    backdrop: 'static',
                    keyboard: false,
                    templateUrl: '../../templates/usernameModal.html',
                    controller: 'UsernameModalCtrl as user',
                    size: 'sm'
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
