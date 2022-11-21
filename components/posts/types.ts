import { Grid } from '../../types/grid';

export interface PostGrid extends Grid {
    id?: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
    slug: string;
    content?: string;
    isFeatured?: boolean;
}
