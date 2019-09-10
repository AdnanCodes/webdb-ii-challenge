exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl
      .string("VIN", 128)
      .unique()
      .notNullable();
    tbl.string("make", 64).notNullable();
    tbl.string("model", 64).notNullable();
    tbl.integer("mileage").notNullable();

    tbl.string("transmission_type", 64);
    tbl.string("title_status", 64);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
