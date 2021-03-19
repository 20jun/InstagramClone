mutation user1 {
  createUser(input: {name: "spongebob", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7diQyJn_it7n8lw2NiT8_y-15v-uZMcsvQw&usqp=CAU"}) {
    id
    name
  }
}

mutation user2 {
  createUser(input: {name: "patrickstar", image: "https://pbs.twimg.com/media/Dg3A4P6UEAEcG_u.jpg"}) {
    id
    name
  }
}

mutation user3 {
  createUser(input: {name: "jingjing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4DiFPRENGhwNAOunYCd8c67cI5jBaJNcZqQ&usqp=CAU"}) {
    id
    name
  }
}

mutation user4 {
  createUser(input: {name: "memememe", image: "https://img1.daumcdn.net/thumb/S272x320/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbAO90T%2FbtqNe7kFzqK%2Fj2riZqmkPKWJB6LZnAP1IK%2Fimg.jpg"}) {
    id
    name
  }
}

mutation post1 {
  createPost(input: {userID: "",likes: 0,caption: "Hey there", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story1 {
  createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post2 {
  createPost(input: {userID: "",likes: 12,caption: "Check this out", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story2 {
  createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post3 {
  createPost(input: {userID: "", likes: 10,caption: "Like4Likes", image: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story3 {
  createStory(input: {userID: "", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Eiffel_Tower_Vertical.JPG"}) {
    id
    image
    user {
      name
    }
  }
}

mutation post4 {
  createPost(input: {userID: "",likes: 40, caption: "isn't this awesome", image: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}) {
    id
    image
    caption
    user {
      name
    }
  }
}

mutation story4 {
  createStory(input: {userID: "", image: "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}) {
    id
    image
    user {
      name
    }
  }
}

query listPosts {
  listPosts {
    items {
      caption
      createdAt
      id
      image
      user {
        id
        image
        name
      }
    }
  }
}

query listStorys {
  listStorys {
    items {
      createdAt
      id
      image
      user {
        id
        image
        name
      }
    }
  }
}