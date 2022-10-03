import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SpacerLine from '../../components/atoms/SpacerLine';
import Page from '../../components/molecules/Page';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { chatFetching, fetchChats, IChat, selectChats } from '../../store/chatSlice';
import { ChatListItem } from './components/ChatListItem';

const ChatListScreenImpl: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const chats: IChat[] = useAppSelector(selectChats);
    const isFetching = useAppSelector(state => state.chat.isFetching);
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        dispatch(chatFetching());
        dispatch(fetchChats());
    }, []);

    useEffect(() => {
        if (!isFetching) {
            
            setIsRefreshing(false);
        }
    }, [isFetching]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Сообщения'
        })
    }, []);

    const handleRefresh = () => {
        setIsRefreshing(true);
        dispatch(chatFetching());
        dispatch(fetchChats());
    }

    return (
        <SafeAreaView
            edges={['top']}
            style={{ flex: 1, backgroundColor: '#ffffff', paddingBottom: 0 }}
        >
            <Page>
                {
                    chats.length === 0 && isFetching ?
                        <View style={styles.loader}>
                            <ActivityIndicator size="large" />
                        </View> : <FlatList
                            showsVerticalScrollIndicator={false}
                            style={styles.container}
                            keyExtractor={item => `${item.id}`}
                            data={chats}
                            renderItem={({ item }) => {
                                return (<ChatListItem
                                    {...item}
                                    isOwnMessage={false}
                                    onPress={chatId => console.log(chatId)}
                                />);
                            }}
                            initialNumToRender={8}
                            ItemSeparatorComponent={() => <SpacerLine />}
                            ListFooterComponent={isFetching && <ActivityIndicator size="large" />}
                            onRefresh={handleRefresh}
                            refreshing={isRefreshing}
                        />
                }
            </Page>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export const ChatListScreen = React.memo(ChatListScreenImpl);