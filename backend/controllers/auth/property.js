const multer = require('multer');
const property=require('../../models/property')
const upload = multer({ dest: 'uploads/' });

app.post('/api/properties', upload.array('images'), async (req, res) => {
  const { title, price, location, lat, lng, description } = req.body;

  const newProperty = new Property({
    title,
    price,
    location,
    coordinates: {
      type: "Point",
      coordinates: [parseFloat(lng), parseFloat(lat)],
    },
    description,
    images: req.files.map(file => file.path),
  });

  await newProperty.save();
  res.status(201).json({ message: 'Property posted successfully' });
});
