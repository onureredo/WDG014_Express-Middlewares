export const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  return res.status(500).json({ Error: err.message });
};
