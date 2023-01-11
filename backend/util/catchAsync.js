const catchAsync = (fn) => (req, res, next) => {
  fn(req, res, next).catch((err) => {

    if(err.appError){
      //handle error when provoked by appError
      res.status(err.statusCode).json({ status: err.status, message: err.message });
    } else {
      const message = err.errors.description.properties.message;

      res.status(400).json({ status: 'error', message: 'Something went wrong' });
    }
  });
};

export default catchAsync;