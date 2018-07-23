import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeHomeData = result => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
});

const addHomeList = (list, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => (dispatch) => {
  axios
    .get('/api/home.json')
    .then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
};

export const getMoreList = page => (dispatch) => {
  axios
    .get(`/api/homeList.json?page=${page}`)
    .then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
};