const Item = require('../model/item');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json({ message: 'Item created successfully', item: newItem });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await Item.findByIdAndDelete(id);
    res.send('Item deleted successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};
