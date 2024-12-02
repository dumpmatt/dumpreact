Imports MySql.Data.MySqlClient

Public Class Summary

    Dim conn As New MySqlConnection("Datasource=localhost;port=3306;username=root;password=;database=admission")

    Private Sub Summary_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        LoadData()
    End Sub

    Private Sub LoadData()

        Dim passedData As DataTable = GetFilteredData("Passed")
        Dim failedData As DataTable = GetFilteredData("Failed")

        dgvPassed.DataSource = passedData
        dgvFailed.DataSource = failedData
    End Sub

    Private Function GetFilteredData(status As String) As DataTable
        Dim data As New DataTable()

        Try
            conn.Open()
            Dim cmd As New MySqlCommand("SELECT fullname, strand, status FROM userdata WHERE status = @status", conn)
            cmd.Parameters.AddWithValue("@status", status)

            Dim adapter As New MySqlDataAdapter(cmd)
            adapter.Fill(data)
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            conn.Close()
        End Try

        Return data
    End Function
End Class
