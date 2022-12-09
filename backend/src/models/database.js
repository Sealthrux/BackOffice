var Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'd3m9euvqdo3pc5',
	'fvkabhctvrxvlp',
	'a30cd2411c26896024b57769d552b67fd3c68a66c85443a6fc45a1f35320d358',
	{
		host: 'ec2-52-72-99-110.compute-1.amazonaws.com',
		port: '5432',
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	}
);
module.exports = sequelize;
