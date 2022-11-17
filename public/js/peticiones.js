let getJSON = (url, callback) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {

        let status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};





function testRequest() {
   // getJSON('http://time.jsontest.com', (err, data) => {
    getJSON('/consultandotabla', (err, data) => { 
    if (err != null) {
        console.error(err);
    } else {

        let resp = data
//        Time: ${data.time}
// Unix time: ${data.milliseconds_since_epoch}`

        console.log(resp);
    }
});
}