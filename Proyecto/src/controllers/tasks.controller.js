const db = require("../db");

const getAllClientes = async (req, res, next) => {
  try {
    const allClientes = await db.query("SELECT * FROM cliente");
    res.json(allClientes.rows);
  } catch (error) {
    next(error);
  }
};

const getCliente = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM cliente WHERE id_cliente = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Cliente no encontrado'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createCliente = async (req, res, next) => {
  const { cedula_cliente, nombre_cliente } = req.body;

  try {
    const result = await db.query("INSERT INTO cliente (cedula_cliente, nombre_cliente) VALUES ($1, $2) RETURNING *", [
      cedula_cliente,
      nombre_cliente
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM cliente WHERE id_cliente = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Cliente no encontrado'
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateCliente = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cedula_cliente, nombre_cliente } = req.body;

    const result = await db.query(
      "UPDATE cliente SET cedula_cliente = $1, nombre_cliente = $2 WHERE id_cliente = $3 RETURNING *",
      [cedula_cliente, nombre_cliente, id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: 'Cliente no encontrado'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllCocineros = async (req, res, next) => {
  try {
    const allCocineros = await db.query("SELECT * FROM cocinero");
    res.json(allCocineros.rows);
  } catch (error) {
    next(error);
  }
};

const getCocinero = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM cocinero WHERE id_cocinero = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Cocinero no encontrado'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createCocinero = async (req, res, next) => {
  const { cedula_cocinero, nombre_cocinero, especialidad } = req.body;

  try {
    const result = await db.query("INSERT INTO cocinero (cedula_cocinero, nombre_cocinero, especialidad) VALUES ($1, $2, $3) RETURNING *", [
      cedula_cocinero,
      nombre_cocinero,
      especialidad
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteCocinero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM cocinero WHERE id_cocinero = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Cocinero no encontrado'
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateCocinero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cedula_cocinero, nombre_cocinero, especialidad } = req.body;

    const result = await db.query(
      "UPDATE cocinero SET cedula_cocinero = $1, nombre_cocinero = $2, especialidad = $3 WHERE id_cocinero = $4 RETURNING *",
      [cedula_cocinero, nombre_cocinero, especialidad, id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: 'Cocinero no encontrado'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllMeseros = async (req, res, next) => {
  try {
    const allMeseros = await db.query("SELECT * FROM mesero");
    res.json(allMeseros.rows);
  } catch (error) {
    next(error);
  }
};

const getMesero = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM mesero WHERE id_mesero = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Mesero no encontrado'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createMesero = async (req, res, next) => {
  const { cedula_mesero, nombre_mesero } = req.body;

  try {
    const result = await db.query("INSERT INTO mesero (cedula_mesero, nombre_mesero) VALUES ($1, $2) RETURNING *", [
      cedula_mesero,
      nombre_mesero
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteMesero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM mesero WHERE id_mesero = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Mesero no encontrado'
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateMesero = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { cedula_mesero, nombre_mesero } = req.body;

    const result = await db.query(
      "UPDATE mesero SET cedula_mesero = $1, nombre_mesero = $2 WHERE id_mesero = $3 RETURNING *",
      [cedula_mesero, nombre_mesero, id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: 'Mesero no encontrado'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllMesas = async (req, res, next) => {
  try {
    const allMesas = await db.query("SELECT * FROM mesa");
    res.json(allMesas.rows);
  } catch (error) {
    next(error);
  }
};

const getMesa = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM mesa WHERE id_mesa = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Mesa no encontrada'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createMesa = async (req, res, next) => {
  const { numero_asientos, mesero } = req.body;

  try {
    const result = await db.query("INSERT INTO mesa (numero_asientos, mesero) VALUES ($1, $2) RETURNING *", [
      numero_asientos,
      mesero
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deleteMesa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM mesa WHERE id_mesa = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Mesa no encontrada'
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateMesa = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { numero_asientos, mesero } = req.body;

    const result = await db.query(
      "UPDATE mesa SET numero_asientos = $1, mesero = $2 WHERE id_mesa = $3 RETURNING *",
      [numero_asientos, mesero, id]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: 'Mesa no encontrada'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const getAllPago = async (req, res, next) => {
  try {
    const allPago = await db.query("SELECT * FROM pago");
    res.json(allPago.rows);
  } catch (error) {
    next(error);
  }
};

const getPago = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await db.query('SELECT * FROM pago WHERE id_pago = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Pago no encontrado'
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createPago = async (req, res, next) => {
  const { entidad_financiera, tipo_pago, confirmacion, descripcion } = req.body;

  try {
    const result = await db.query("INSERT INTO pago (entidad_financiera, tipo_pago, confirmacion, descripcion) VALUES ($1, $2, $3, $4) RETURNING *", [
      entidad_financiera,
      tipo_pago,
      confirmacion,
      descripcion
    ]);

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const deletePago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM pago WHERE id_pago = $1', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: 'Pago no encontrado'
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updatePago = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { entidad_financiera, tipo_pago, confirmacion, descripcion } = req.body;

    const result = await db.query(
      "UPDATE pago SET entidad_financiera = $1, tipo_pago = $2, confirmacion = $3, descripcion = $4 WHERE id_pago = $5 RETURNING *",
      [entidad_financiera, tipo_pago, confirmacion, descripcion]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: 'Pago no encontrado'
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllClientes,
  getCliente,
  createCliente,
  deleteCliente,
  updateCliente,
  getAllCocineros,
  getCocinero,
  createCocinero,
  deleteCocinero,
  updateCocinero,
  getAllMeseros,
  getMesero,
  createMesero,
  deleteMesero,
  updateMesero,
  getAllMesas,
  getMesa,
  createMesa,
  deleteMesa,
  updateMesa,
  getAllPago,
  getPago,
  createPago,
  deletePago,
  updatePago
};
