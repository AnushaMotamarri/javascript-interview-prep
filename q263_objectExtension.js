// var newObject = {};
// newObject.name='Anusha'
// Object.preventExtensions(newObject); // Prevent objects are non-extensible
// Object.isExtensible(newObject); // false
// newObject.lastName='Motamarri'
// newObject.name='Anusha1' //modification is possible on name
// console.log(newObject)


// var sealedObject ={}
// sealedObject.name='Anusha'
// Object.seal(sealedObject); // Sealed objects are non-extensible
// Object.isExtensible(sealedObject); // false
// sealedObject.lastName='Motamarri'
// sealedObject.name='Anusha1' //modification with seal is possible
// console.log(sealedObject)


// var frozenObject ={}
// frozenObject.name='Anusha'

//  Object.freeze(frozenObject); // Frozen objects are non-extensible
//  frozenObject.lastName='Motamarri'
//  frozenObject.name='Anusha1'//modification with freeze is not possible
// Object.isExtensible(frozenObject);
// console.log(frozenObject) 


eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 2={};2.4=\'7\'3.d(2);3.a(2);2.6=\'8\'2.4=\'c\'b.9(2)5 1={}1.4=\'7\'3.e(1);3.a(1);1.6=\'8\'1.4=\'c\'b.9(1)5 0={}0.4=\'7\'3.f(0);0.6=\'8\'0.4=\'c\'3.a(0);b.9(0)',16,16,'frozenObject|sealedObject|newObject|Object|name|var|lastName|Anusha|Motamarri|log|isExtensible|console|Anusha1|preventExtensions|seal|freeze'.split('|'),0,{}))
