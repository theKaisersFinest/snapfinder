const accessKey = "2eiVPxaxYBACkqDNY0tYOFtd-cY6ewYvBezh7NN1H_w";

// Variable Bank
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const ShowMoreBtn = document.getElementById("show-more-btn");

// Code to fetch images from Unsplash

let keywords = "";
let page = 1;

async function searchImages() {
    keywords = searchBox.value; // Corrected variable name
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keywords}&client_id=${accessKey}`; // Corrected variable name

    const response = await fetch(url);
    const data = await response.json();

    //reset search
    if(page === 1){
        searchResult.innerHTML = "";
    }

    // Function to display images
    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
}
 
ShowMoreBtn.style.display ="block";

// Submit function to load images searched for when clicking the button

searchForm.addEventListener("submit", (e) => { // Corrected event type
    e.preventDefault();
    page = 1;
    searchImages();
});


ShowMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})