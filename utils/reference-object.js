exports.createReferenceObject = function(articles) {
  return articles.reduce((accumulator, article) => {
    accumulator[article.title] = article.article_id
    return accumulator
  }, {})
}