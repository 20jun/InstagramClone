import React, { useEffect, useState } from 'react';
import {FlatList} from 'react-native';
import Post from '../Post';
import Stories from '../UserStoriesPreview';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';


const Feed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            // await 사용하여 데이터 불러오는 시간 벌기
            const postsData = await API.graphql(graphqlOperation(listPosts));
            setPosts(postsData.data.listPosts.items);
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
    <FlatList
    data = {posts}
    renderItem = {({item}) => <Post post = {item} />} 
    keyExtractor = {({id}) => id}
    ListHeaderComponent = {Stories}
     />
     )
    }

export default Feed;