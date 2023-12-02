# Rating Service

## Description
A mini application helps to post rating and comments with some additional fetching functionalities.

### What is Required ?
node should be installed
some basic libraries

``` js
npm i express@4.17.1
npm i mongoose@5.10.13
npm i cors@2.8.5
npm i joi@17.3.0
npm i dotenv@8.2.0
```
# All APIs { BASE_URL = 'localhost:3001/api' }

#### Get User
{BASE_URL}/users

```
response : {
    status : true,
    message : 'User Fetched Successfully',
    data : {
        "_id": "24u2349fifjsidj390534fgd",
        "name": "XYZ",
        "age": 20
        } 
}
```

### Post User
{BASE_URL}/users

```
request.body : {
    "name" : "XYZ",
    "age" : 20
}

response : {
    status : true,
    message : 'User created Successfully',
    data : {
        "_id": "24u2349fifjsidj390534fgd",
        "name": "XYZ",
        "age": 20
        } 
}
```

### Post Movie

```
request.body : {
    "name" : "Movie-1"
}

response : {
    status : true,
    message : 'Movie created Successfully',
    data : {
        "_id": "24u2349fifjsidj390534fgd",
        "name": "Movie-1"
        } 
}
```

### Get Movie
{BASE_URL}/movies

```
response : {
    status : true,
    message : 'Movie Fetched Successfully',
    data : {
        "_id": "24u2349fifjsidj390534fgd",
        "name": "Movie-1"
        } 
}
```

## Rating should be between 1 - 5 (Inclusive Boundary)

### Post Rating
{BASE_URL}/movieRating

```
request.body : {
    userId : '132432jdjfksflksdjfkdf',
    movieId : 'dfdsjfksj32435i40ifkjf',
    comment : 'Comment-1',
    rating : 2
}

response : {
    status : true,
    message : 'Rating added successfully',
    data : {
        _id : '132dfjdfjdkfjk34u3u',
        userId : '132432jdjfksflksdjfkdf',
        movieId : 'dfdsjfksj32435i40ifkjf',
        comment : 'Comment-1',
        rating : 2
    }
}
```

### Get Rating With Pagination 
{BASE_URL}/movieRating

```
request.query : {
    pagination : true || false,
    limit : 5,
    skip : 5,
    rating : 1(Asc) || -1(Desc) 
}

response : {
    {
        comment : 'Comment-1',
        rating : 1
    }
}
``` 

### Get Rating With MovieId

```
request.body : {
    movieId : '12dffsgfjdskfj454ljfksd'
}

response : {
    { "_id" : { "rating" : 1 }, "count" : 1 }
    { "_id" : { "rating" : 5 }, "count" : 2 }
    { "_id" : { "rating" : 3 }, "count" : 1 }
    { "_id" : { "rating" : 2 }, "count" : 2 }
}
```


