import { body } from 'express-validator';
import { validateFields } from '../middlewares/validate';

export const validateSendFields = [
    body('subject', 'Subject is required').not().isEmpty(),
    body('text', 'Text is required').not().isEmpty(),
    validateFields
]