import React { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ likesCount, caption, postedAt }) => {

    const [isLiked, setIsLike] = useState()

    return (
        <View style={styles.container}>

            <View style={styles.iconsContainer}>
                <View style={styles.leftIcons}>
                    <ADIcon name='hearto' size={25} color={'#545454'} />
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