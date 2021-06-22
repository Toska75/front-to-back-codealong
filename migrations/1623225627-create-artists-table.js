exports.up = async (sql) => {
  await sql`
  CREATE TABLE artists (
    id integer PRIMARY KEY UNIQUE NOT NULL,
    name varchar(100) NOT NULL
  )
`;
};

exports.down = async (sql) => {
  await sql`
  DROP TABLE artists
`;
};
