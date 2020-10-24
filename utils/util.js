function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
};

var index = require('../data/data_index.js')
var index_next = require('../data/data_index_next.js')
var discovery = require('../data/data_discovery.js')
var discovery_next = require('../data/data_discovery_next.js')

function getData(url){
  return new Promise(function(resolve, reject){
    wx.request({
      url: url,
      data: {},
      header: {
        //'Content-Type': 'application/json'
      },
      success: function(res) {
        var data= {
          "id": 1,
              "data": [
              {
                  "question_id": 1,
                  "answer_id": 3,
                  "feed_source_id": 23,
                  "feed_source_name": "Rebecca",
                  "feed_source_txt": "赞了回答1",
                  "feed_source_img": "../../images/icon1.jpeg",
                  "question": "选择 Kindle 而不是纸质书的原因是什么？",
                  "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 2,
                  "answer_id": 25,
                  "feed_source_id": 24,
                  "feed_source_name": "Alex",
                  "feed_source_txt": "回答了问题2",
                  "feed_source_img": "../../images/icon8.jpg",
                  "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
                  "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 3,
                  "answer_id": 61,
                  "feed_source_id": 25,
                  "feed_source_name": "George",
                  "feed_source_txt": "赞了回答3",
                  "feed_source_img": "../../images/icon9.jpeg",
                  "question": "气象铁塔的辐射大吗？",
                  "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 4,
                  "answer_id": 3,
                  "feed_source_id": 23,
                  "feed_source_name": "Rebecca",
                  "feed_source_txt": "赞了回答4",
                  "feed_source_img": "../../images/icon1.jpeg",
                  "question": "选择 Kindle 而不是纸质书的原因是什么？",
                  "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 5,
                  "answer_id": 25,
                  "feed_source_id": 24,
                  "feed_source_name": "Alex",
                  "feed_source_txt": "回答了问题5",
                  "feed_source_img": "../../images/icon8.jpg",
                  "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
                  "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 6,
                  "answer_id": 61,
                  "feed_source_id": 25,
                  "feed_source_name": "George",
                  "feed_source_txt": "赞了回答6",
                  "feed_source_img": "../../images/icon9.jpeg",
                  "question": "气象铁塔的辐射大吗？",
                  "answer_ctnt": "我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 7,
                  "answer_id": 3,
                  "feed_source_id": 23,
                  "feed_source_name": "Rebecca",
                  "feed_source_txt": "赞了回答7",
                  "feed_source_img": "../../images/icon1.jpeg",
                  "question": "选择 Kindle 而不是纸质书的原因是什么？",
                  "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
                  "good_num": "112",
                  "comment_num": "18"
              },
              {
                  "question_id": 8,
                  "answer_id": 25,
                  "feed_source_id": 24,
                  "feed_source_name": "Alex",
                  "feed_source_txt": "回答了问题8",
                  "feed_source_img": "../../images/icon8.jpg",
                  "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
                  "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
                  "good_num": "112",
                  "comment_num": "18"
              }
      
          ]
        }
        console.log("success")
        resolve(data)
      },
      fail: function (res) {
        reject(res)
        console.log("failed")
      }
    })
  })
}

function getData2(){
  return index.index;
}

function getNext(){
  return index_next.next;
}

function getDiscovery(){
  return discovery.discovery;
}

function discoveryNext(){
  return discovery_next.next;
}



module.exports.getData = getData;
module.exports.getData2 = getData2;
module.exports.getNext = getNext;
module.exports.getDiscovery = getDiscovery;
module.exports.discoveryNext = discoveryNext;




