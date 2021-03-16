import React from 'react';
import Story from '../Story';
import {View, FlatList} from 'react-native';
import styles from './styles';

const data = [
    {
        imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        name : 'Spongebob',
    },
    {
        imageUri : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/ddyapdt-8a4e02bf-aa65-4665-8507-f4d8b02aa3b5.png/v1/fill/w_1280,h_1280,strp/patrick_star_by_jcp_johncarlo_ddyapdt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjgwIiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kZHlhcGR0LThhNGUwMmJmLWFhNjUtNDY2NS04NTA3LWY0ZDhiMDJhYTNiNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HQTpezLdyxj_6Bej_BQqfvtxGIrn5CiqZ9fIiR2uRBg',
        name : 'Patrick',
    },
    {
        imageUri : 'https://blog.kakaocdn.net/dn/r8T8B/btqTlFn3yvp/PsUJfx1ESYihMMHkpFxYN1/img.jpg',
        name : 'Squidward',
    },
    {
        imageUri : 'https://img.insight.co.kr/static/2019/07/14/700/7py671w40c168y1pd42j.jpg',
        name : 'Stingy',
    },
    {
        imageUri : 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
        name : 'Spongebob',
    },
    {
        imageUri : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/90ad8232-4e09-4675-b9e7-bc2898960870/ddyapdt-8a4e02bf-aa65-4665-8507-f4d8b02aa3b5.png/v1/fill/w_1280,h_1280,strp/patrick_star_by_jcp_johncarlo_ddyapdt-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjgwIiwicGF0aCI6IlwvZlwvOTBhZDgyMzItNGUwOS00Njc1LWI5ZTctYmMyODk4OTYwODcwXC9kZHlhcGR0LThhNGUwMmJmLWFhNjUtNDY2NS04NTA3LWY0ZDhiMDJhYTNiNS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HQTpezLdyxj_6Bej_BQqfvtxGIrn5CiqZ9fIiR2uRBg',
        name : 'Patrick',
    },
    {
        imageUri : 'https://blog.kakaocdn.net/dn/r8T8B/btqTlFn3yvp/PsUJfx1ESYihMMHkpFxYN1/img.jpg',
        name : 'Squidward',
    },
    {
        imageUri : 'https://img.insight.co.kr/static/2019/07/14/700/7py671w40c168y1pd42j.jpg',
        name : 'Stingy',
    },
]

const Stories = () => (
    <FlatList
    data = {data}
    keyExtractor = {({name}) => name}
    horizontal
    style ={styles.container}
    // 스크롤바 감추기
    showsHorizontalScrollIndicator = {false}
    
    renderItem = {({item}) => <Story imageUri = {item.imageUri} name = {item.name}/>}
    />
    )

export default Stories;