var log = document.getElementById('chatlog');

var chatObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === "childList" && mutation.target.className.indexOf("chat_dialog_content_inner") >= 0) {
            console.log("scrolling");
            var scroll = mutation.target.parentElement.scrollHeight;
            mutation.target.parentElement.scrollTop = scroll;
        }
    });
});

chatObserver.observe(log, { childList: true, subtree: true });
