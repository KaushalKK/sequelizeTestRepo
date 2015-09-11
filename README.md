# Sequelize Test Repo

Code Repository to test development of a Node JS, Angular, Express application that will communicate with a MYSQL Database using Sequlize JS via a REST API interface.

#### POST Methods
##### Create Team
[x] POST /api/scouting/team
```
{
	"name": <STRING>,
	"number": <INTEGER>
}
```
##### Create Event
[x] POST /api/scouting/event
```
{
	"name": <STRING>,
	"week": <INTEGER>,
	"location": <STRING>,			// OPTIONAL
	"eventCode": <STRING>,
	"isDistrict": <BOOLEAN>
}
```
##### Create Match at Event
[x] POST /api/scouting/event/:eventCode/match
```
{
	"dq": <BOOLEAN>,				// OPTIONAL (false if not specified)
	"teamNumber": <INTEGER>,
	"matchNumber": <INTEGER>,
	"autoPoints": <INTEGER>,		// OPTIONAL (0 if not specified)
	"telePoints": <INTEGER>,		// OPTIONAL (0 if not specified)
	"endgamePoints": <INTEGER>,		// OPTIONAL (0 if not specified)
	"totalPoints": <INTEGER>,		// OPTIONAL (0 if not specified)
	"penalties": <INTEGER>			// OPTIONAL (0 if not specified)
}
```

#### GET Methods
##### For Teams
##### Get Team Information
[x] GET /api/scouting/team/:teamNumber
##### Get all Matches at Event for a Team
[x] GET /api/scouting/team/:teamNumber/:eventCode/matches
##### For Events
##### Get Event Information
[x] GET /api/scouting/event/:eventCode
##### Get all Teams attending an Event
[ ] GET /api/scouting/event/:eventCode/teams
##### Get all Awards for an Event
[ ] GET /api/scouting/event/:eventCode/awards
##### Get all Matches at an Event
[ ] GET /api/scouting/event/:eventCode/matches
##### Get a specific Match at an Event
[ ] GET /api/scouting/event/:eventCode/matches/:matchNumber