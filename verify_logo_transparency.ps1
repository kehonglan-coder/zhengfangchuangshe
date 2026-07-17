Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('public/images/zhengfang-logo.png')
$w = $img.Width
$h = $img.Height
$cnt = 0
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $px = $img.GetPixel($x, $y)
    if ($px.A -lt 10) {
      $cnt++
    }
  }
}
Write-Host ('transparent pixels=' + $cnt)
Write-Host ('size=' + $w + 'x' + $h)
$img.Dispose()
