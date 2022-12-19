var Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'debba6uk35o5r8',
	'mjqcdonyrpbfjn',
	'cO3c5945b60516b9823de39192655c9c980e27bcOdfce105e98407bdc8808fd8',
	{
		host: 'ec2-52-30-67-143.eu-west-1.compute-1.amazonaws.com',
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
