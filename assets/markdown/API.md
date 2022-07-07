# API POINTS



## BIODATA

### Menampilkan biodata user
```
GET: /biodata

response:
[
  {
    "id"              : "",
    "nama_lengkap"    : "",
    "nama_panggilan"  : "",
    "tgl_lahir"       : "",
    "deskripsi"       : "",
    "avatar"          : ""
  },
  {
    ...
  }
]
```
### Menampilkan biodata user berdasarkan ```id```
```
GET: /biodata/[id]

response:
{
  "id"              : "",
  "nama_lengkap"    : "",
  "nama_panggilan"  : "",
  "tgl_lahir"       : "",
  "deskripsi"       : "",
  "avatar"          : ""
}
```
### Menambahkan biodata user
```
POST: /biodata

data:
{
  "nama_lengkap"    : "",
  "nama_panggilan"  : "",
  "tgl_lahir"       : "",
  "deskripsi"       : "",
  "avatar"          : ""
}

response:
true    //if true
false   //if false
```
### Mengubah biodata user
```
PUT: /biodata

data:
{
  "nama_lengkap"    : "",
  "nama_panggilan"  : "",
  "tgl_lahir"       : "",
  "deskripsi"       : "",
  "avatar"          : ""
}

response:
true    //if true
false   //if false
```
### Menghapus biodata user
```
DELETE: /biodata/[id]

response:
true    //if true
false   //if false
```
## ARTICLE
### Menampilkan seluruh article
```
GET: /article

response:
[
  {
    "id"        : "",
    "title"     : "",
    "author"    : "",
    "markdown"  : "",
    "thumbnail" : "",
    "content"   : ""
  },
  {
    ...
  }
]
```
### Menampilkan article berdasarkan ```id```
```
GET: /article/[id]

response:
{
  "id"        : "",
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}
```
### Menambahkan article
```
POST: /article

data:
{
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}

response:
true    //if true
false   //if false
```
### Mengubah article
```
PUT: /article

data:
{
  "title"     : "",
  "author"    : "",
  "markdown"  : "",
  "thumbnail" : "",
  "content"   : ""
}

response:
true    //if true
false   //if false
```
### Menghapus article
```
DELETE: /article

response:
true    //if true
false   //if false
```

## PORTFOLIO
### Menampilkan seluruh data portfolio
```
GET: /portfolio

response:
[
  {
    "id"          : "",
    "title"       : "",
    "deskripsi"   : "",
    "url"         : "",
    "thumbnail"   : ""
  },
  {
    ...
  }
]
```
### Menampilkan data portfolio berdasarkan ```id```
```
GET: /portfolio/[id]

response:
{
  "id"          : "",
  "title"       : "",
  "deskripsi"   : "",
  "url"         : "",
  "thumbnail"   : ""
}
```
### Menambahkan data porfolio
```
POST: /portfolio

data:
{
  "title"       : "",
  "deskripsi"   : "",
  "url"         : "",
  "thumbnail"   : "" 
}

response:
true    //if true
false   //if false
```

### Mengubah data porfolio
```
PUT: /portfolio

data:
{
  "title"       : "",
  "deskripsi"   : "",
  "url"         : "",
  "thumbnail"   : "" 
}

response:
true    //if true
false   //if false
```
### Menghapus data portfolio
```
DELETE: /portfolio/[id]

response:
true    //if true
false   //if false
```
## SOCIAL
### Menampilkan seluruh data social media
```
GET: /social

response:
[
  {
    "id"          : "",
    "instagram"   : "",
    "github"      : "",
    "email"       : ""
  },
  {
    ...
  }
]
```
### Menampilkan data social media berdasarkan ```id```
```
GET: /social/[id]

response:
{
  "id"          : "",
  "instagram"   : "",
  "github"      : "",
  "email"       : ""
}
```
### Menambahkan data social media
```
POST: /social

data:
{
  "instagram"   : "",
  "github"      : "",
  "email"       : "" 
}

response:
true    //if true
false   //if false
```

### Mengubah data social media
```
PUT: /social

data:
{
  "instagram"   : "",
  "github"      : "",
  "email"       : "" 
}

response:
true    //if true
false   //if false
```
### Menghapus data social media
```
DELETE: /social/[id]

response:
true    //if true
false   //if false
```
