export function validateCakeSchema(schema) {
  return (req, res, next) => {

    const { error } = schema.validate(req.body, { abortEarly: false });

   

    if (error) {
      if( error.details.some(detail => detail.path.some(path => path =='name'|| path=='price' || path =='description'))) {
        return res.sendStatus(400)
      }
      if(error.details.some(detail => detail.path.some(path=> path=== 'image'))){
        return res.sendStatus(422)
      }

      return res.status(422).send(error.details.map(detail => detail.message));
    }
    next();
  }


}



