gapi.load("client", {callback: load});

function load() {
    gapi.client.setApiKey("AIzaSyDrO4YHtPR3d6_9oPA99ejuj8oQCTgXAQg");
    gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function () {
                gapi.client.youtube.videos.list({
                    "part": "statistics",
                    "id": "0wF8BjiWrxw"
                })
                    .then(function (response) {
                            // Handle the results here (response.result has the parsed body).
                            document.getElementById("likes").innerHTML = response.result.items[0].statistics.likeCount + " likes";
                        },
                        function (err) {
                            console.error("Execute error", err);
                        });

            },

            function (err) {
                console.error("Error loading GAPI client for API", err);
            }
        )
    ;
}

gapi.load("client:auth2", function () {
    gapi.auth2.init({client_id: '969999023027-17rs21qdcfg1p51mnr7cjkh3pgrhtngc.apps.googleusercontent.com'});
});

function like() {
    gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner"})
        .then(function () {
            gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest").then(function () {
                gapi.client.youtube.videos.rate({
                    "id": "0wF8BjiWrxw",
                    "rating": "like"
                }).then(function (response) {
                        // Handle the results here (response.result has the parsed body).
                        console.log("Response", response);
                    },
                    function (err) {
                        console.error("Execute error", err);
                    });
            }, function (err) {
                console.error("Error loading GAPI client for API", err);
            });
        }, function (err) {
            console.error("Error signing in", err);
        });
}