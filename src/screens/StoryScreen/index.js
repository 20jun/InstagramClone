import React, { useState, useEffect } from 'react';
import { 
    Text, 
    SafeAreaView, 
    ImageBackground, 
    ActivityIndicator, 
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import storiesData from '../../data/stories';

import styles from './styles';

const StoryScreen = () => {

    const [userStories, setUserStories] = useState(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);


    const route = useRoute();

    // useEffect(function, deps)
    // - function : 수행하고자 하는 작업
    // - deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

    // 빈 배열을 넣을 시 컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행
    useEffect(() => {
        const userId = route.params.userId;
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        console.log(userStories);
        setUserStories(userStories);
        setActiveStoryIndex(0);
    }, []);

    // 특정값이 업데이트 될 때 실행하고 싶을 때는 배열 안에 검사하고 싶은 값을 넣어준다.
    // 업데이트 될 때만 실행하는 것이 아니라 마운트 될 때도 실행된다.
    // useEffect(() => {
    //     if (!userStories)
    //     {
    //         return;
    //     }
    //     if (activeStoryIndex < 0)
    //     {
    //         setActiveStoryIndex(0);
    //         return;
    //     };

    //     if (activeStoryIndex >= userStories.stories.length)
    //     {
    //         setActiveStoryIndex(userStories.stories.length - 1);
    //     };
    // }, [activeStoryIndex]);
    // 아래 코드로 인해 사용할 필요가 없어졌음!

    const handleNextStory = () => {
        if (activeStoryIndex >= userStories.stories.length - 1) 
        {
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    };
    
    const handlePrevStory = () => {
        if (activeStoryIndex <= 0)
        {
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);

    };

    const handlePress = (evt) => {

        const x = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
        let isRight = true;

        if (x < screenWidth / 2) {
            handlePrevStory();
        }
        else
        {
            handleNextStory();
        }
    }
    if (!userStories) {
        return (
        <SafeAreaView>
            <ActivityIndicator />
        </SafeAreaView>
        )
    }
    const activeStory = userStories.stories[activeStoryIndex];

    return (
        <SafeAreaView style = {styles.container}>
            <TouchableWithoutFeedback onPress = {handlePress}>
                <ImageBackground style = {styles.image} source = {{uri : activeStory.imageUri}}>
                </ImageBackground>
            </TouchableWithoutFeedback>
    </SafeAreaView>
    )
};

export default StoryScreen;