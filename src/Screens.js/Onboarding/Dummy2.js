import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import YoutubeIframe from 'react-native-youtube-iframe'
import { YoutubeService } from '../../Api/YotubeService'

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
            <TouchableOpacity style={styles.buttonstyle} onPress={() => console.warn('hi shivu')}>
                <View>
                    <Text style={styles.textStyle}>Dummy2</Text>
                </View>
            </TouchableOpacity>
            <View style={{ flex: 1, padding: 20 }}>
                <TextInput
                    placeholder="Search YouTube"
                    value={query}
                    onChangeText={setQuery}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
                />
                <Button title="Search" onPress={searchVideos} />
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
