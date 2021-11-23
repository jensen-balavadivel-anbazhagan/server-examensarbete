exports.up = function(knex) {
    return knex.schema
    .createTable("glossary", tbl => { 
        tbl.increments()
        tbl.text("letter")
        tbl.text("word")
        tbl.text("information")
        tbl.text("author")
      })
      .createTable("comments", tbl => { 
        tbl.increments()
        tbl.text("author")
        tbl.text("comment")
        tbl.text("like")
        tbl.text("dislike")
      })      
};

exports.down = function(knex) {
};