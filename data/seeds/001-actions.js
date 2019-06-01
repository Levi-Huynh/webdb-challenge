exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Install Create React App',
      notes:
        'Run Create React App in your project directory',
    },
    {
      project_id: 1,
      description: 'Install Redux',
      notes: 'Add redux to create a store to manage application level state',
    },
    {
      project_id: 1,
      description: 'Use React composition, functional and resentational Components',
      notes: 'Create components to manage your props and state',
    },
    {
      project_id: 1,
      description: 'Use React Life Cycles ',
      notes: 'Use react life cycles to update UI and states',
    }
  
    
   
  ]);
};
