import Log from "../Models/Logs.js";

export const getLogs = async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLog = async (req, res) => {
  try {
    const { id } = req.params;
    const log = await Log.findById(id);
    if (log) {
      return res.json(log);
    }
    res.status(404).json({ message: "Log not found!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createLog = async (req, res) => {
  try {
    const log = new Log(req.body);
    await log.save();
    res.status(201).json(log);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateLog = async (req, res) => {
  const { id } = req.params;
  const log = await Log.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json(log);
};

export const deleteLog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Log deleted");
    }
    throw new Error("Log not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
