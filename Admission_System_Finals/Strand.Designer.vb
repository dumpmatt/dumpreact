<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class frmStrand
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
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
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Dim resources As System.ComponentModel.ComponentResourceManager = New System.ComponentModel.ComponentResourceManager(GetType(frmStrand))
        Me.PictureBox1 = New System.Windows.Forms.PictureBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.cmbStrand = New System.Windows.Forms.ComboBox()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.lblStem = New System.Windows.Forms.Label()
        Me.lblHumms = New System.Windows.Forms.Label()
        Me.lblGas = New System.Windows.Forms.Label()
        Me.btnProc = New System.Windows.Forms.Button()
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).BeginInit()
        Me.SuspendLayout()
        '
        'PictureBox1
        '
        Me.PictureBox1.Image = CType(resources.GetObject("PictureBox1.Image"), System.Drawing.Image)
        Me.PictureBox1.Location = New System.Drawing.Point(0, -2)
        Me.PictureBox1.Margin = New System.Windows.Forms.Padding(4)
        Me.PictureBox1.Name = "PictureBox1"
        Me.PictureBox1.Size = New System.Drawing.Size(1156, 148)
        Me.PictureBox1.SizeMode = System.Windows.Forms.PictureBoxSizeMode.StretchImage
        Me.PictureBox1.TabIndex = 4
        Me.PictureBox1.TabStop = False
        '
        'Label2
        '
        Me.Label2.BackColor = System.Drawing.Color.MidnightBlue
        Me.Label2.Font = New System.Drawing.Font("Microsoft Sans Serif", 11.25!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label2.Location = New System.Drawing.Point(1, 144)
        Me.Label2.Margin = New System.Windows.Forms.Padding(4, 0, 4, 0)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(1067, 410)
        Me.Label2.TabIndex = 5
        '
        'cmbStrand
        '
        Me.cmbStrand.Font = New System.Drawing.Font("Microsoft Sans Serif", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.cmbStrand.FormattingEnabled = True
        Me.cmbStrand.Location = New System.Drawing.Point(13, 206)
        Me.cmbStrand.Margin = New System.Windows.Forms.Padding(4)
        Me.cmbStrand.Name = "cmbStrand"
        Me.cmbStrand.Size = New System.Drawing.Size(355, 33)
        Me.cmbStrand.TabIndex = 21
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.BackColor = System.Drawing.Color.MidnightBlue
        Me.Label3.Font = New System.Drawing.Font("Impact", 18.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label3.ForeColor = System.Drawing.SystemColors.ControlLight
        Me.Label3.Location = New System.Drawing.Point(17, 156)
        Me.Label3.Margin = New System.Windows.Forms.Padding(4, 0, 4, 0)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(201, 37)
        Me.Label3.TabIndex = 23
        Me.Label3.Text = "Choose strand:" & Global.Microsoft.VisualBasic.ChrW(13) & Global.Microsoft.VisualBasic.ChrW(10)
        '
        'lblStem
        '
        Me.lblStem.AutoSize = True
        Me.lblStem.BackColor = System.Drawing.Color.MidnightBlue
        Me.lblStem.Font = New System.Drawing.Font("Arial Narrow", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblStem.ForeColor = System.Drawing.SystemColors.ControlLight
        Me.lblStem.Location = New System.Drawing.Point(14, 263)
        Me.lblStem.Margin = New System.Windows.Forms.Padding(4, 0, 4, 0)
        Me.lblStem.Name = "lblStem"
        Me.lblStem.Size = New System.Drawing.Size(793, 264)
        Me.lblStem.TabIndex = 0
        Me.lblStem.Text = resources.GetString("lblStem.Text")
        '
        'lblHumms
        '
        Me.lblHumms.AutoSize = True
        Me.lblHumms.BackColor = System.Drawing.Color.MidnightBlue
        Me.lblHumms.Font = New System.Drawing.Font("Arial Narrow", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblHumms.ForeColor = System.Drawing.SystemColors.ControlLight
        Me.lblHumms.Location = New System.Drawing.Point(20, 263)
        Me.lblHumms.Margin = New System.Windows.Forms.Padding(4, 0, 4, 0)
        Me.lblHumms.Name = "lblHumms"
        Me.lblHumms.Size = New System.Drawing.Size(793, 264)
        Me.lblHumms.TabIndex = 24
        Me.lblHumms.Text = resources.GetString("lblHumms.Text")
        '
        'lblGas
        '
        Me.lblGas.AutoSize = True
        Me.lblGas.BackColor = System.Drawing.Color.MidnightBlue
        Me.lblGas.Font = New System.Drawing.Font("Arial Narrow", 12.0!, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblGas.ForeColor = System.Drawing.SystemColors.ControlLight
        Me.lblGas.Location = New System.Drawing.Point(29, 263)
        Me.lblGas.Margin = New System.Windows.Forms.Padding(4, 0, 4, 0)
        Me.lblGas.Name = "lblGas"
        Me.lblGas.Size = New System.Drawing.Size(793, 264)
        Me.lblGas.TabIndex = 25
        Me.lblGas.Text = resources.GetString("lblGas.Text")
        '
        'btnProc
        '
        Me.btnProc.Font = New System.Drawing.Font("Arial Narrow", 12.0!, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnProc.ForeColor = System.Drawing.Color.MidnightBlue
        Me.btnProc.Location = New System.Drawing.Point(939, 510)
        Me.btnProc.Name = "btnProc"
        Me.btnProc.Size = New System.Drawing.Size(103, 32)
        Me.btnProc.TabIndex = 26
        Me.btnProc.Text = "Proceed"
        Me.btnProc.UseVisualStyleBackColor = True
        '
        'frmStrand
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(8.0!, 16.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(1067, 554)
        Me.Controls.Add(Me.btnProc)
        Me.Controls.Add(Me.lblGas)
        Me.Controls.Add(Me.lblHumms)
        Me.Controls.Add(Me.lblStem)
        Me.Controls.Add(Me.cmbStrand)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.PictureBox1)
        Me.Margin = New System.Windows.Forms.Padding(4)
        Me.Name = "frmStrand"
        Me.Text = "Form2"
        CType(Me.PictureBox1, System.ComponentModel.ISupportInitialize).EndInit()
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents PictureBox1 As PictureBox
    Friend WithEvents Label2 As Label
    Friend WithEvents cmbStrand As ComboBox
    Friend WithEvents Label3 As Label
    Friend WithEvents lblStem As Label
    Friend WithEvents lblHumms As Label
    Friend WithEvents lblGas As Label
    Friend WithEvents btnProc As Button
End Class
