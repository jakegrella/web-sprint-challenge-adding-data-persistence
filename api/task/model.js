// build your `Task` model here
const db = require('../../data/dbConfig');

// retrieving all tasks - [GET] /api/tasks Each task must include
// project_name and project description so you will need to join tables
module.exports = {
	getAll() {
		// select
		//	 t.*,
		// 	 p.project_name,
		// 	 p.project_description
		// from tasks t
		// join projects p
		// on p.project_id = t.project_id
		return db('tasks as t')
			.join('projects as p', 'p.project_id', 't.project_id')
			.select('t.*', 'p.project_name', 'p.project_description');
	},
};
