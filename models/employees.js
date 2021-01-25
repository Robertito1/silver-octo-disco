module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4
},
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
      mobile_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            is: ["^[a-z]+$",'i'] 
        }
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
        }
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
     created_dt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
      },
      last_modified_dt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('NOW()'),
      },
     performance_rating: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0
     }
     stars_recieved: {
         type: DataTypes.INTEGER,
         allowNull: false,
         defaultValue: 0
     }
  });

  return Employee;
};
