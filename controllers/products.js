exports.getProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all products",
  });
};

exports.getProduct = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show product with id ${req.params.id}`,
  });
};

exports.createtProduct = (req, res, next) => {
  res.status(201).json({
    success: true,
    msg: "create new products",
  });
};

exports.updateProduct = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `update product with id ${req.params.id}`,
  });
};

exports.deleteProducts = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `delete product with id ${req.params.id}`,
  });
};
