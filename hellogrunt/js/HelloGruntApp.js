define("com_example_hello_grunt/HelloGruntApp", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_vm/globals", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st, globals){
smalltalk.addPackage('HelloGruntApp');
smalltalk.packages["HelloGruntApp"].transport = {"type":"amd","amdNamespace":"com_example_hello_grunt"};

smalltalk.addClass('HelloGrunt', globals.Object, [], 'HelloGruntApp');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
protocol: 'not yet classified',
fn: function (){
var self=this;
var msg,button;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
msg="Hello world!";
button="#sayHelloGrunt"._asJQuery();
_st(button)._click_((function(){
return smalltalk.withContext(function($ctx2) {
$1=button;
$2=_st("<p>".__comma(msg)).__comma("</p>");
$ctx2.sendIdx[","]=1;
return _st($1)._after_($2);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"begin",{msg:msg,button:button},globals.HelloGrunt)})},
args: [],
source: "begin\x0a\x09\x22Makes me say hello to the user.\x22\x0a\x09| msg button |\x0a\x09msg := 'Hello world!'.\x0a\x09button := '#sayHelloGrunt' asJQuery.\x0a\x09button click: [button after: '<p>' , msg , '</p>'].",
messageSends: ["asJQuery", "click:", "after:", ","],
referencedClasses: []
}),
globals.HelloGrunt);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $MyWidget(){return globals.MyWidget||(typeof MyWidget=="undefined"?nil:MyWidget)}
return smalltalk.withContext(function($ctx1) { 
var $1;
globals.HelloGrunt.superclass.fn.prototype._initialize.apply(_st(self), []);
$1="#my-widget-wrapper"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
_st(_st($MyWidget())._new())._appendToJQuery_("#my-widget-wrapper"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.HelloGrunt)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09\x22set up my widget\x22\x0a\x09'#my-widget-wrapper' asJQuery empty.\x0a\x09MyWidget new appendToJQuery: '#my-widget-wrapper' asJQuery.",
messageSends: ["initialize", "empty", "asJQuery", "appendToJQuery:", "new"],
referencedClasses: ["MyWidget"]
}),
globals.HelloGrunt);



smalltalk.addClass('MyWidget', globals.nil, [], 'HelloGruntApp');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'various',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._div())._with_("my widget");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.MyWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09html div with: 'my widget'.",
messageSends: ["with:", "div"],
referencedClasses: []
}),
globals.MyWidget);


});
