var q = require('q');

module.exports = function (db, apiDomain) {
	'use strict';
	
	return {
		create: function(eventCode, details) {
			var eventId = null,
				deferred = q.defer();
			
			apiDomain.events.findByEventCode(eventCode)
			.then(function(event) {
				eventId = event.id ? event.id : eventCode;
				return db.server.context.connect();
			})
			.then(function(connection) {
				return connection.domain.matches.create({
					event_code: eventId,
					dq: details.dq || false,
					team: details.teamNumber,
					match_number: details.matchNumber,
					penalties: details.penalties || 0,
					auto_points: details.autoPoints || 0,
					tele_points: details.telePoints || 0,
					total_points: details.totalPoints || 0,
					endgame_pts: details.endgamePoints || 0
				});
			})
			.then(function(createdMatch) {
				deferred.resolve(createdMatch);
			})
			.catch(function(err) {
				deferred.reject(err);
			});
			
			return deferred.promise;
		}
	};
};