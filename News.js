var news = [
    {
        title: "New Album Release",
        description: "Check out the latest album from your favorite band!",
        imageUrl: "news1.jpeg",
        source: "Music Magazine",
    },
    {
        title: "Concert Announcement",
        description: "Get your tickets now for the upcoming concert!",
        imageUrl: "background2.jpg",
        source: "Concert Website",
    },
    {
        title: "Artist Interview",
        description: "Read our exclusive interview with a rising star!",
        imageUrl: "artist.jpeg",
        source: "Music Blog",
    }
];
function renderNews(news) {
    var newsContainer = document.getElementById("news");
    if (!newsContainer)
        return;
    news.forEach(function (item) {
        var article = document.createElement("article");
        var img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.title;
        img.style.width = "400px"; // Adjust the width as needed
        img.style.height = "200px";
        var title = document.createElement("h2");
        title.textContent = item.title;
        var description = document.createElement("p");
        description.textContent = item.description;
        var source = document.createElement("p");
        source.textContent = "Source: ".concat(item.source);
        article.appendChild(img);
        article.appendChild(title);
        article.appendChild(description);
        article.appendChild(source);
        newsContainer.appendChild(article);
    });
}
window.onload = function () {
    renderNews(news);
};
