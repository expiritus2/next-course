import { NextApiRequest } from 'next';

export interface CommonRequest<T> extends NextApiRequest {
    body: T;
}

export interface CommonResponse {
    message: string;
}
