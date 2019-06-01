exports.seed = function(knex) {
  return knex('actions').insert([
    {
      project_id: 2,
      description: 'Pre-Wash the Dishes',
      notes:
        'Rinse and remove extra debris off dishware',
    },
    {
      project_id: 2,
      description: 'Use Dishwasher',
      notes: 'Load all dishware and silverware into the Dishwasher, add dish detergent and start',
    },
    {
      project_id: 2,
      description: 'Clean Kitchen Counters',
      notes: 'Organize items on counters, wipe off debris',
    },
    {
      project_id: 2,
      description: 'Clean Kitchen Floor',
      notes: 'Sweep floor then mop with floor detergent and rinse',
    },
    {
      project_id: 3,
      description: 'Prepare Soil',
      notes:
        'Prepare proper spacing and area in soil, plant vegetable seeds',
    },
    {
      project_id: 3,
      description: 'Water the seeds',
      notes: 'Water the seeds and provide proper sunshine exposure',
    },
    {
      project_id: 3,
      description: 'Trim Weeds',
      notes: 'Trim off any weeds and rid of any pesticides',
    },
    {
      project_id: 3,
      description: 'Gather delcious salsa vegetables',
      notes: 'Trim and gather the vegetables without destroying stem',
    },
    {
      project_id: 4,
      description: 'Create trial runs with target pace',
      notes:
        'Spend 45 min to 1 hour each day 1-2 months before the marathon to keep running pace at 10min per mile',
    },
    {
      project_id: 4,
      description: 'Eat Properly',
      notes: 'Eat food high in energy and easily digestible 1-2 hours before race',
    },
    {
      project_id: 4,
      description: 'Warm Up',
      notes: 'Get muscles warmed up a few minutes before race starts',
    }
   
   
  ]);
};
