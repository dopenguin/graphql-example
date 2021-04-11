# graphql-example
An example project showcasing the usage of GraphQL.

## Data
The data that can be queried is a list of books and the corresponding authors.
Their schema is as follows.

### Author

|Parameter|Type|Description|
|---------|----|-----------|
|id|`GraphQLID`|Unique id for the author.|
|name|`GraphQLString`|Name of the author.|
|language|`GraphQLString`|Native language of the author and main language for books of this author.|
|books|**[`BookType`](#book)**[]|Books written by the author|

### Book

|Parameter|Type|Description|
|---------|----|-----------|
|id|`GraphQLID`|Unique id for the book.|
|title|`GraphQLString`|Title of the book.|
|author|**[`AuthorType`](#author)**|Author of the book.|
|genre|`GraphQLString`|Genre of the book.|
|length|`GraphQLInt`|Length (in pages) of the book.|
|read|`GraphQLBoolean`|Whether the person responsible for the dataset has read the book.|


## Queries

Possible Queries include:

* book(id)
* books
* author(id)
* authors
