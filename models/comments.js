module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
      id: {
        type: DataTypes.UUID,
        defaultValue: sequelize.UUIDV4
      },
     message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
     likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
     shares: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
     replies: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
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

  return Comment;
};
