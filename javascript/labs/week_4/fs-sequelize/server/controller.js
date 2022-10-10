// allows access to our variables in .env
require('dotenv').config();

// destructure into variables from .env
// that means there exists a variable inside of process.env
// that is called CONNECTION_STRING
const {CONNECTION_STRING} = process.env;

const sequelize = require('sequelize');
// === SEQUELIZE STEPS ===
const { Sequelize } = require('sequelize');
// allow access for SQL in our database by storing object as a var
const Sequelize = require('sequelize');
// instantiate a sequelize object from it's class
const Sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let nextEmp = 5

module.exports = {
    getUpcomingAppointments: (req, res) => {
        sequelize.query(`select a.appt_id, a.date, a.service_type, a.approved, a.completed, u.first_name, u.last_name 
        from cc_appointments a
        join cc_emp_appts ea on a.appt_id = ea.appt_id
        join cc_employees e on e.emp_id = ea.emp_id
        join cc_users u on e.user_id = u.user_id
        where a.approved = true and a.completed = false
        order by a.date desc;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },

    approveAppointment: (req, res) => {
        let {apptId} = req.body
    
        sequelize.query(`*****YOUR CODE HERE*****
        
        insert into cc_emp_appts (emp_id, appt_id)
        values (${nextEmp}, ${apptId}),
        (${nextEmp + 1}, ${apptId});
        `)
            .then(dbRes => {
                res.status(200).send(dbRes[0])
                nextEmp += 2
            })
            .catch(err => console.log(err))
    },
    // === PART 3 ===
    // Identify the patterns! Remember, all your seuquelize will have 
    // some basic structure to it. The only dynamic part is 
    // the actual SQL.
    getAllClients: (req, res) => {
        // QUERY ALL FROM 2 tables:
        // cc_clients (alias: c) JOIN with cc_users (alias: u)
        // JOIN ON their matching user_id
        sequelize.query(`SELECT * FROM cc_clients AS c join cc_users AS u on c.user_id = u.user_id;`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
}
