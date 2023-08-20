import React from 'react';
import {ScrollView} from 'react-native';
import {Text, Image, Heading, VStack, Link} from 'native-base';
import {NewsArticle} from '../types/news';

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
          source={{uri: article.multimedia[0]?.url}}
          height={250}
          width="100%"
          accessibilityIgnoresInvertColors={true}
        />
        <Heading size="lg">{article.abstract}</Heading>
        <Text color="gray.500" mb={4}>
          Published on {new Date(article.pub_date).toLocaleDateString()}
        </Text>
        <Text>{article.lead_paragraph}</Text>
        <Link mt={4} href={article.web_url} isExternal>
          <Text>Read more...</Text>
        </Link>
      </VStack>
    </ScrollView>
  );
};

ArticleDetailsScreen.displayName = 'ArticleDetailsScreen';

export default ArticleDetailsScreen;
