import React from 'react';
import {ScrollView} from 'react-native';
import {Text, Image, Heading, VStack, Link} from 'native-base';
import {NewsArticle} from '../types';

interface ArticleDetailsProps {
  route: {
    params: {
      article: NewsArticle;
    };
  };
}

const ArticleDetailsScreen = ({route}: ArticleDetailsProps) => {
  const {article} = route.params;

  return (
    <ScrollView testID="ArticleDetailsScreen">
      <VStack space={4} p={5}>
        <Image
          source={{uri: article.media}}
          alt={article.title}
          height={250}
          width="100%"
          accessibilityIgnoresInvertColors={true}
        />
        <Heading size="lg">{article.title}</Heading>
        <Text color="gray.500" mb={4}>
          Published on {new Date(article.published_date).toLocaleDateString()}
        </Text>
        <Text>{article.summary}</Text>
        <Link mt={4} href={article.link} isExternal>
          <Text>Read more...</Text>
        </Link>
      </VStack>
    </ScrollView>
  );
};

ArticleDetailsScreen.displayName = 'ArticleDetailsScreen';

export default ArticleDetailsScreen;
