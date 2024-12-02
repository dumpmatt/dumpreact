Imports MySql.Data.MySqlClient
Public Class RegisterCode

    Dim connection As New CONNECTIONDB

    Function registerform(ByVal fname As String, ByVal mname As String, ByVal lname As String, ByVal school As String, ByVal email As String, ByVal password As String) As Boolean
        Dim query As String = "SELECT COUNT(*) FROM registration WHERE email = @email"
        Dim cmds As New MySqlCommand(query, connection.getconnection())
        cmds.Parameters.AddWithValue("@email", email)

        connection.openConnection()

        Dim exist As Boolean = Convert.ToBoolean(cmds.ExecuteScalar())
        If exist Then
            MessageBox.Show("Email already in use. Please use another email.", "Notice!", MessageBoxButtons.OK, MessageBoxIcon.Error)
            connection.closeConnection()
            Return False
        End If

        Dim cmd As New MySqlCommand("INSERT INTO `registration`(`fname`, `mname`, `lname`, `school`, `email`, `password`) VALUES (@fname, @mname, @lname, @school, @email, @password)", connection.getconnection())
        cmd.Parameters.Add("@fname", MySqlDbType.VarChar).Value = fname
        cmd.Parameters.Add("@mname", MySqlDbType.VarChar).Value = mname
        cmd.Parameters.Add("@lname", MySqlDbType.VarChar).Value = lname
        cmd.Parameters.Add("@school", MySqlDbType.VarChar).Value = school
        cmd.Parameters.Add("@email", MySqlDbType.VarChar).Value = email
        cmd.Parameters.Add("@password", MySqlDbType.VarChar).Value = password

        connection.openConnection()
        If cmd.ExecuteNonQuery() > 0 Then
            connection.closeConnection()
            Return True

        Else
            connection.closeConnection()
            Return False

        End If
    End Function


End Class

