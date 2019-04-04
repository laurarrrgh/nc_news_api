const knex = require('../db/connection');

exports.fetchAllArticles = ({ sort_by }) => {
 return knex
    .select('articles.author', 
        'articles.title', 
        'articles.article_id', 
        'articles.topic', 
        'articles.created_at', 
        'articles.votes')
    .from('articles')
    .count({ comment_count: 'comment_id'})
    .leftJoin('comments','comments.article_id', 'articles.article_id')
    .groupBy('articles.article_id')
    .orderBy(sort_by || 'created_at', 'desc')
  //  .where()
}

//Need new model for fetch an article by article id
exports.fetchAnArticle = () => {
  return knex
    .select('articles.author',
            'articles.title',
            'articles.article_id',
            'article.body',
            'articles.topics',
            'articles.created_at',
            'articles.votes')
    .count({ comment_count: 'comment_id'})
    .leftJoin('comments','comments.article_id', 'articles.article_id')
    .groupBy('articles.article_id')
}