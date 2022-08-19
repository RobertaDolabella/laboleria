export function validateOrderSchema(schema) {
    return (req, res, next) => {
  
      const { error } = schema.validate(req.body, { abortEarly: false });
  
     
  
      if (error) {
        if( error.details.some(detail => detail.path.some(path => path =='quantity'))) {
          return res.send("A quantidade excedeu a permitida").status(400)
        }
  
        return res.status(400).send(error.details.map(detail => detail.message));
      }
      next();
    }
  
  
  }