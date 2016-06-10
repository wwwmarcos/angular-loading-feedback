# angular-feedback-loading

 *Component in construction :)*

# Install

## Bower
`bower install angular-loading-feedback`

## Or Import the files in your index.  
```html
<link rel="stylesheet" href="{folders}/angular-loading-feedback.css" />
```

```html
<script src="{folders}/angular-loading-feedback.js"></script>
```  

Declare a dependency on principal module  
```javascript
angular.module('myModule', ['angular-loading-feedback']);
```

# Usage
In your index declare the directive  

```html
<loading-feedback></loading-feedback>
```

# Settings

* loading-message: _(default: null)_ message appears during the loading.  
 
* bg-color: _(default: #f2f2f2)_ background color

* text-color: _(default: #7f8c8d)_ text and loading symbol color

Example:

```html
<loading-feedback loading-message="Loading" bg-color="#4183D7" text-color="#E4F1FE"></loading-feedback>
```
##Live-demo
https://plnkr.co/edit/DYksypT1c7d0T2iKEGka?p=preview

##Demo:

_(Default settings)_

![alt tag](http://i.giphy.com/26AHEJJBoYHmPaQGA.gif)
