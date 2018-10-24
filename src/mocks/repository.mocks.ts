import {Repository} from "../models/repository.interface";
import {USER_LIST} from "./user.mocks";

const repository_list: Repository[] = [
    {
        name: 'clinical lab',
        description: 'medical website',
        owner: USER_LIST[1],
    },
    {
        name: 'schooling',
        description: 'graduation project',
        owner: USER_LIST[1],
    },
    {
        name: 'ionic',
        description: 'ionic project',
        owner: USER_LIST[0],
    }
];

export const REPOSITORY_LIST = repository_list;