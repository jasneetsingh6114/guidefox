'use strict';

const TABLE_NAME = 'banners'; // Define the table name

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable(
        TABLE_NAME,
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          closeButtonAction: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          repetitionType: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'show only once',
          },
          position: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          url: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          fontColor: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '#FFFFFF',
          },
          backgroundColor: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '#FFFFFF',
          },
          bannerText: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: '',
          },
          actionUrl: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          createdBy: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            },
          },
        },
        { transaction }
      );

      // Commit the transaction
      await transaction.commit();
    } catch (error) {
      // Rollback the transaction in case of an error
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      // Drop the guide_logs table
      await queryInterface.dropTable(TABLE_NAME, { transaction });

      // Commit the transaction
      await transaction.commit();
    } catch (error) {
      // Rollback the transaction in case of an error
      await transaction.rollback();
      throw error;
    }
  },
};
