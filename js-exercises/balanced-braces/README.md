## Instructions

Determine if a string contains matching Braces, Brackets, and Parentheses. Additionally all Braces, Brackets, and Parentheses must be nested correctly for JavaScript code. All other characters in the string can be ignored.

**input**: String

**output**: true if all opening Braces/Brackets/Parentheses have matching closing Braces/Brackets/Parentheses that are correctly nested else false.

For Example

```js
"{}" => true
"{()[{}[]]}" => true
"{(})" => false
"{()[}[]]}" => false
"if(a==b) x = y;" => true
"if(a==b x = y;" => false
"if(x<10}(b++;}else{b+=10;}" => false
```
