chrome.alarms.create("alarm", { periodInMinutes: 1 });
function fetch_session(alarm) {
    chrome.cookies.remove({
        url: 'https://casesearch.courts.state.md.us/',
        name: 'JSESSIONID'
    })
    .then(details => {
        fetch('https://api.acab.enterprises/mjcsproxy/session')
        .then(response => response.text())
        .then(session_id => {
            chrome.cookies.set({
                domain: 'casesearch.courts.state.md.us',
                name: 'JSESSIONID',
                path: '/',
                httpOnly: true,
                url: 'https://casesearch.courts.state.md.us/casesearch/processDisclaimer.jis',
                value: session_id
            });
            console.log(session_id);
        });
    });
}
chrome.alarms.onAlarm.addListener(fetch_session);
fetch_session(null);
