module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isAlpha: true,
        }
      },
     official_mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
      },
      direct_phone_line: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
      },
      head_of_department: {
        type: DataTypes.STRING,
        allowNull: false,
         validate: {
            notEmpty: true,
        }
      },
      active_members: {
        type: DataTypes.INTEGER,
        allowNull: false,
         validate: {
            notEmpty: true,
            isNumeric: true
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
  });

  return Department;
};
