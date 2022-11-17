import { NextApiResponse } from 'next';
import HTTPMethod from 'http-method-enum';
import { CreateCommentBody, CommonRequest, CommonResponse } from 'types';
import { createComment, getComments } from '../../../controllers/comments';

const handler = async (req: CommonRequest<CreateCommentBody>, res: NextApiResponse<CommonResponse>) => {
    if (req.method === HTTPMethod.POST) {
       await createComment(req, res);
    }

    if (req.method === HTTPMethod.GET) {
        await getComments(req, res);
    }
}

export default handler;
