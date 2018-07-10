'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_REPLY = exports.REPLY_TO_OTHER = exports.REPLY_TO_TOPIC = exports.LIKE_REPLY = exports.HIDE_REPLY_FORM = exports.SHOW_REPLY_FORM = exports.TOGGLE_REPLY_FORM = exports.COMPONENT_WILL_CREATE = exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sharedActions = require('../../shared/sharedActions');

var _markdown = require('markdown');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = exports.initialState = {
  pageTitle: '详情',
  topic: null,
  activeReplyId: null,
  replyOfOthers: {},
  replyOfTopic: ''
};

var COMPONENT_WILL_CREATE = exports.COMPONENT_WILL_CREATE = function COMPONENT_WILL_CREATE(state, _ref) {
  var topic = _ref.topic;

  if (topic) {
    state = (0, _sharedActions.UPDATE_HTML_TITLE)(state, topic.title);
  }
  return _extends({}, state, {
    topic: topic
  });
};

/**
 * 点击其他用户评论下的回复时，
 * 展示评论表单
 * 将当前 replyId 设置为 active 并确保 replyOfOthers[replyId] 不为 undefined
 * 如果再次点击，则收起表单
 */
var TOGGLE_REPLY_FORM = exports.TOGGLE_REPLY_FORM = function TOGGLE_REPLY_FORM(state, _ref2) {
  var activeReplyId = _ref2.activeReplyId;

  if (activeReplyId === state.activeReplyId) {
    return HIDE_REPLY_FORM(state);
  } else {
    return SHOW_REPLY_FORM(state, activeReplyId);
  }
};

var SHOW_REPLY_FORM = exports.SHOW_REPLY_FORM = function SHOW_REPLY_FORM(state, activeReplyId) {
  var replyOfOthers = state.replyOfOthers;

  if (!replyOfOthers[activeReplyId]) {
    replyOfOthers = _extends({}, replyOfOthers);
    var replyItem = state.topic.replies.find(function (item) {
      return item.id === activeReplyId;
    });
    replyOfOthers[activeReplyId] = '@' + replyItem.author.loginname + ' ';
  }

  return _extends({}, state, {
    activeReplyId: activeReplyId,
    replyOfOthers: replyOfOthers
  });
};

var HIDE_REPLY_FORM = exports.HIDE_REPLY_FORM = function HIDE_REPLY_FORM(state) {
  return _extends({}, state, {
    activeReplyId: null
  });
};

var LIKE_REPLY = exports.LIKE_REPLY = function LIKE_REPLY(state, _ref3) {
  var action = _ref3.action,
      replyId = _ref3.replyId;
  var topic = state.topic;
  var _state$userInfo = state.userInfo,
      accesstoken = _state$userInfo.token,
      userId = _state$userInfo.id;


  var replies = topic.replies.map(function (reply) {
    if (reply.id !== replyId) {
      return reply;
    }
    var ups = reply.ups;

    if (action === "down") {
      ups = ups.filter(function (id) {
        return id !== userId;
      });
    } else if (action === "up") {
      ups = ups.concat(userId);
    }
    return _extends({}, reply, {
      ups: ups
    });
  });

  topic = _extends({}, topic, { replies: replies });

  return _extends({}, state, {
    topic: topic
  });
};

var REPLY_TO_TOPIC = exports.REPLY_TO_TOPIC = function REPLY_TO_TOPIC(state, payload) {
  state = ADD_REPLY(state, payload);
  return _extends({}, state, {
    replyOfTopic: ""
  });
};

var REPLY_TO_OTHER = exports.REPLY_TO_OTHER = function REPLY_TO_OTHER(state, _ref4) {
  var replyId = _ref4.replyId,
      newReplyId = _ref4.newReplyId,
      content = _ref4.content;

  state = ADD_REPLY(state, {
    replyId: newReplyId,
    content: content
  });

  var replyOfOthers = _extends({}, state.replyOfOthers, _defineProperty({}, replyId, ""));

  return _extends({}, state, {
    replyOfOthers: replyOfOthers
  });
};

var ADD_REPLY = exports.ADD_REPLY = function ADD_REPLY(state, _ref5) {
  var replyId = _ref5.replyId,
      content = _ref5.content;
  var userInfo = state.userInfo,
      topic = state.topic;

  var replyItem = createReplyItem({ replyId: replyId, content: content, userInfo: userInfo });

  topic = _extends({}, topic, {
    replies: topic.replies.concat(replyItem)
  });

  return _extends({}, state, {
    topic: topic
  });
};

function createReplyItem(_ref6) {
  var replyId = _ref6.replyId,
      content = _ref6.content,
      userInfo = _ref6.userInfo;

  var create_at = new Date().getTime();
  return {
    id: replyId,
    author: {
      loginname: userInfo.loginname,
      avatar_url: userInfo.avatar_url
    },
    content: _markdown.markdown.toHTML(content),
    ups: [],
    create_at: create_at
  };
}