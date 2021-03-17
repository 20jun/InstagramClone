import React, { useState, useEffect } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ likesCount : likesCountProp, caption, postedAt }) => {

    const [isLiked, setIsLike] = useState(false);

    const [likesCount, setLikesCount] = useState(0);

    // 좋아요 버튼 누를 때 실행
    const onLikePressed = () => {
        const amount = isLiked ? -1 : 1;
        setLikesCount(likesCount + amount)

        // 좋아요 버튼 누를 시 색상 변경
        setIsLike(!isLiked);
    }

    useEffect( () => {
        setLikesCount(likesCountProp)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress = {onLikePressed}>
                        {isLiked ?
                        <ADIcon name='heart' size={25} color={'#e73838'}  />
                        : <ADIcon name='hearto' size={25} color={'#545454'}  />
                    }
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={23} color={'#545454'} />
                    <Ionicons name='paper-plane-outline' size={25} color={'#545454'} />
                </View>
                <FAIcon name='bookmark-o' size={25} color={'#545454'} />
            </View>

            <Text style={styles.likes}>{likesCount} Likes</Text>
            <Text style={styles.caption}>{caption}</Text>
            <Text style={styles.postedAt}>{postedAt}</Text>
        </View>
    )
}

export default Footer;