import { CommonRequest, CommonResponse, RegisterUserReqBody } from 'types';
import { NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';
import { MongoClient } from 'mongodb';
import { router } from 'next/client';

export const registerUser = async (req: CommonRequest<RegisterUserReqBody>, res: NextApiResponse<CommonResponse>) => {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Invalid email address.' })
        return;
    }

    try {
        const client = await MongoClient.connect('mongodb://localhost:27017/events');
        const db = client.db();
        await db.collection('newsletters').insertOne({ email: userEmail });
        await client.close();
    } catch (err: any) {
        console.log(err);
    }
    console.log('this');

    console.log(userEmail);
    res.status(StatusCodes.CREATED).json({ message: 'Signed up!' });
}
