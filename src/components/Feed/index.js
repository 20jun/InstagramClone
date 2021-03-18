import React from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';

const data = [
    {
    id : '1',
    user : {
        imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        name : 'me',
    },
    imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    caption : 'cute #instagram',
    likesCount : 1234,
    postedAt : '6 minutes ago',
},
{
    id : '2',
    user : {
        imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        name : 'me',
    },
    imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    caption : 'cute #instagram',
    likesCount : 1234,
    postedAt : '6 minutes ago',
},
{
    id : '3',
    user : {
        imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        name : 'me',
    },
    imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
    caption : 'cute #instagram',
    likesCount : 1234,
    postedAt : '6 minutes ago',
},
]
const Feed = () => (
    <FlatList
    data = {data}
    renderItem = {({item}) => <Post post = {item} />} 
    keyExtractor = {({id}) => id}
    ListHeaderComponent = {Stories}
     />
);

export default Feed;