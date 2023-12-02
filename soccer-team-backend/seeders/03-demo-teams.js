"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert(
    "Teams",
    [
      {
        name: "Eagles",
        logo: "eagles_logo_url",
        description: "Eagles football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sharks",
        logo: "sharks_logo_url",
        description: "Sharks football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lions",
        logo: "lions_logo_url",
        description: "Lions football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tigers",
        logo: "tigers_logo_url",
        description: "Tigers football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bears",
        logo: "bears_logo_url",
        description: "Bears football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wolves",
        logo: "wolves_logo_url",
        description: "Wolves football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Panthers",
        logo: "panthers_logo_url",
        description: "Panthers football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cougars",
        logo: "cougars_logo_url",
        description: "Cougars football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bulldogs",
        logo: "bulldogs_logo_url",
        description: "Bulldogs football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hawks",
        logo: "hawks_logo_url",
        description: "Hawks football team",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete("Teams", null, {});
}
