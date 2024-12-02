Public Class frmReg

    Dim registercode As New RegisterCode

    Private Sub Button2_Click(sender As Object, e As EventArgs)
        frmGrds.Show()
        Me.Hide()
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        Me.Hide()
        Main.Show()
    End Sub

    Private Sub Button2_Click_1(sender As Object, e As EventArgs) Handles Button2.Click
        Dim fullname As String = txtFname.Text
        Dim middlename As String = txtMname.Text
        Dim lastname As String = txtLname.Text
        Dim school As String = txtSchool.Text
        Dim email As String = txtEmail.Text
        Dim password As String = txtPass.Text

        If fullname = "" Then
            MessageBox.Show("Fill up all fields", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf lastname = "" Then
            MessageBox.Show("Fill up all fields", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf school = "" Then
            MessageBox.Show("Fill up all fields", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf email = "" Then
            MessageBox.Show("Fill up all fields", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf password = "" Then
            MessageBox.Show("Fill up all fields", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf Not DomainEmail(email) Then
            MessageBox.Show("Please enter a valid domain address with @gmail.com or @yahoo.com", "Register", MessageBoxButtons.OK, MessageBoxIcon.Error)
        Else
            If registercode.registerform(fullname, middlename, lastname, school, email, password) Then
                MessageBox.Show("Register is completed", "Register", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
                Me.Hide()
                frmLogin.Show()
            End If
        End If
    End Sub

    Private Function DomainEmail(email As String) As Boolean
        Dim valid() As String = {"@gmail.com", "@yahoo.com"}
        For Each domain As String In valid
            If email.EndsWith(domain, StringComparison.OrdinalIgnoreCase) Then
                Return True
            End If
        Next
        Return False
    End Function
End Class