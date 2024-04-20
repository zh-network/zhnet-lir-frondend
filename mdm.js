function rewriteUrl(url) {
    var regex = /^(https?:\/\/)([^\/:]+)(:\d+)?(\/.*)?$/;
    var match = url.match(regex);

    if (!match) {
        console.log("Invalid URL format: " + url);
        return url;
    }

    var protocol = "https://";
    var hostname = "mdm.uprprc.moe";
    var pathAndQuery = match[4] || '';
    console.log("hostname: " + hostname, "pathAndQuery: " + pathAndQuery);
    return protocol + hostname + pathAndQuery;
}

var request = $request;
var newUrl = rewriteUrl(request.url);

console.log("Original URL: " + request.url);
console.log("Modified URL: " + newUrl);

var response = {
    status: 302,
    headers: {
        "Location": newUrl
    }
};

$done({ response: response });
