// News.ts
interface NewsItem {
    title: string;
    description: string;
    imageUrl: string;
    source: string;
   
    
  }
  
  const news: NewsItem[] = [
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
  
  function renderNews(news: NewsItem[]) {
    const newsContainer = document.getElementById("news");
    if (!newsContainer) return;
  
    news.forEach(item => {
      const article = document.createElement("article");
  
      const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.title;
    img.style.width = "400px"; // Adjust the width as needed
    img.style.height = "200px";
  
      const title = document.createElement("h2");
      title.textContent = item.title;
  
      const description = document.createElement("p");
      description.textContent = item.description;
  
      const source = document.createElement("p");
      source.textContent = `Source: ${item.source}`;
  
      
  
      article.appendChild(img);
      article.appendChild(title);
      article.appendChild(description);
      article.appendChild(source);
    
  
      newsContainer.appendChild(article);
    });
  }
  
  window.onload = () => {
    renderNews(news);
  };
  