import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Box, Text, Image, Heading} from 'native-base';
import {BASE_URL} from 'react-native-dotenv';
import {fetchNews} from '../services/newsApi';
import {NewsArticle} from '../types/news';

const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1); // For pagination

  const loadNews = useCallback(async () => {
    try {
      const news = await fetchNews(page);
      setArticles(prevArticles => [...prevArticles, ...news]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }, [page]);

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  return (
    <FlatList
      data={articles}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item: article}) => (
        <Pressable
          accessibilityRole="button"
          onPress={() => navigation.navigate('ArticleDetails', {article})}>
          <Box bg="white" shadow={2} rounded="lg" p={4}>
            {article.multimedia[0]?.url && (
              <Image
                source={{uri: `${BASE_URL}/${article.multimedia[0]?.url}`}}
                alt="image base"
                roundedTop="lg"
                height={400}
                width="600"
                accessibilityIgnoresInvertColors={true}
              />
            )}
            <Heading size="md" mt={2}>
              {article.abstract}
            </Heading>
            <Text mt={2}>{article.lead_paragraph}</Text>
          </Box>
        </Pressable>
      )}
      onEndReached={loadNews} // Load more news when the end of the list is reached
      onEndReachedThreshold={0.5} // Trigger the load more when the user is halfway through the last item
      testID="HomeScreen"
    />
  );
};

HomeScreen.displayName = 'HomeScreen';

export default HomeScreen;
