import React, { useState, useEffect } from 'react';
import { 
    View,
    Text, 
    SafeAreaView, 
    ImageBackground, 
    ActivityIndicator,
    TextInput,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { API, graphqlOperation } from 'aws-amplify';

import { listStorys } from '../../graphql/queries';
import storiesData from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const StoryScreen = () => {

    const [stories, setStories] = useState([]);
    const [activeStoryIndex, setActiveStoryIndex] = useState(null);
    const [userStories, setUserStories] = useState(null);

    const route = useRoute();
    // useEffect(function, deps)
    // - function : 수행하고자 하는 작업
    // - deps : 배열 형태이며, 배열 안에는 검사하고자 하는 특정 값 or 빈 배열

    // 빈 배열을 넣을 시 컴포넌트가 화면에 가장 처음 렌더링 될 때 한 번만 실행
    useEffect(() => {
        fetchStories();
        setActiveStoryIndex(0);
    }, []);

    const fetchStories = async () => {
        try {
            const storiesData = await API.graphql(graphqlOperation(listStorys));
            console.log()
            setStories(storiesData.data.listStorys.items);
        } catch (e) {
            console.log(e)
        }
    }
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

    // setTimeout(() => {
    //     handleNextStory();

    // }, 5000);
    const handleNextStory = () => {
        if (activeStoryIndex >= stories.length - 1) 
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

    }

    const handlePress = (evt) => {

        // 클릭한(터치한) 곳의 x 좌표값을 저장
        const x = evt.nativeEvent.locationX;
        
        // 응용 프로그램 창의 너비를 가져옴.
        const screenWidth = Dimensions.get('window').width;
        let isRight = true;

        // x좌표가 너비를 2로 나눈 것 보다 작으면(가운데 기준 왼쪽) 이전 스토리 
        if (x < screenWidth / 2) {
            handlePrevStory();
        }
        // 다음 스토리
        else
        {
            handleNextStory();
        }
    }
    if (!stories || stories.length === 0) {
        return (
        <SafeAreaView>
            {/* 로딩 표시기 */}
            <ActivityIndicator />
        </SafeAreaView>
        )
    }
    const activeStory = stories[activeStoryIndex];

    return (
        <SafeAreaView style = {styles.container}>
            <TouchableWithoutFeedback onPress = {handlePress}>
                <ImageBackground style = {styles.image} source = {{uri : activeStory.image}}>
                    <View style = {styles.userInfo}>
                        <ProfilePicture uri = {activeStory.user.image} size = {50}/>
                        <Text style = {styles.userName}>{activeStory.user.name}</Text>
                        <Text style = {styles.postedTime}>{activeStory.createdAt}</Text>
                    </View>
                    <View style = {styles.bottomContainer}>
                        <View style = {styles.cameraButton}>
                            <Feather name = 'camera' size = {30} color = {'#ffffff'}/>
                        </View>
                        <View style = {styles.textInputContainer}>
                            <TextInput 
                            style = {styles.textInput}
                            editable 
                            placeholder = 'Send message'
                            placeholderTextColor = {'white'}
                            />
                        </View>
                        <View style = {styles.messageButton}>
                            <Ionicons name = 'paper-plane-outline' size = {35} color = {'#ffffff'} />
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
    </SafeAreaView>
    )
};

export default StoryScreen;