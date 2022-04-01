import { PostModel } from "./PostModel";

export class UserModel{

    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public photo: string;
    public type: string;
    public post: PostModel[];
}