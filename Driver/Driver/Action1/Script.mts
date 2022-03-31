
'Datatable.AddSheet "Module"
'Datatable.ImportSheet "C:\Saritha\KeywordDrivenFramework\Organizer\organizer.xlsx",1,"Module"
Services.StartTransaction "tr1"

mrowcount=datatable.GetSheet("Action1").GetRowCount
msgbox mrowcount

For i = 1 To mrowcount Step 1

Datatable.SetCurrentRow(i)

Modexe=Datatable("ModuleExe","Action1")

'msgbox Modexe
If Modexe="Y" Then
   
    Modid=Datatable("ModuleID","Action1")
   
   ' msgbox Modid
   
    trowcount=datatable.GetSheet("Action2").GetRowCount
   
   ' msgbox trowcount
   
    For j=1 To trowcount Step 1
    Datatable.SetCurrentRow(j)
    If Modid=Datatable("ModuleID","Action2") and Datatable("Testcaseexe","Action2")="Y" then
    testcaseid=Datatable("TestcaseId","Action2")
    'msgbox testcaseid
           tsrowcount=Datatable.GetSheet("Action3").GetRowCount
           'msgbox tsrowcount
           
           For k=1 to tsrowcount Step 1
           	datatable.SetCurrentRow(k)
           	If testcaseid=Datatable("TestcaseId","Action3") Then
           		keyword=Datatable("Keyword","Action3")
           	'	msgbox keyword
           		
           		Select Case(keyword)
           			Case "ln"
           			Call login("john","HP")
 @@ hightlight id_;_1986601256_;_script infofile_;_ZIP::ssf16.xml_;_
           			
           			Case "ca"
           			Call closeapp()
           			
           			Case "oo"
           			Call openorder("7")
           			
           			Case "uo"
           			Call updateorder()
           			
           			Case "lnd"
           			drowcount=datatable.GetSheet("Action4").GetRowCount
 @@ hightlight id_;_1907419792_;_script infofile_;_ZIP::ssf20.xml_;_
           			For l=1 to drowcount Step 1
           				datatable.SetCurrentRow(l)
           				Call login(datatable("username","Action4"),datatable("password","Action4"))
           				Call closeapp()
           			Next
           			
           			Case "ood"
           			orrowcount=datatable.GetSheet("Action4").GetRowCount
           			For m=1 To orrowcount Step 1
           				datatable.SetCurrentRow(m)
           				Call openorder(datatable("orderno","Action4"))
           			Next
           	'	Call closeapp()


           			
           		End Select
           	End If
           Next
       
    End If
       
    Next
   
   
   
   
End If



   
   
   
   
Next


 @@ hightlight id_;_1981422528_;_script infofile_;_ZIP::ssf5.xml_;_
Services.EndTransaction "tr1"

