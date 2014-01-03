Smalltalk current createPackage: 'AppMessages'!
Object subclass: #App
	instanceVariableNames: 'mainView'
	package: 'AppMessages'!
!App commentStamp!
App Messages

Play around with App in the Workspace

	App new messageItems!

!App methodsFor: 'not yet classified'!

buildUI
	'#container' asJQuery empty.
	mainView := MainView new.
	mainView appendToJQuery: '#container' asJQuery.
!

mainView
	^ mainView

! !

App class instanceVariableNames: 'instance'!

!App class methodsFor: 'accessing'!

instance
	^ instance
! !

!App class methodsFor: 'bootstrapping'!

begin
	instance := self new.
	instance buildUI.
! !

Widget subclass: #MainView
	instanceVariableNames: 'tagBrush messageCollectionView'
	package: 'AppMessages'!

!MainView methodsFor: 'not yet classified'!

initialize
    messageCollectionView := MessageCollectionView new messageCollection: (MessageCollection new title: 'All messages').

!

renderOn: html
	tagBrush := html.	
	html div id: 'ui'; with: messageCollectionView.
! !

Object subclass: #MessageItem
	instanceVariableNames: 'message'
	package: 'AppMessages'!
!MessageItem commentStamp!
A message item - simply do not name it Message because there is already a kernel Object with that name ...

A message can be played around with in the workspace like:

	|m|
	m := MessageItem new message: 'Message 1'.
	m message.!

!MessageItem methodsFor: 'accessing'!

message
	^ message
!

message: value
	message := value.
! !

Object subclass: #MessageCollection
	instanceVariableNames: 'messageItems title'
	package: 'AppMessages'!

!MessageCollection methodsFor: 'not yet classified'!

messageItems
	|messages|
	"TODO should we use Set or Array"
	messages := Array new add: (MessageItem new message: 'Message 1'); add: (MessageItem new message: 'Message 2'); add: (MessageItem new message: 'Message 3'); yourself.
	^ messages
! !

!MessageCollection methodsFor: 'accessing'!

title
	^ title
!

title: value
	title := value.

! !

Widget subclass: #MessageCollectionView
	instanceVariableNames: 'messageCollection messageCollectionPlaceholder messageCollectionPlaceholderBody viewDomElement'
	package: 'AppMessages'!
!MessageCollectionView commentStamp!
Message colletion view

Play with it in the Workspace:

	|c cView|
	c := MessageCollection new title: 'My messages'.
	cView := MessageCollectionView new messageCollection: c.
	cView appendToJQuery: '#container' asJQuery.!

!MessageCollectionView methodsFor: 'not yet classified'!


addMessageItemView: aMessageItemView
	messageCollectionPlaceholder with: aMessageItemView
!

messageCollection: aMessageCollection
	messageCollection := aMessageCollection.
!

removeFromDom
	viewDomElement asJQuery remove
!

renderOn: html        
	viewDomElement := html div: [

		html h2: messageCollection title capitalized.
				
		html table class: 'table table-condensed'; with: [
			html thead with: [
				html tr with: [
				        html th with: 'Num'.
					html th with: 'Message'.
				].
			].		
			messageCollectionPlaceholder := html tbody.

		].
	].        
	"TODO: how to do this inside the messageCollectionPlaceholder := html tbody."
	messageCollection messageItems do: [:item | 
	    self addMessageItemView: (MessageItemView new messageItem: item).	    
	].

! !

Widget subclass: #MessageItemView
	instanceVariableNames: 'messageItem viewDomElement messagePlaceholder'
	package: 'AppMessages'!
!MessageItemView commentStamp!
Message Item View

Its possible to play with the view and show in the dom through the Workspace:

	|items m mView|
	items := App new messageItems.
	m := items at:2. 
	mView := MessageItemView new messageItem: m.
	mView appendToJQuery: '#container' asJQuery.
	"lets update item 2 with a new message"
	m message: 'Message 2 adjusted'. 
	mView refresh.
	"lets remove item from dom - well might be a bit cumbersome in the Workspace"  
	mView removeFromDom.!

!MessageItemView methodsFor: 'not yet classified'!

messageItem: aMessageItem
	messageItem := aMessageItem
!

refresh
	messagePlaceholder empty; with: messageItem message
!

removeFromDom
	viewDomElement asJQuery remove
!

renderOn: html
	viewDomElement := html tr with: [
		messagePlaceholder := html with: [
		    html td with: '0'.
		    html td with: messageItem message.
		]
	]
! !

