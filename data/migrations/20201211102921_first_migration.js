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
			table.boolean('project_completed').notNullable().defaultTo(0);
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
			table.increments('task_id');
			//  description: string, required
			table.string('task_description').notNullable();
			//  notes: string, optional
			table.string('task_notes');
			//  completed: boolean, required, default = false
			table.boolean('task_completed').defaultTo(0);
			//  project id: FK integer, required
			table
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
		})
		.createTable('project_resources', (table) => {
			//  PK
			table.increments();
			//  project id: FK integer, required
			table
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
			//  resource id: FK integer, required
			table
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resource_id')
				.inTable('resources')
				.onDelete('RESTRICT')
				.onUpdate('RESTRICT');
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
