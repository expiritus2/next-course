import { ValidationError } from 'class-validator';
import { MessageFormatter } from 'class-validator-message-formatter';

export const formatSuccessRes = <T>(body: T) => {
    return { result: body };
};

export const formatError = (errors: ValidationError[]) => {
    // @ts-ignore
    return MessageFormatter.format(errors);
}
