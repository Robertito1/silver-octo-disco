module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4
      },
      name: {
        type: DataTypes.ENUM('Junior', 'Mid-level', 'Senior', 'Lead', 'Executive'),
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
     admin_priviledges: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
       defaultValue: false
      },
     access_to_transactions_ledger: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
     maximum_paid_days_off: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10
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

  return Category;
};
