import { plainToInstance } from 'class-transformer';
import { validateOrReject, ValidationError } from 'class-validator';

type ValidateReqBody = {
    isValid: boolean;
    error: any;
    instance: any
}

export const validateReqBody = async (body: any, Validator: any): Promise<ValidateReqBody> => {
    const instance = plainToInstance(Validator, body);

    try {
        await validateOrReject(instance);
    } catch (err: any) {
        return { isValid: false, error: err as ValidationError, instance };
    }

    return { isValid: true, error: null, instance };
}
