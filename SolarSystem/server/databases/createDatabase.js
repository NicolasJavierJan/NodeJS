import db from "./connection.js";

// Two conventions: always name the table plural & snake_case

const isDeleteMode = true;

/*
if (isDeleteMode) {
    db.exec(`DROP TABLE planets;`);
    db.exec(`DROP TABLE people;`);
}
*/

// Creating tables (DDL):
db.exec(`CREATE TABLE IF NOT EXISTS planets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    size FLOAT,
    is_habitable BOOLEAN NOT NULL
);
`);

db.exec(`
CREATE TABLE IF NOT EXISTS people (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    planet_id INTEGER,
    FOREIGN KEY (planet_id) REFERENCES planets (id)
);
`)

// Seeding (putting data in the Database) (DML):
if (isDeleteMode){
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('mercury', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('venus', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('earth', True);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('mars', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('jupiter', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('saturn', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('neptune', False);`);
    db.exec(`INSERT INTO planets(name, is_habitable) VALUES ('uranus', False);`);
}
