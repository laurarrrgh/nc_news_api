exports.createNewTimeFormat = function(articlesArray) {
  console.log(articlesArray)
    const newTimes = articlesArray.map((article) => {
      return {
        title: article.title,
        topic: article.topic,
        author: article.author,
        body: article.body,
        created_at: new Date(article.created_at)
      }
    })
    return newTimes;
  }