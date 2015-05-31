# mini ajax

A micro ajax module

## useage

```
npm install miniajax
```

```javascript
//browser
var ajax = window.returnExports.ajax
//get
ajax({
  url: 'xxxx',
  onSuccess: function(data) {
    alert('success: ' + data)
  },
  onError: function(msg) {
    alert('error: ' + data)
  }
})

//post
ajax({
  type: 'post',
  url: 'xxxx',
  data: 'xxx=sfjsldf',
  onSuccess: function(data) {
    alert('success: ' + data)
  },
  onError: function(msg) {
    alert('error: ' + data)
  }
})
```
## test

```bash
npm install
node testServer.js
```
