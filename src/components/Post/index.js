import React from 'react';
import {View} from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


const Post = ({post}) => (
    <View>
        <Header imageUri = {post.user.imageUri} name = {post.user.name} />
        <Body imageUri = {post.user.imageUri}/>
        <Footer 
        likesCount = {post.likesCount} 
        caption = {post.caption}
        postedAt = {post.postedAt}
        />
    </View>
)

export default Post;