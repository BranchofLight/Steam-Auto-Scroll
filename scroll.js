var log = document.getElementById('chatlog');

var chatObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === "childList" && mutation.target.className.indexOf("chat_dialog_content_inner") >= 0) {
            var scroll = mutation.target.parentElement.scrollHeight;
            mutation.target.parentElement.scrollTop = scroll;
        }
    });
});

chatObserver.observe(log, { childList: true, subtree: true });

document.querySelectorAll('.friendslist_entry').forEach(function(element) {
    console.log(element);
    element.addEventListener('click', function(e) {
        var activeScroll;
        var chatDialogs = document.querySelectorAll('.chat_dialog');
        for (let i = 0; i < chatDialogs.length; i++) {
            if (chatDialogs[i].style.display === "block") {
                console.log("Found active scroll");
                activeScroll = chatDialogs[i].querySelector('.chat_dialog_scroll');
                break;
            }
        }

        if (activeScroll) {
            console.log(activeScroll);
            activeScroll.scrollTop = activeScroll.scrollHeight;
        }
    });
});
