exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "123SD45234J23", make: "Ford", model: "Fusion", mileage: 45000 },
        {
          VIN: "768SD45234J23",
          make: "McLaren",
          model: "P1",
          mileage: 6000,
          transmission_type: "automatic",
          title_status: "Clean"
        },
        {
          VIN: "123SM8BD34J23",
          make: "Toyota",
          model: "Corolla",
          mileage: 96000,
          title_status: "Salvage"
        },
        {
          VIN: "123SDSD98ZX63",
          make: "BMW",
          model: "335xi",
          mileage: 5000,
          transmission_type: "Manual"
        }
      ]);
    });
};
