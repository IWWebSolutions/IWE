const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

app.use(express.json());

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'IwWeb@123', // Replace with your MySQL password
  database: 'categories_db', // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Stop the server if DB fails to connect
  }
  console.log('Connected to MySQL database');
});

// 🟢 Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Categories App!');
});

// 🟢 Fetch all realms (Categories)
app.get('/realms', (req, res) => {
  const sql = 'SELECT * FROM Realm';
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
});

// 🟢 Fetch domains (Subcategories) for a realm
app.get('/domains/:realm_id', (req, res) => {
  const realmId = req.params.realm_id;
  const sql = 'SELECT * FROM Domain WHERE realm_id = ?';
  db.query(sql, [realmId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
});

// 🟢 Fetch niches (Sub-subcategories) for a domain
app.get('/niches/:domain_id', (req, res) => {
  const domainId = req.params.domain_id;
  const sql = 'SELECT * FROM Niche WHERE domain_id = ?';
  db.query(sql, [domainId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
});

// 🟢 Render a realm (Category) page
// 🟢 Render a realm (Category) page
app.get('/realm/:slug', (req, res) => {
  const slug = req.params.slug;
  const sql = 'SELECT * FROM Realm WHERE slug = ?';

  db.query(sql, [slug], (err, realmResult) => {
    if (err) return res.status(500).send('Database error');
    if (realmResult.length === 0) return res.status(404).send('Realm not found');

    const realm = realmResult[0];

    // Query to get the domains for the realm
    const domainSql = 'SELECT * FROM Domain WHERE realm_id = ?';
    db.query(domainSql, [realm.realm_id], (err, domainResults) => {
      if (err) return res.status(500).send('Database error');
      
      // Render the realm view with the domains
      res.render('realm', { realm, domainList: domainResults });  // Pass domains here
    });
  });
});

// 🟢 Render a domain (Subcategory) page
app.get('/domain/:slug', (req, res) => {
  const slug = req.params.slug;
  const sql = 'SELECT * FROM Domain WHERE slug = ?';

  db.query(sql, [slug], (err, domainResult) => {
    if (err) return res.status(500).send('Database error');
    if (domainResult.length === 0) return res.status(404).send('Domain not found');

    const domain = domainResult[0];

    const nicheSql = 'SELECT * FROM Niche WHERE domain_id = ?';
    db.query(nicheSql, [domain.domain_id], (err, nicheResults) => {
      if (err) return res.status(500).send('Database error');
      res.render('domain', { domain, nicheList: nicheResults });
    });
  });
});

// 🟢 Render a niche (Sub-subcategory) page
app.get('/niche/:slug', (req, res) => {
  const slug = req.params.slug;
  const sql = 'SELECT * FROM Niche WHERE slug = ?';

  db.query(sql, [slug], (err, nicheResult) => {
    if (err) return res.status(500).send('Database error');
    if (nicheResult.length === 0) return res.status(404).send('Niche not found');

    res.render('niche', { niche: nicheResult[0] });
  });
});

// 🟢 Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
