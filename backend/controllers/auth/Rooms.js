// const Room = require("../../models/Room");


// const Rooms = async (req, res, next) => {
//         const { location } = req.query;
      
//         if (!location) {
//           return res.status(400).json({ error: 'Location is required' });
//         }
      
//         try {
//           const rooms = await Room.find({
//             location: { $regex: new RegExp(location, 'i') }, // case-insensitive
//           });
      
//           res.json(rooms);
//         } catch (err) {
//           res.status(500).json({ error: 'Something went wrong' });
//         }
      
//     }

// module.export = Rooms;