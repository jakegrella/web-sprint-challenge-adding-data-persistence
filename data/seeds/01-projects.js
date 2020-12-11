exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					project_name: 'Project Box of Crayons',
					project_description: `Well that's a common mistake, cage matches? Yeah, they work. How could they not work? If they didn't work, everybody would still be in the cage`,
					project_completed: 1,
				},
				{
					project_name: 'Project Robust Routine',
					project_description: `Charles asked me to do this rundown of all my clients.`,
					project_completed: 0,
				},
				{
					project_name: 'Project Fission Reaction',
					project_description: `False. Black bear, which one? I have a lot of stupid faces.`,
					project_completed: 1,
				},
				{
					project_name: 'Project Artificial Delivery',
					project_description: `Did this happen on company property?`,
					project_completed: 1,
				},
				{
					project_name: 'Project Mad Hatter',
					project_description: `A boss's salary isn't just about money. It is about perks. It- for example, every year I get a one hundred dollar gas card. Can't put a price tag on that.`,
					project_completed: 0,
				},
				{
					project_name: 'Project Classical Music',
					project_description: `You're hardly my first, yeah, I just moved it an inch every time he went to the bathroom. And that's how I spent my entire day that day.`,
					project_completed: 1,
				},
				{
					project_name: 'Project Negative Intuition',
					project_description: `Oh yes. Ever since The Storm, you might be surprised to learn that I've only been to one other wedding. It's actually a very cute story.`,
					project_completed: 0,
				},
			]);
		});
};
