Smalltalk createPackage: 'HelloGruntApp'!
Object subclass: #HelloGrunt
	instanceVariableNames: ''
	package: 'HelloGruntApp'!

!HelloGrunt methodsFor: 'initialization'!

initialize
	super initialize.
	
	"set up my widget"
	'#my-widget-wrapper' asJQuery empty.
	MyWidget new appendToJQuery: '#my-widget-wrapper' asJQuery.
! !

!HelloGrunt methodsFor: 'not yet classified'!

begin
	"Makes me say hello to the user."
	| msg button |
	msg := 'Hello world!!'.
	button := '#sayHelloGrunt' asJQuery.
	button click: [button after: '<p>' , msg , '</p>'].
! !

Widget subclass: #MyWidget
	instanceVariableNames: ''
	package: 'HelloGruntApp'!

!MyWidget methodsFor: 'various'!

renderOn: html

	html div with: 'my widget'.
! !

