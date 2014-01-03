Smalltalk current createPackage: 'HelloGruntApp'!
Object subclass: #HelloGrunt
	instanceVariableNames: ''
	package: 'HelloGruntApp'!

!HelloGrunt methodsFor: 'not yet classified'!

begin
"Makes me say hello to the user."

| msg button |
msg := 'Hello world!!'.
button := '#sayHelloGrunt' asJQuery.
button click: [button after: '<p>' , msg , '</p>'].
! !

