const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
  getProjectActions
};

function find() {
    return db('projects');
  }
  
  function findById(id) {
    return db('projects')
      .where({ id })
      .first();
  }
  
  function add(track) {
    // passing 'id' as the second parameter is recommended to ensure the id is returned
    // when connecting to other database management systems like Postgres
    return db('projects')
      .insert(track, 'id')
      .then(([id]) => {
        return findById(id);
      });
  }
  
  function update(id, changes) {
    return db('projects')
      .where({ id })
      .update(changes)
      .then(count => {
        if (count > 0) {
          return findById(id);
        } else {
          return null;
        }
      });
  }
  
  function remove(id) {
    return db('projects')
      .where({ id })
      .del();
  }
  
  
  

function getProjectActions(ProjectId) {
    return db('actions as p')
      .join('projects as u', 'u.id', 'p.project_id')
      .select('p.id', 'p.description', 'p.notes','u.name as Project_Name')
      .where('p.project_id', ProjectId);
  }