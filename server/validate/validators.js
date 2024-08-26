import { body, validationResult } from 'express-validator';

export const validateUser = (req, res, next) => {
  const errors = validationResult(req);
  if (!req.file) {
    errors.errors.push({
      type: "field",
      msg: "should contain an image",
      path: "image",
      location: "body"
    });
  }
  if (!errors.isEmpty()) {
    return res.status(401).json({ success: false, msg: 'Validation failed', errors: errors.array() });
  }
  next();
};

export const validate = [
  body('title')
    .isLength({ min: 5 })
    .withMessage('At least 5 characters required'),

  body('about')
    .isLength({ min: 10 })
    .withMessage('should contain at least 10 characters')
];
