exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					task_description: `memorize the following image pairs`,
					task_notes: ``,
					task_completed: 0,
					project_id: 1,
				},
				{
					task_description: `"recall them 30 minutes later without using the image 30 minutes later without using this page"`,
					task_notes: `Man I would love to burn your candles!`,
					task_completed: 1,
					project_id: 1,
				},
				{
					task_description: `cross out all the elements`,
					task_notes: `Hey, dude. Do you know what a rundown is?`,
					task_completed: 0,
					project_id: 2,
				},
				{
					task_description: `find the correct pairwise associations between columns`,
					task_notes: ``,
					task_completed: 0,
					project_id: 3,
				},
				{
					task_description: `"indicate whether the statements about the image are correct or incorrect"`,
					task_notes: `I'm not a millionaire. I thought I would be by the time I was thirty, but I wasn't even close`,
					task_completed: 0,
					project_id: 4,
				},
				{
					task_description: `draw the path from the entrance to the exit`,
					task_notes: `VIN JNKCV54E85M429886`,
					task_completed: 0,
					project_id: 5,
				},
				{
					task_description: `group the following images by categories`,
					task_notes: `What I want you to do, is I want you to look inward, and I want you to reflect, and I want you to say something different.`,
					task_completed: 1,
					project_id: 5,
				},
				{
					task_description: `observe the image for about 2 minutes`,
					task_notes: ``,
					task_completed: 1,
					project_id: 5,
				},
				{
					task_description: `answer the following questions without looking at the image`,
					task_notes: ``,
					task_completed: 0,
					project_id: 6,
				},
				{
					task_description: `indicate the order in which the following steps need to be executed`,
					task_notes: ``,
					task_completed: 1,
					project_id: 7,
				},
				{
					task_description: `indicate the order in which the following steps need to be executed`,
					task_notes: ``,
					task_completed: 0,
					project_id: 7,
				},
				{
					task_description: `find the correct pairwise associations between columns`,
					task_notes: `There are ten rules of business that you need to learn. Number one: You need to play to win. But, you also have to.. win, to play`,
					task_completed: 1,
					project_id: 2,
				},
				{
					task_description: `"indicate whether the statements about the image are correct or incorrect"`,
					task_notes: ``,
					task_completed: 1,
					project_id: 2,
				},
				{
					task_description: `find the 5 words in the box below`,
					task_notes: `Oh. Jim. I thought you were Mose`,
					task_completed: 0,
					project_id: 3,
				},
				{
					task_description: `draw the path from the entrance to the exit of the following labyrinth`,
					task_notes: ``,
					task_completed: 1,
					project_id: 4,
				},
				{
					task_description: `group technologies based on number of users`,
					task_notes: `You guys accomplished something big`,
					task_completed: 0,
					project_id: 6,
				},
				{
					task_description: `determine pathway to success`,
					task_notes: ``,
					task_completed: 0,
					project_id: 6,
				},
				{
					task_description: `investigate alternative strategies to decrease fuel consumption`,
					task_notes: `VIN 1GCRCREH0EZ218945`,
					task_completed: 0,
					project_id: 4,
				},
				{
					task_description: `power independent parties to conduct research`,
					task_notes: `Emily 7085551234`,
					task_completed: 1,
					project_id: 3,
				},
			]);
		});
};
