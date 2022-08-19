export function validateClientSchema(clientSchema) {
    return (req, res, next) => {
  
      const { error } = schema.validate(req.body, { abortEarly: false });
  
     
  
      if (error) {
        if( error.details.some(detail => detail.path.some(path => path =='name'|| path=='adress' || path =='phone'))) {
          return res.sendStatus(400)
        }
  
        return res.status(422).send(error.details.map(detail => detail.message));
      }
      console.log("vai passar do validate")
      next();
    }
  
  
  }