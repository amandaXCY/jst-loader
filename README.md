# jst-loader

> 生成backbone可用的模板
> 这里使用的lodash的模板

### Install
npm i -D @amanda/jst-loader

### Use in webpack

```
{
  test: /\.(html)$/,
  use: {
    loader: '@amanda/jst-loader',
    options: {
     
    }
  }
}
```

### Options

### templateSettings

This options with lodash template sim

(https://lodash.com/docs/4.17.4#template)[https://lodash.com/docs/4.17.4#template]    

#### prettify

Type: boolean
Default: false

When doing a quick once-over of your compiled template file, it's nice to see an easy-to-read format that has one line per template. This will accomplish that.

```
options: {
  prettify: true
}
```


#### exportFormats

There are different export formats available:

* export default (default, es6 format). "Hello world" becomes 

```
export default "Hello world";
```

* module.exports (when exportAsMoudle param is set , cjs format). "Hello world" becomes 
```
module.exports = "Hello world";
```

* exports.default (when exportAsDefault param is set,  es6to5 format). "Hello world" becomes 

```
exports.default = "Hello world";
```


```
options: {
  exportAsDefault: true
}

//or 
options: {
  exportAsMoudle: true
}
```




