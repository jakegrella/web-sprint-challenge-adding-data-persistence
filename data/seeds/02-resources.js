exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resources')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('resources').insert([
				{
					resource_name: 'Laptop',
					resource_description: `2015 15" Macbook Pro and Charger`,
				},
				{
					resource_name: 'Microphone',
					resource_description: `Rode Audio Pro Hotshoe Mic`,
				},
				{ resource_name: 'Sony Camera', resource_description: `Sony a7R IV` },
				{ resource_name: 'Nikon Camera', resource_description: `Nikon Z6` },
				{ resource_name: 'Delivery Van', resource_description: `` },
				{ resource_name: 'Courtesy Car', resource_description: `` },
				{
					resource_name: 'Computer',
					resource_description: `HP Envy Desktop Computer, Intel Core i7-10700, 16 GB RAM, 1 TB Hard Drive & 512 GB SSD Storage`,
				},
				{ resource_name: 'Conference Room A', resource_description: `` },
				{ resource_name: 'Conference Room B', resource_description: `` },
				{ resource_name: 'Conference Room C', resource_description: `` },
				{ resource_name: 'Conference Room D', resource_description: `` },
			]);
		});
};
