let key = "crazy666";
let url = "http://127.0.0.1:6171/v1/requests/recent";

$httpClient.get({
    url: url,
    headers: {"X-Key": key}
}, function(error, response, data) {
    if (error) {
        console.log("Fetch failed: " + error);
        $done();
        return;
    }
    
    // 转发给内网接收端
    $httpClient.post({
        url: "http://192.168.50.5:6188/api/report",
        headers: {"Content-Type": "application/json"},
        body: data
    }, function(err, resp, dat) {
        if (err) {
            console.log("Report failed: " + err);
        } else {
            console.log("Report success!");
        }
        $done();
    });
});