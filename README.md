# 2021-new-taipei-city-culture-festival

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Google Map Api Setting

2023/07/27 設定限制Google Map Api只能在這2個網域下正常使用
- localhost:8080
- https://2021-new-taipei-city-culture-festival.netlify.app


### Google Cloud Storage Setting

2023/07/27 設定Google Cloud Storage的CORS如下:
```
{
 "cors": [
   {
     "origin": [
       "http://localhost:8080/", "https://2021-new-taipei-city-culture-festival.netlify.app/"
     ],
     "method": [
       "GET"
     ],
     "maxAgeSeconds": 3600
   }
 ]
}
```

Ref1: [Firebase Storage 如何跨網域設定Access-Control-Allow-Origin (CORS)](https://medium.com/@a29243004/firebase-storage-%E5%A6%82%E4%BD%95%E8%B7%A8%E7%B6%B2%E5%9F%9F%E8%A8%AD%E5%AE%9Aaccess-control-allow-origin-cors-7dc44b46a728)
Ref2: [Configuring cross-origin resource sharing (CORS)](https://cloud.google.com/storage/docs/configuring-cors#json-api) (recommended)
Ref3: [Download files with Cloud Storage on Web](https://firebase.google.com/docs/storage/web/download-files#cors_configuration)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
