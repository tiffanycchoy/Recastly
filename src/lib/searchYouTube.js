var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      key: options.key,
      videoEmbeddable: true,
      type: 'video'
    },
    success(data) {
      console.log('successfully retrieved video data from youtube ', data);
      callback(data);
    },
    error(err) {
      console.log('error retrieving video data from youtube ', err);
    }
  })
};

window.searchYouTube = searchYouTube;
