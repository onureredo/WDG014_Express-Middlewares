export const booksLogger = (req, res, next) => {
  console.log(`Books route accessed: ${req.method} ${req.path}`);
  next();
};
