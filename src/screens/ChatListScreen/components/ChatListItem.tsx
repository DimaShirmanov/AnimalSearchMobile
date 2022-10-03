import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FatImage from '../../../components/atoms/FastImage';
import Typography from '../../../components/atoms/Typography';
import { IChat } from '../../../store/chatSlice';

interface IProps {
    isOwnMessage: boolean;
    onPress: (chatId: number) => void;
}

const ChatListItemImpl: React.FC<IChat & IProps> = ({ user, placeholder }) => {
    return (
        <TouchableOpacity style={styles.wrapper}>
            <View style={styles.avatar}>
                <FatImage style={styles.image} source={{ uri: user.avatar }} />
            </View>
            <View style={styles.information}>
                <Typography variant='h3'>{user.name}</Typography>
                <Typography numberOfLines={2} variant='sub1'>{placeholder}</Typography>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    avatar: {
        marginRight: 20
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    information: {
        flex: 1,
        flexDirection: 'column'
    }
});

export const ChatListItem = React.memo(ChatListItemImpl);