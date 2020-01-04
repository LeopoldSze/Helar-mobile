const {exec} = require("../db/mysql");

const reviewList = (id)=>{
    let sql = `SELECT
tab_front_doc.id,tab_front_doc.name,tab_front_docreview.*
from 
tab_front_doc
INNER JOIN
tab_front_docreview
on tab_front_doc.id = tab_front_docreview.rid
WHERE id = ${id}`;
    return exec(sql);
};

module.exports = {reviewList};