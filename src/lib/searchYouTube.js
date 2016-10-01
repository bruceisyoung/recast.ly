var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {key: options.key, q: options.query, maxResults: options.max, part: 'snippet, id', type: 'video'},
    dataType: 'json',
    success: (data) => {
      callback(data.items);
    },
    error: (data) => {
      console.error('failed to search', data.responseText);sss
    }
  });
};

window.searchYouTube = searchYouTube;