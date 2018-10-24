import {User} from '../models/user.interface';

const userList: User[] = [
    {
        name: 'mohammed',
        company: 'almoahser',
        location: 'maadi',
        bio: 'web developer',
        avatar_url: 'https://avatars1.githubusercontent.com/u/24924500?s=400&v=4',
        email: 'muhammed7amza@gmail.com',
        user_name: 'mohammed'
    },
    {
        name: 'ahmed',
        company: 'instabug',
        location: 'cairo',
        bio: 'web developer',
        avatar_url: 'https://avatars1.githubusercontent.com/u/24924400?s=400&v=4',
        email: 'ahmednader@gmail.com',
        user_name: 'ahmed'
    }
];

export const USER_LIST = userList;