exports.createNewTimeFormatComments = function(commentsArray) {
    const newTimes = commentsArray.map((comment) => {
      return {
        body: comment.body,
        belongs_to: comment.belongs_to,
        created_by: comment.created_by,
        created_at: new Date(comment.created_at)
      }
    })
    return newTimes;
  }