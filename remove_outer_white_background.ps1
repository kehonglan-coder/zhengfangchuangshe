Add-Type -AssemblyName System.Drawing

$inputPath = 'public/images/zhengfang-logo.png'
$outputPath = 'public/images/zhengfang-logo.png'

$img = [System.Drawing.Image]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap($img)
$out = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $bmp.Height; $y++) {
  for ($x = 0; $x -lt $bmp.Width; $x++) {
    $px = $bmp.GetPixel($x, $y)
    $isOuterWhite = ($px.A -gt 200) -and (($px.R -gt 240) -and ($px.G -gt 240) -and ($px.B -gt 240))
    if ($isOuterWhite) {
      $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 255, 255, 255))
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
Write-Host "processed $outputPath"
