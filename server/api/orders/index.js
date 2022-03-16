import { generatePostRequest } from '@api/requestGenerators';
import validator from './validator';
// custom order create API
export const createOrder = (app, model) => {
    // this is just an example of how you would create a custom API
    generatePostRequest(app, model, validator);
};
