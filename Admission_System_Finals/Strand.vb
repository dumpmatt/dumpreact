Public Class frmStrand

    Private Sub ComboBox1_SelectedIndexChanged(sender As Object, e As EventArgs) Handles cmbStrand.SelectedIndexChanged
        Select Case cmbStrand.SelectedIndex
            Case 0
                lblGas.Visible = False
                lblHumms.Visible = False
                lblStem.Visible = True
            Case 1
                lblGas.Visible = False
                lblStem.Visible = False
                lblHumms.Visible = True
            Case 2
                lblStem.Visible = False
                lblHumms.Visible = False
                lblGas.Visible = True
        End Select
    End Sub

    Private Sub Strand_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        cmbStrand.Items.Add("Stem")
        cmbStrand.Items.Add("HUMMS")
        cmbStrand.Items.Add("GAS")

        lblGas.Visible = False
        lblHumms.Visible = False
        lblStem.Visible = False
    End Sub

    Private Sub btnProc_Click(sender As Object, e As EventArgs) Handles btnProc.Click
        Select Case cmbStrand.SelectedIndex
            Case 0
                Me.Hide()
                frmGrds.Show()
            Case 1
                Me.Hide()
                frmGrds.Show()
            Case 2
                Me.Hide()
                frmGrds.Show()
        End Select
    End Sub
End Class