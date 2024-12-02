Imports MySql.Data.MySqlClient


Public Class frmGrds

    Dim registercodes As New Register
    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        Application.Exit()
    End Sub

    Private Sub btnSubmit_Click(sender As Object, e As EventArgs) Handles btnSubmit.Click
        Dim chose As String = txtStrand.Text
        Dim newname As String = txtFname.Text
        Dim stat As String = lblStatus.Text

        Dim database_Connection As New MySqlConnection("datasource=localhost; port=3306; username=root; password=; database=admission;")

        database_Connection.Open()

        Dim getEmailFname As String = "SELECT email From registration Where fname = @txtNewname"
        Dim getEmailLname As String = "SELECT email From registration Where lname = @txtLname"

        Dim command As New MySqlCommand(getEmailFname, database_Connection)
        command.Parameters.AddWithValue("@txtNewname", txtFname.Text)

        Dim commandLname As New MySqlCommand(getEmailLname, database_Connection)
        commandLname.Parameters.AddWithValue("@txtLname", txtLastname.Text)

        Dim myemail As String = Convert.ToString(command.ExecuteScalar())
        Dim myemail2 As String = Convert.ToString(commandLname.ExecuteScalar())



        If newname = "" Then
            MessageBox.Show("Fill up all forms", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf chose = "" Then
            MessageBox.Show("Fill up all forms", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        ElseIf stat = "" Then
            MessageBox.Show("Fill up all forms", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
        Else

            If myemail = myemail2 Then

                If registercodes.userdata(chose, newname, stat, myemail) Then
                    MessageBox.Show("Fill up completed!", "Note!", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)

                End If
            End If
        End If
        Me.Hide()
        EndSystem.Show()
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        If txtGrade.Text >= 90 Then
            lblStatus.Text = "Passed"
        Else
            lblStatus.Text = "Failed"
        End If
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        txtFname.Text = ""
        txtLastname.Text = ""
        txtGrade.Text = ""
    End Sub
End Class