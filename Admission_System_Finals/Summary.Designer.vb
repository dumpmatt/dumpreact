<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Summary
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.dgvPassed = New System.Windows.Forms.DataGridView()
        Me.dgvFailed = New System.Windows.Forms.DataGridView()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        CType(Me.dgvPassed, System.ComponentModel.ISupportInitialize).BeginInit()
        CType(Me.dgvFailed, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'dgvPassed
        '
        Me.dgvPassed.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvPassed.Location = New System.Drawing.Point(86, 194)
        Me.dgvPassed.Name = "dgvPassed"
        Me.dgvPassed.RowHeadersVisible = False
        Me.dgvPassed.RowHeadersWidth = 51
        Me.dgvPassed.RowTemplate.Height = 24
        Me.dgvPassed.Size = New System.Drawing.Size(413, 385)
        Me.dgvPassed.TabIndex = 0
        '
        'dgvFailed
        '
        Me.dgvFailed.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize
        Me.dgvFailed.Location = New System.Drawing.Point(582, 194)
        Me.dgvFailed.Name = "dgvFailed"
        Me.dgvFailed.RowHeadersVisible = False
        Me.dgvFailed.RowHeadersWidth = 51
        Me.dgvFailed.RowTemplate.Height = 24
        Me.dgvFailed.Size = New System.Drawing.Size(413, 385)
        Me.dgvFailed.TabIndex = 1
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Microsoft Sans Serif", 16.2!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.Location = New System.Drawing.Point(449, 36)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(165, 32)
        Me.Label1.TabIndex = 2
        Me.Label1.Text = "SUMMARY"
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Location = New System.Drawing.Point(83, 164)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(115, 17)
        Me.Label2.TabIndex = 3
        Me.Label2.Text = "Passed Students"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Location = New System.Drawing.Point(579, 164)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(106, 17)
        Me.Label3.TabIndex = 4
        Me.Label3.Text = "Failed Students"
        '
        'Summary
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1058, 627)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.dgvFailed)
        Me.Controls.Add(Me.dgvPassed)
        Me.Name = "Summary"
        Me.Text = "Summary"
        CType(Me.dgvPassed, System.ComponentModel.ISupportInitialize).EndInit()
        CType(Me.dgvFailed, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents dgvPassed As DataGridView
    Friend WithEvents dgvFailed As DataGridView
    Friend WithEvents Label1 As Label
    Friend WithEvents Label2 As Label
    Friend WithEvents Label3 As Label
End Class
