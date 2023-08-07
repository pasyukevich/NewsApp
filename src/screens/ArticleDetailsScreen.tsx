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
    <ScrollView>
      <VStack space={4} p={5}>
        <Image
          source={{uri: article.urlToImage}}
          alt={article.title}
          height={250}
          width="100%"
        />
        <Heading size="lg">{article.title}</Heading>
        <Text color="gray.500" mb={4}>
          Published on {new Date(article.publishedAt).toLocaleDateString()}
        </Text>
        <Text>{article.content}</Text>
        <Link mt={4} href={article.url} isExternal>
          Read more...
        </Link>
      </VStack>
    </ScrollView>
  );
};

export default ArticleDetailsScreen;
