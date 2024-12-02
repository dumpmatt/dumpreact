Imports MySql.Data.MySqlClient

Public Class Register

    Dim connection As New CONNECTIONDB

    Function userdata(ByVal strand As String, ByVal fullname As String, ByVal status As String, ByVal email As String) As Boolean
        Dim cmd As New MySqlCommand("INSERT INTO `userdata`(`strand`, `fullname`, `status` , `email`) VALUES (@strand, @fullname, @status, @email)", connection.getconnection())
        cmd.Parameters.Add("@strand", MySqlDbType.VarChar).Value = strand
        cmd.Parameters.Add("@fullname", MySqlDbType.VarChar).Value = fullname
        cmd.Parameters.Add("@status", MySqlDbType.VarChar).Value = status
        cmd.Parameters.Add("@email", MySqlDbType.VarChar).Value = email


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
