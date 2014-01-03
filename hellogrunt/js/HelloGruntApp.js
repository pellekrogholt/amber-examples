define("com_example_hello_grunt/HelloGruntApp", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('HelloGruntApp');
smalltalk.packages["HelloGruntApp"].transport = {"type":"amd","amdNamespace":"com_example_hello_grunt"};

smalltalk.addClass('HelloGrunt', smalltalk.Object, [], 'HelloGruntApp');
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'not yet classified',
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
return self}, function($ctx1) {$ctx1.fill(self,"begin",{msg:msg,button:button},smalltalk.HelloGrunt)})},
args: [],
source: "begin\x0a\x22Makes me say hello to the user.\x22\x0a\x0a| msg button |\x0amsg := 'Hello world!'.\x0abutton := '#sayHelloGrunt' asJQuery.\x0abutton click: [button after: '<p>' , msg , '</p>'].",
messageSends: ["asJQuery", "click:", "after:", ","],
referencedClasses: []
}),
smalltalk.HelloGrunt);


});
