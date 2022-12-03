document.addEventListener("DOMContentLoaded", () => {
    GM_xmlhttpRequest({
        url: 'https://raw.githubusercontent.com/CAProductions/iceDodoHacks/main/main.js',
        method: "GET",
        nocache: true,
        cache: "no-cache",
        headers: {
            'Cache-Control': 'no-cache'
        },
        onload: function (response) {
            new Function(response.responseText)();
        },
        onerror: function () {}
    });
});
