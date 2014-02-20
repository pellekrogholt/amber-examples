Smalltalk createPackage: 'HelloGruntApp'!

Object subclass: #Foo
    instanceVariableNames: ''
    package: 'HelloGruntApp'!

!Foo methodsFor: 'initialization'!

bar
    |myValue|

    myValue := 5.
    myValue + 8.
    
    "set a breakpoint example"
    self halt
!

initialize
    super initialize.
! !

Object subclass: #HelloGrunt
	instanceVariableNames: ''
	package: 'HelloGruntApp'!

!HelloGrunt methodsFor: 'initialization'!

initialize
	super initialize.

	"set up my widget"
	MyWidget new appendToJQuery: 'body' asJQuery.
	
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


    
