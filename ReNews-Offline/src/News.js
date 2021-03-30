import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row, Button, Icon } from 'antd';

import './News.css';

export function NewsItem(props) {
  const { article } = props;
  return (
    <Card 
      loading={!article.webTitle} 
      title={article.webTitle}
      cover={
        <div className="NewsItem__image-container">
          <img src={article.fields && article.fields.thumbnail} alt={article.webTitle} className="NewsItem__image" />
        </div>
      }
      actions={[
        <Button justify="end" type="primary" size="large" href={article.webUrl} target="_blank" rel="noopener" style={{color: 'white'}}>GO <Icon type="right" /></Button>
      ]}
      bordered={false}>
        <div className="NewsItem__description">
          {article.fields && article.fields.trailText}
        </div>
    </Card>
  );
}


export function NewsList(props) { 
  return (
    <Row gutter={16}>
      {props.articles.map((article, i) => {
        return (
          <Col key={`article-${i}`} span={32} md={12} lg={8} style={{paddingTop: 8, paddingBottom: 8}}>
            <NewsItem article={article} />
          </Col>
        )
      })}
    </Row>
  );
}

NewsItem.propTypes = {
  article: PropTypes.shape({
    webTitle: PropTypes.string,
    fields: PropTypes.object,
    urlToImage: PropTypes.string,
    webUrl: PropTypes.string,
  })
};