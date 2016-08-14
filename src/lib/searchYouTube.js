var searchYouTube = (options, callback) => {
  // 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyDU5n4OXUOYd34Mj0QhdUzsyYhdfaDVV1c&q=cats&maxResults=10&part=snippet',
  // $.ajax({
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   type: 'GET',
  //   // dataType: 'json',
  //   data: {
  //     part: 'snippet',
  //     videoEmbeddable: true,
  //     type: 'video',
  //     key: options.key,
  //     q: options.q,
  //     maxResults: options.maxResults
  //   },
  //   sucess: callback,
  //   error: function(error) {
  //     console.log('error:', error);
  //   }
  // });


  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    videoEmbeddable: true,
    type: 'video',
    key: options.key,
    q: options.q,
    maxResults: options.maxResults
  })
  .done((data) => {
    if (callback) {
      console.log('yes cb');
      callback(data.items);
    }
    console.log('no cb');
  })
  .fail((error) => {
    error.responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });

};
window.searchYouTube = searchYouTube;


// key: AIzaSyDU5n4OXUOYd34Mj0QhdUzsyYhdfaDVV1c