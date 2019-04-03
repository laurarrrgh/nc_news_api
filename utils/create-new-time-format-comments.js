exports.createNewTimeFormatComments = function(commentsArray, referenceObject) {
    const newTimes = commentsArray.map((comment) => {
      return {
        body: comment.body,
        article_id: referenceObject[comment.belongs_to],
        author: comment.created_by,
        created_at: new Date(comment.created_at)
      }
    })
    return newTimes;
  }