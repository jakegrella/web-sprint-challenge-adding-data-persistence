exports.up = function (knex) {
	return knex.schema
		.createTable('projects', (table) => {
			//  PK
			table.increments('project_id');
			//  name: string, required
			table.string('project_name', 128).notNullable();
			//  description: string, optional
			table.string('project_description');
			//  completed: boolean, required, default = false
			table.boolean('project_completed').defaultTo(0);
		})
		.createTable('resources', (table) => {
			//  PK
			table.increments('resource_id');
			//  name: string, required, unique
			table.string('resource_name', 128).notNullable().unique();
			//  description: string, optional
			table.string('resource_description');
		})
		.createTable('tasks', (table) => {
			//  PK
			table.increments('');
		});
};

exports.down = function (knex) {};
