import { NextApiResponse } from 'next';
import HTTPMethod from 'http-method-enum';
import { CommonRequest, RegisterUserReqBody, CommonResponse } from 'types';
import { registerUser } from '../../controllers/newsletter';

const handler = async (req: CommonRequest<RegisterUserReqBody>, res: NextApiResponse<CommonResponse>) => {
    if (req.method === HTTPMethod.POST) {
       await registerUser(req, res)
    }
}

export default handler;
