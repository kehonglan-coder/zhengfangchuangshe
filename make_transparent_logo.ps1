Add-Type -AssemblyName System.Drawing

$inputPath = 'public/images/zhengfang-logo.png'
$outputPath = 'public/images/zhengfang-logo-clean.png'

$img = [System.Drawing.Image]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$out = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $bmp.Height; $y++) {
  for ($x = 0; $x -lt $bmp.Width; $x++) {
    $px = $bmp.GetPixel($x, $y)
    $isBackground = ($px.A -lt 10) -or (($px.R -gt 240) -and ($px.G -gt 240) -and ($px.B -gt 240))
    if ($isBackground) {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $px.R, $px.G, $px.B))
    }
    else {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($px.A, $px.R, $px.G, $px.B))
    }
  }
}

$out.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()
$out.Dispose()
Write-Host "saved to $outputPath"
