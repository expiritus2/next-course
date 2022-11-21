import { NextApiRequest, NextApiResponse } from 'next';
import HTTPMethod from 'http-method-enum';
import { IsEmail, IsString } from 'class-validator';
import { StatusCodes } from 'http-status-codes';
import { validateReqBody } from '../../../errors/error-handler';
import { formatError, formatSuccessRes } from '../../../lib/formatters';
import { MongoClient } from 'mongodb';

class ContactRequestBody {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsString()
    message: string;
}

interface ContactRequest extends NextApiRequest {
    body: ContactRequestBody
}

const createContact = async (req: ContactRequest, res: NextApiResponse) => {
    const { isValid, instance, error } = await validateReqBody(req.body, ContactRequestBody)

    if (!isValid) {
        return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json(formatError(error));
    }

    const client = await MongoClient.connect(`mongodb://localhost:27017/blog`);
    const db = client.db();
    await db.collection('messages').insertOne(instance);
    await client.close();

    return res.status(StatusCodes.CREATED).json(formatSuccessRes<ContactRequestBody>(instance));
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === HTTPMethod.POST) {
        await createContact(req, res);
    }
};

export default handler;
