Imports MySql.Data.MySqlClient
Public Class frmLogin
    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        Dim connection As New CONNECTIONDB
        Dim da As New MySqlDataAdapter
        Dim cmd As New MySqlCommand
        Dim dt As New DataTable

        Dim email As String = txtEmail.Text
        Dim password As String = txtPassword.Text

        cmd.CommandText = "SELECT * FROM `registration` WHERE `Email`=@email AND `Password`=@password"
        cmd.Connection = connection.getconnection
        cmd.Parameters.Add("@email", MySqlDbType.VarChar).Value = email
        cmd.Parameters.Add("@password", MySqlDbType.VarChar).Value = password
        da.SelectCommand = cmd
        da.Fill(dt)


        If (email = "admin" AndAlso password = "administratoronly") Then
            Me.Hide()
            Administrator.Show()
        ElseIf dt.Rows.Count > 0 Then
            MessageBox.Show("Login Completed", "Login", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
            txtEmail.Text = ""
            txtPassword.Text = ""
            Me.Hide()
            frmGrds.Show()
        Else
                MessageBox.Show("Login Failed", "Login", MessageBoxButtons.OK, MessageBoxIcon.Exclamation)
            txtEmail.Text = ""
            txtPassword.Text = ""
        End If
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        Application.Exit()
    End Sub

    Private Sub btnReg_Click(sender As Object, e As EventArgs) Handles btnReg.Click
        Me.Hide()
        frmReg.Show()
    End Sub

    Private Sub CheckBox1_CheckedChanged(sender As Object, e As EventArgs) Handles cbShow.CheckedChanged
        If cbShow.Checked Then
            txtPassword.PasswordChar = ""
        Else
            txtPassword.PasswordChar = "*"
        End If
    End Sub

    Private Sub Label7_Click(sender As Object, e As EventArgs) Handles Label7.Click

    End Sub

    Private Sub Label4_Click(sender As Object, e As EventArgs) Handles Label4.Click

    End Sub

    Private Sub txtPassword_TextChanged(sender As Object, e As EventArgs) Handles txtPassword.TextChanged

    End Sub

    Private Sub txtEmail_TextChanged(sender As Object, e As EventArgs) Handles txtEmail.TextChanged

    End Sub

    Private Sub Label3_Click(sender As Object, e As EventArgs) Handles Label3.Click

    End Sub

    Private Sub Label6_Click(sender As Object, e As EventArgs) Handles Label6.Click

    End Sub
End Class