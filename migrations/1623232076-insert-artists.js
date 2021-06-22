const artistList = [
  { id: 1, name: 'Mystery Mammal' },
  { id: 2, name: 'Monplaisir' },
  { id: 3, name: 'Arrizabalaga, Bravo, Laginestra, Martinez' },
];

exports.up = async function up(sql) {
  await sql`
    INSERT INTO artists ${sql(artistList, 'id', 'name')}
`;
};

exports.down = async function down(sql) {
  await sql`DELETE FROM artists`;
};
