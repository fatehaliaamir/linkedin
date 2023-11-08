const Connection = require('../models/connection');

exports.getConn = async (req, res) => {
  try {
    const connections = await Connection.findAll();
    res.json(connections);
  } catch (error) {
    console.error('Error fetching connections:', error);
    res.status(500).json({ error: 'An error occurred while fetching connections.' });
  }
};

exports.postAddConn = async (req, res) => {
  const user_id = req.body.user_id;
  const conn_user_id = req.body.conn_user_id;
  const status = req.body.status;

  try {
    const newConnection = await Connection.create({
      user_id,
      conn_user_id,
      status
    });

    res.send('Connection successfully added');
  } catch (error) {
    console.error('Error adding connection:', error);
    res.status(500).json({ error: 'An error occurred while adding the connection.' });
  }
};

exports.postEditConn = async (req, res) => {
  const conn_id = req.body.conn_id;
  const newStatus = req.body.status;

  try {
    const updatedConnection = await Connection.update(
      { status: newStatus },
      {
        where: { conn_id: conn_id },
      }
    );

    if (updatedConnection[0] === 0) {
      return res.status(404).json({ error: 'Connection not found' });
    }

    res.send(`Connection with ID ${conn_id} updated`);
  } catch (error) {
    console.error('Error updating connection:', error);
    res.status(500).json({ error: 'An error occurred while updating the connection.' });
  }
};

exports.postDeleteConn = async (req, res) => {
  const conn_id = req.body.conn_id;

  try {
    const deletedConnection = await Connection.destroy({
      where: { conn_id: conn_id },
    });

    if (deletedConnection === 0) {
      return res.status(404).json({ error: 'Connection not found' });
    }

    res.send(`Connection with ID ${conn_id} deleted`);
  } catch (error) {
    console.error('Error deleting connection:', error);
    res.status(500).json({ error: 'An error occurred while deleting the connection.' });
  }
};
