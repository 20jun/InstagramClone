import React from 'react';
import Story from '../UserStoryPreview';
import {FlatList} from 'react-native';
import styles from './styles';
import storiesData from '../../data/stories';

const Stories = () => (
    <FlatList
    data = {storiesData}
    keyExtractor = {({user : { id }}) => id}
    horizontal
    style ={styles.container}
    // 스크롤바 감추기
    showsHorizontalScrollIndicator = {false}
    
    renderItem = {({item}) => <Story story = {item} />}
    />
    )

export default Stories;