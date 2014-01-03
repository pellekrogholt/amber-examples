define("dk_itu_app_messages/AppMessages", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('AppMessages');
smalltalk.packages["AppMessages"].transport = {"type":"amd","amdNamespace":"dk_itu_app_messages"};

smalltalk.addClass('App', smalltalk.Object, ['mainView'], 'AppMessages');
smalltalk.App.comment="App Messages\x0a\x0aPlay around with App in the Workspace\x0a\x0a\x09App new messageItems";
smalltalk.addMethod(
smalltalk.method({
selector: "buildUI",
category: 'not yet classified',
fn: function (){
var self=this;
function $MainView(){return smalltalk.MainView||(typeof MainView=="undefined"?nil:MainView)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1="#container"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._empty();
self["@mainView"]=_st($MainView())._new();
_st(self["@mainView"])._appendToJQuery_("#container"._asJQuery());
return self}, function($ctx1) {$ctx1.fill(self,"buildUI",{},smalltalk.App)})},
args: [],
source: "buildUI\x0a\x09'#container' asJQuery empty.\x0a\x09mainView := MainView new.\x0a\x09mainView appendToJQuery: '#container' asJQuery.",
messageSends: ["empty", "asJQuery", "new", "appendToJQuery:"],
referencedClasses: ["MainView"]
}),
smalltalk.App);

smalltalk.addMethod(
smalltalk.method({
selector: "mainView",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@mainView"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"mainView",{},smalltalk.App)})},
args: [],
source: "mainView\x0a\x09^ mainView",
messageSends: [],
referencedClasses: []
}),
smalltalk.App);


smalltalk.App.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "begin",
category: 'bootstrapping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@instance"]=self._new();
_st(self["@instance"])._buildUI();
return self}, function($ctx1) {$ctx1.fill(self,"begin",{},smalltalk.App.klass)})},
args: [],
source: "begin\x0a\x09instance := self new.\x0a\x09instance buildUI.",
messageSends: ["new", "buildUI"],
referencedClasses: []
}),
smalltalk.App.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@instance"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.App.klass)})},
args: [],
source: "instance\x0a\x09^ instance",
messageSends: [],
referencedClasses: []
}),
smalltalk.App.klass);


smalltalk.addClass('MainView', smalltalk.Widget, ['tagBrush', 'messageCollectionView'], 'AppMessages');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $MessageCollectionView(){return smalltalk.MessageCollectionView||(typeof MessageCollectionView=="undefined"?nil:MessageCollectionView)}
function $MessageCollection(){return smalltalk.MessageCollection||(typeof MessageCollection=="undefined"?nil:MessageCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($MessageCollectionView())._new();
$ctx1.sendIdx["new"]=1;
self["@messageCollectionView"]=_st($1)._messageCollection_(_st(_st($MessageCollection())._new())._title_("All messages"));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.MainView)})},
args: [],
source: "initialize\x0a    messageCollectionView := MessageCollectionView new messageCollection: (MessageCollection new title: 'All messages').",
messageSends: ["messageCollection:", "new", "title:"],
referencedClasses: ["MessageCollectionView", "MessageCollection"]
}),
smalltalk.MainView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@tagBrush"]=html;
$1=_st(html)._div();
_st($1)._id_("ui");
$2=_st($1)._with_(self["@messageCollectionView"]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MainView)})},
args: ["html"],
source: "renderOn: html\x0a\x09tagBrush := html.\x09\x0a\x09html div id: 'ui'; with: messageCollectionView.",
messageSends: ["id:", "div", "with:"],
referencedClasses: []
}),
smalltalk.MainView);



smalltalk.addClass('MessageCollection', smalltalk.Object, ['messageItems', 'title'], 'AppMessages');
smalltalk.addMethod(
smalltalk.method({
selector: "messageItems",
category: 'not yet classified',
fn: function (){
var self=this;
var messages;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $MessageItem(){return smalltalk.MessageItem||(typeof MessageItem=="undefined"?nil:MessageItem)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3,$5,$7,$6,$8,$9;
$1=_st($Array())._new();
$ctx1.sendIdx["new"]=1;
$2=$1;
$4=_st($MessageItem())._new();
$ctx1.sendIdx["new"]=2;
$3=_st($4)._message_("Message 1");
$ctx1.sendIdx["message:"]=1;
_st($2)._add_($3);
$ctx1.sendIdx["add:"]=1;
$5=$1;
$7=_st($MessageItem())._new();
$ctx1.sendIdx["new"]=3;
$6=_st($7)._message_("Message 2");
$ctx1.sendIdx["message:"]=2;
_st($5)._add_($6);
$ctx1.sendIdx["add:"]=2;
_st($1)._add_(_st(_st($MessageItem())._new())._message_("Message 3"));
$8=_st($1)._yourself();
messages=$8;
$9=messages;
return $9;
}, function($ctx1) {$ctx1.fill(self,"messageItems",{messages:messages},smalltalk.MessageCollection)})},
args: [],
source: "messageItems\x0a\x09|messages|\x0a\x09\x22TODO should we use Set or Array\x22\x0a\x09messages := Array new add: (MessageItem new message: 'Message 1'); add: (MessageItem new message: 'Message 2'); add: (MessageItem new message: 'Message 3'); yourself.\x0a\x09^ messages",
messageSends: ["add:", "new", "message:", "yourself"],
referencedClasses: ["Array", "MessageItem"]
}),
smalltalk.MessageCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.MessageCollection)})},
args: [],
source: "title\x0a\x09^ title",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=value;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{value:value},smalltalk.MessageCollection)})},
args: ["value"],
source: "title: value\x0a\x09title := value.",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageCollection);



smalltalk.addClass('MessageCollectionView', smalltalk.Widget, ['messageCollection', 'messageCollectionPlaceholder', 'messageCollectionPlaceholderBody', 'viewDomElement'], 'AppMessages');
smalltalk.MessageCollectionView.comment="Message colletion view\x0a\x0aPlay with it in the Workspace:\x0a\x0a\x09|c cView|\x0a\x09c := MessageCollection new title: 'My messages'.\x0a\x09cView := MessageCollectionView new messageCollection: c.\x0a\x09cView appendToJQuery: '#container' asJQuery.";
smalltalk.addMethod(
smalltalk.method({
selector: "addMessageItemView:",
category: 'not yet classified',
fn: function (aMessageItemView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@messageCollectionPlaceholder"])._with_(aMessageItemView);
return self}, function($ctx1) {$ctx1.fill(self,"addMessageItemView:",{aMessageItemView:aMessageItemView},smalltalk.MessageCollectionView)})},
args: ["aMessageItemView"],
source: "addMessageItemView: aMessageItemView\x0a\x09messageCollectionPlaceholder with: aMessageItemView",
messageSends: ["with:"],
referencedClasses: []
}),
smalltalk.MessageCollectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "messageCollection:",
category: 'not yet classified',
fn: function (aMessageCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@messageCollection"]=aMessageCollection;
return self}, function($ctx1) {$ctx1.fill(self,"messageCollection:",{aMessageCollection:aMessageCollection},smalltalk.MessageCollectionView)})},
args: ["aMessageCollection"],
source: "messageCollection: aMessageCollection\x0a\x09messageCollection := aMessageCollection.",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageCollectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromDom",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@viewDomElement"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeFromDom",{},smalltalk.MessageCollectionView)})},
args: [],
source: "removeFromDom\x0a\x09viewDomElement asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.MessageCollectionView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
function $MessageItemView(){return smalltalk.MessageItemView||(typeof MessageItemView=="undefined"?nil:MessageItemView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
self["@viewDomElement"]=_st(html)._div_((function(){
return smalltalk.withContext(function($ctx2) {
_st(html)._h2_(_st(_st(self["@messageCollection"])._title())._capitalized());
$1=_st(html)._table();
_st($1)._class_("table table-condensed");
$2=_st($1)._with_((function(){
return smalltalk.withContext(function($ctx3) {
_st(_st(html)._thead())._with_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx5) {
$3=_st(html)._th();
$ctx5.sendIdx["th"]=1;
_st($3)._with_("Num");
$ctx5.sendIdx["with:"]=4;
return _st(_st(html)._th())._with_("Message");
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)})}));
$ctx4.sendIdx["with:"]=3;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
$ctx3.sendIdx["with:"]=2;
self["@messageCollectionPlaceholder"]=_st(html)._tbody();
return self["@messageCollectionPlaceholder"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=1;
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st(_st(self["@messageCollection"])._messageItems())._do_((function(item){
return smalltalk.withContext(function($ctx2) {
return self._addMessageItemView_(_st(_st($MessageItemView())._new())._messageItem_(item));
}, function($ctx2) {$ctx2.fillBlock({item:item},$ctx1,5)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MessageCollectionView)})},
args: ["html"],
source: "renderOn: html        \x0a\x09viewDomElement := html div: [\x0a\x0a\x09\x09html h2: messageCollection title capitalized.\x0a\x09\x09\x09\x09\x0a\x09\x09html table class: 'table table-condensed'; with: [\x0a\x09\x09\x09html thead with: [\x0a\x09\x09\x09\x09html tr with: [\x0a\x09\x09\x09\x09        html th with: 'Num'.\x0a\x09\x09\x09\x09\x09html th with: 'Message'.\x0a\x09\x09\x09\x09].\x0a\x09\x09\x09].\x09\x09\x0a\x09\x09\x09messageCollectionPlaceholder := html tbody.\x0a\x0a\x09\x09].\x0a\x09].        \x0a\x09\x22TODO: how to do this inside the messageCollectionPlaceholder := html tbody.\x22\x0a\x09messageCollection messageItems do: [:item | \x0a\x09    self addMessageItemView: (MessageItemView new messageItem: item).\x09    \x0a\x09].",
messageSends: ["div:", "h2:", "capitalized", "title", "class:", "table", "with:", "thead", "tr", "th", "tbody", "do:", "messageItems", "addMessageItemView:", "messageItem:", "new"],
referencedClasses: ["MessageItemView"]
}),
smalltalk.MessageCollectionView);



smalltalk.addClass('MessageItem', smalltalk.Object, ['message'], 'AppMessages');
smalltalk.MessageItem.comment="A message item - simply do not name it Message because there is already a kernel Object with that name ...\x0a\x0aA message can be played around with in the workspace like:\x0a\x0a\x09|m|\x0a\x09m := MessageItem new message: 'Message 1'.\x0a\x09m message.";
smalltalk.addMethod(
smalltalk.method({
selector: "message",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@message"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"message",{},smalltalk.MessageItem)})},
args: [],
source: "message\x0a\x09^ message",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageItem);

smalltalk.addMethod(
smalltalk.method({
selector: "message:",
category: 'accessing',
fn: function (value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@message"]=value;
return self}, function($ctx1) {$ctx1.fill(self,"message:",{value:value},smalltalk.MessageItem)})},
args: ["value"],
source: "message: value\x0a\x09message := value.",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageItem);



smalltalk.addClass('MessageItemView', smalltalk.Widget, ['messageItem', 'viewDomElement', 'messagePlaceholder'], 'AppMessages');
smalltalk.MessageItemView.comment="Message Item View\x0a\x0aIts possible to play with the view and show in the dom through the Workspace:\x0a\x0a\x09|items m mView|\x0a\x09items := App new messageItems.\x0a\x09m := items at:2. \x0a\x09mView := MessageItemView new messageItem: m.\x0a\x09mView appendToJQuery: '#container' asJQuery.\x0a\x09\x22lets update item 2 with a new message\x22\x0a\x09m message: 'Message 2 adjusted'. \x0a\x09mView refresh.\x0a\x09\x22lets remove item from dom - well might be a bit cumbersome in the Workspace\x22  \x0a\x09mView removeFromDom.";
smalltalk.addMethod(
smalltalk.method({
selector: "messageItem:",
category: 'not yet classified',
fn: function (aMessageItem){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@messageItem"]=aMessageItem;
return self}, function($ctx1) {$ctx1.fill(self,"messageItem:",{aMessageItem:aMessageItem},smalltalk.MessageItemView)})},
args: ["aMessageItem"],
source: "messageItem: aMessageItem\x0a\x09messageItem := aMessageItem",
messageSends: [],
referencedClasses: []
}),
smalltalk.MessageItemView);

smalltalk.addMethod(
smalltalk.method({
selector: "refresh",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@messagePlaceholder"];
_st($1)._empty();
$2=_st($1)._with_(_st(self["@messageItem"])._message());
return self}, function($ctx1) {$ctx1.fill(self,"refresh",{},smalltalk.MessageItemView)})},
args: [],
source: "refresh\x0a\x09messagePlaceholder empty; with: messageItem message",
messageSends: ["empty", "with:", "message"],
referencedClasses: []
}),
smalltalk.MessageItemView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFromDom",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@viewDomElement"])._asJQuery())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeFromDom",{},smalltalk.MessageItemView)})},
args: [],
source: "removeFromDom\x0a\x09viewDomElement asJQuery remove",
messageSends: ["remove", "asJQuery"],
referencedClasses: []
}),
smalltalk.MessageItemView);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@viewDomElement"]=_st(_st(html)._tr())._with_((function(){
return smalltalk.withContext(function($ctx2) {
self["@messagePlaceholder"]=_st(html)._with_((function(){
return smalltalk.withContext(function($ctx3) {
$1=_st(html)._td();
$ctx3.sendIdx["td"]=1;
_st($1)._with_("0");
$ctx3.sendIdx["with:"]=3;
return _st(_st(html)._td())._with_(_st(self["@messageItem"])._message());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
$ctx2.sendIdx["with:"]=2;
return self["@messagePlaceholder"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=1;
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.MessageItemView)})},
args: ["html"],
source: "renderOn: html\x0a\x09viewDomElement := html tr with: [\x0a\x09\x09messagePlaceholder := html with: [\x0a\x09\x09    html td with: '0'.\x0a\x09\x09    html td with: messageItem message.\x0a\x09\x09]\x0a\x09]",
messageSends: ["with:", "tr", "td", "message"],
referencedClasses: []
}),
smalltalk.MessageItemView);


});
