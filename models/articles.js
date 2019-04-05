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

exports.fetchAnArticle = ( { article_id }) => {
  return knex
    .select('articles.author',
            'articles.title',
            'articles.article_id',
            'articles.body',
            'articles.topic',
            'articles.created_at',
            'articles.votes')
    .from('articles')
    .count({ comment_count: 'comment_id'})
    .leftJoin('comments','comments.article_id', 'articles.article_id')
    .where('articles.article_id', '=', article_id)
    .groupBy('articles.article_id')
} 
