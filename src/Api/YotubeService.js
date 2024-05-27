import axios from "axios"

const baseUrl = 'https://www.googleapis.com/youtube/v3';
const apiKey = 'AIzaSyCTKWk5HPf34VBjwcs8WKkvg0g8Y1YCT5U';
export const YoutubeService = {
    serachVideos: async (query) => {

        try {
            const response = await axios.get(`${baseUrl}/search`, {
                params: {
                    part: 'snippet',
                    q: query,
                    key: apiKey,
                    maxResults: 20,
                }
            })

            return response.data.items;
        } catch (error) {
            console.error('error is:', error)
        }
    }
}

