Imports MySql.Data.MySqlClient

Public Class Administrator

    Dim conn As New MySqlConnection("Datasource=localhost;port=3306;username=root;password=;database=admission")
    Dim i As Integer

    Private Sub Administrator_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        loading()
    End Sub

    Public Sub save()
        Try
            conn.Open()
            Dim cmd As New MySqlCommand("INSERT INTO `userdata`(`fullname`, `strand`, `status`) VALUES (@fullname, @strand, @status)", conn)
            cmd.Parameters.AddWithValue("@fullname", txtFullname.Text)
            cmd.Parameters.AddWithValue("@strand", txtStrand.Text)
            cmd.Parameters.AddWithValue("@status", txtStatus.Text)

            i = cmd.ExecuteNonQuery()
            If i > 0 Then
                MessageBox.Show("Record saved")
            Else
                MessageBox.Show("Record save failed")
            End If
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            conn.Close()
        End Try
        clear()
        loading()
    End Sub

    Public Sub loading()
        DataGridView1.Rows.Clear()
        Dim dr As MySqlDataReader

        Try
            conn.Open()
            Dim cmd As New MySqlCommand("SELECT * FROM userdata", conn)
            dr = cmd.ExecuteReader
            While dr.Read
                DataGridView1.Rows.Add(dr.Item("fullname"), dr.Item("strand"), dr.Item("status"))
            End While
            dr.Dispose()
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            conn.Close()
        End Try
    End Sub

    Public Sub clear()
        txtStrand.Text = ""
        txtFullname.Text = ""
        txtStatus.Text = ""
    End Sub

    Public Sub delete()
        If MsgBox("Are you sure you want to delete this record?", MsgBoxStyle.Question + vbYesNo) = vbYes Then
            Try
                conn.Open()
                Dim cmd As New MySqlCommand("DELETE FROM `userdata` WHERE `fullname`=@fullname", conn)
                cmd.Parameters.AddWithValue("@fullname", DataGridView1.CurrentRow.Cells(0).Value)

                i = cmd.ExecuteNonQuery
                If i > 0 Then
                    MessageBox.Show("Record deleted")
                Else
                    MessageBox.Show("Record delete failed")
                End If
            Catch ex As Exception
                MsgBox(ex.Message)
            Finally
                conn.Close()
            End Try
            clear()
            loading()
        Else
            Return
        End If
    End Sub

    Private Sub btnSave_Click(sender As Object, e As EventArgs) Handles btnSave.Click
        save()
    End Sub

    Private Sub DataGridView1_CellClick(sender As Object, e As DataGridViewCellEventArgs) Handles DataGridView1.CellClick
        If e.RowIndex >= 0 Then ' Ensure a valid row index is selected
            txtFullname.Text = DataGridView1.Rows(e.RowIndex).Cells(0).Value.ToString()
            txtStrand.Text = DataGridView1.Rows(e.RowIndex).Cells(1).Value.ToString()
            txtStatus.Text = DataGridView1.Rows(e.RowIndex).Cells(2).Value.ToString()

            txtStrand.Enabled = False
            txtFullname.ReadOnly = True
            btnSave.Enabled = False
        End If
    End Sub

    Sub edit()
        Try
            conn.Open()
            Dim cmd As New MySqlCommand("UPDATE `userdata` SET `status`=@status WHERE `fullname`=@fullname", conn)
            cmd.Parameters.Clear()
            cmd.Parameters.AddWithValue("@fullname", txtFullname.Text)
            cmd.Parameters.AddWithValue("@status", txtStatus.Text)

            i = cmd.ExecuteNonQuery
            If i > 0 Then
                MessageBox.Show("Record updated")
            Else
                MessageBox.Show("Record update failed")
            End If
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            conn.Close()
        End Try
        clear()
        loading()
    End Sub

    Private Sub btnUpdate_Click(sender As Object, e As EventArgs) Handles btnUpdate.Click
        edit()
    End Sub

    Private Sub btnDel_Click(sender As Object, e As EventArgs) Handles btnDel.Click
        delete()
    End Sub

    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
        clear()
        txtStrand.Enabled = True
        txtFullname.ReadOnly = False
        btnSave.Enabled = True
    End Sub

    Private Sub txtSearch_TextChanged(sender As Object, e As EventArgs) Handles txtSearch.TextChanged
        DataGridView1.Rows.Clear()
        Dim dr As MySqlDataReader

        Try
            conn.Open()
            Dim cmd As New MySqlCommand("SELECT * FROM userdata WHERE fullname like '%" & txtSearch.Text & "%'", conn)
            dr = cmd.ExecuteReader
            While dr.Read
                DataGridView1.Rows.Add(dr.Item("fullname"), dr.Item("strand"), dr.Item("status"))
            End While
            dr.Dispose()
        Catch ex As Exception
            MsgBox(ex.Message)
        Finally
            conn.Close()
        End Try
    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Me.Hide()
        Summary.Show()
    End Sub
End Class
