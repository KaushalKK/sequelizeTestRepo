module.exports = function(dbServer) {
	'use strict';

	return dbServer.define('teams',
		dbServer.conventions.newFieldSet([
			{ name: 'name', type: 'string', allowNull: true },
			{ name: 'team_number', type: 'integer', allowNull: false, unique: true }
		]),
		dbServer.conventions.newTable('teams')
	);
};