import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'
import { YoutubeService } from '../../Api/YotubeService'
import { styles } from '../../Utils/styles'

const Dummy2 = () => {

    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, setVideos] = useState([])
    const [query, setQuery] = useState('')


    const searchVideos = async () => {
        try {
            const result = await YoutubeService.serachVideos(query);
            setVideos(result)
        } catch (error) {
            console.error(error)

        }
    }
    return (
        <SafeAreaView>
            <View style={{ padding: 20 }}>
                <TextInput
                    placeholder="Search YouTube"
                    value={query}
                    onChangeText={setQuery}
                    style={{ height: 40, width: '100%', borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                />
                <Button title='search' onPress={searchVideos} />
                {selectedVideo && (
                    <View style={{ height: 300, marginVertical: 20 }}>
                        <YoutubeIframe
                            videoId={selectedVideo}
                            height={300}
                            play={true}
                        />
                    </View>
                )}
                <FlatList
                    data={videos}
                    keyExtractor={(item) => item.id.videoId}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.snippet.title}</Text>
                            <Text>{item.snippet.description}</Text>
                            <Button
                                title="Play Video"
                                onPress={() => setSelectedVideo(item.id.videoId)}
                            />
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Dummy2
