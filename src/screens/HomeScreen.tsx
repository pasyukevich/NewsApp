import React, {useState, useEffect, useCallback} from 'react';
import {FlatList, Pressable} from 'react-native';
import {Box, Text, Image, Heading} from 'native-base';
import {fetchNews} from '../services/newsApi';
import {NewsArticle} from '../types';

const HomeScreen = ({navigation}) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [page, setPage] = useState(1); // For pagination

  const loadNews = useCallback(async () => {
    try {
      const news = await fetchNews('us', page);
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
            <Image
              source={{uri: article.media}}
              alt={article.title}
              roundedTop="lg"
              height={200}
              width="100"
            />
            <Heading size="md" mt={2}>
              {article.title}
            </Heading>
            <Text mt={2}>{article.excerpt}</Text>
          </Box>
        </Pressable>
      )}
      onEndReached={loadNews} // Load more news when the end of the list is reached
      onEndReachedThreshold={0.5} // Trigger the load more when the user is halfway through the last item
    />
  );
};

export default HomeScreen;
