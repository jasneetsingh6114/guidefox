const { body, param } = require('express-validator');
const settings = require('../../config/settings');
const { isValidHexColor } = require('./guide.helper');

const URL_REGEX =
  /(?:https?:\/\/(?:www\.)?|www\.)?[a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-\d@:%_+.~#?&//=]*)|(?:\/[a-zA-Z0-9@:%._+~#&//=]*)/gi;

const RELATIVE_URL_REGEX = /^\/([a-zA-Z0-9_-]+\/?)+$/;

const validateUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return RELATIVE_URL_REGEX.test(url);
  }
};

const tourValidator = [
  body('headerColor').optional().custom(isValidHexColor).withMessage('Invalid value for headerColor'),
  body('textColor').optional().custom(isValidHexColor).withMessage('Invalid value for textColor'),
  body('buttonBgColor').optional().custom(isValidHexColor).withMessage('Invalid value for buttonBgColor'),
  body('buttonTextColor').optional().custom(isValidHexColor).withMessage('Invalid value for buttonTextColor'),
  body('url').custom(validateUrl).withMessage('Invalid value for url'),
  body('size').isIn(settings.tour.size).withMessage('Invalid value for size'),
  body('finalBtnText').isString().withMessage('Invalid value for finalBtnText'),
  body('active').optional().isBoolean().withMessage('Invalid value for active'),
  body('steps').isArray().withMessage('steps must be an array'),
  body('steps.*.title').isString().withMessage('Invalid value for title'),
  body('steps.*.description').isString().withMessage('Invalid value for description'),
  body('steps.*.targetElement').isString().withMessage('Invalid value for targetElement'),
  body('steps.*.order').isInt().withMessage('Invalid value for order'),
];

const paramsIdValidator = [
  param('id').isInt().withMessage('Invalid value for id'),
]

module.exports = {
  URL_REGEX,
  validateUrl,
  tourValidator,
  paramsIdValidator,
};
