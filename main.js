'use strict'
const videoElement = document.getElementById("video-player");
const mainBody = document.getElementById("mainBody");
const subHeader = document.getElementById("subheader");

// Heartcore config
const url = "https://cdn.umbraco.io/content/773457e2-74e9-4aa3-b6a3-6558eab8437a"
const headers = {
    "Accept-Language": "da",
    "umb-project-alias": "aws-hc-multilingual"
}

// Fetching data from Heartcore
const fetchData = async () => {
    fetch(url, {headers})
    .then(res => res.json())
    .then(data => {
        mainBody.innerHTML = data.homeBody
        subHeader.innerText = data.homeHeader
        videoElement.src = data.promoVideo.src
        console.log(data)
    })
    .catch(err => console.log(err))
}

fetchData();