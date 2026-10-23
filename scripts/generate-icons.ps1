Add-Type -AssemblyName System.Drawing

$sizes = @(192, 512)
foreach ($sz in $sizes) {
    $bmp = New-Object System.Drawing.Bitmap $sz, $sz
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    
    $bgBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#1A2433'))
    $g.FillRectangle($bgBrush, 0, 0, $sz, $sz)
    
    $orangeBrush = New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml('#F26522'))
    $scale = $sz / 64.0
    
    # Desenhar 'H'
    $x1 = [int](16 * $scale)
    $x2 = [int](40 * $scale)
    $y1 = [int](18 * $scale)
    $w = [int](8 * $scale)
    $h = [int](28 * $scale)
    $g.FillRectangle($orangeBrush, $x1, $y1, $w, $h)
    $g.FillRectangle($orangeBrush, $x2, $y1, $w, $h)
    $g.FillRectangle($orangeBrush, [int](24 * $scale), [int](28 * $scale), [int](16 * $scale), [int](8 * $scale))
    
    $targetPath = "public\icons\icon-$sz" + "x$sz.png"
    $bmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
}

Copy-Item "public\icons\icon-192x192.png" "public\icons\apple-touch-icon.png"
Write-Host "PWA PNG icons generated successfully."
