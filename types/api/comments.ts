import { CommonResponse } from './common';

export type CreateCommentBody = {
    email: string;
    name: string;
    text: string;
};

export type GetCommentBody = {};

export type Comment = {
    id?: string,
    email: string,
    name: string,
    text: string
}

export interface CreateCommentResponse extends CommonResponse {
    comment?: Comment
}

export interface GetCommentsResponse extends CommonResponse {
    comments: Comment[];
}
