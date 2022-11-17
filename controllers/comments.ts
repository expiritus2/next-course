import {
    Comment,
    CommonRequest,
    CreateCommentBody,
    CreateCommentResponse,
    GetCommentBody, GetCommentsResponse
} from 'types';
import { NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';
import { MongoClient } from 'mongodb';

export const createComment = async (req: CommonRequest<CreateCommentBody>, res: NextApiResponse<CreateCommentResponse>) => {
    const { email, name, text } = req.body;
    const eventId = req.query.eventId

    const client = await MongoClient.connect('mongodb://localhost:27017/events');


    if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ message: 'Invalid input.' })
        return;
    }

    const newComment = {
        email,
        name,
        text,
        eventId
    };
    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment)
    console.log(result.insertedId);
    res.status(StatusCodes.CREATED).json({ message: 'Added comment', comment: newComment });
    await client.close();
}

export const getComments = async (req: CommonRequest<GetCommentBody>, res: NextApiResponse<GetCommentsResponse>) => {
    const client = await MongoClient.connect('mongodb://localhost:27017/events');
    const db = client.db();
    const documents = await db.collection('comments')
        .find()
        .sort({ _id: -1 })
        .toArray();

    res.status(StatusCodes.OK).json({
        comments: documents as unknown as Comment[],
        message: 'Comments created successfully!'
    });
}
