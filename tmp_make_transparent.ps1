Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public/images/zhengfang-logo.png')
$bmp = New-Object System.Drawing.Bitmap($img)
for ($y = 0; $y -lt $bmp.Height; $y++) {
  for ($x = 0; $x -lt $bmp.Width; $x++) {
    $px = $bmp.GetPixel($x, $y)
    $isWhite = ($px.R -gt 240 -and $px.G -gt 240 -and $px.B -gt 240)
    if ($isWhite) {
      $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
    }
    else {
      $bmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($px.A, $px.R, $px.G, $px.B))
    }
  }
}
$bmp.Save('public/images/zhengfang-logo-transparent.png', [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()
Write-Host 'saved'
