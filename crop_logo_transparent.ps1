Add-Type -AssemblyName System.Drawing
$inputPath = 'public/images/zhengfang-logo.png'
$outputPath = 'public/images/zhengfang-logo.png'

$img = [System.Drawing.Image]::FromFile($inputPath)
$width = $img.Width
$height = $img.Height

function Test-BackgroundPixel($color) {
  if ($color.A -lt 10) { return $true }
  if (($color.R -gt 240) -and ($color.G -gt 240) -and ($color.B -gt 240)) { return $true }
  return $false
}

$top = 0
while ($top -lt $height) {
  $rowIsBackground = $true
  for ($x = 0; $x -lt $width; $x++) {
    if (-not (Test-BackgroundPixel $img.GetPixel($x, $top))) {
      $rowIsBackground = $false
      break
    }
  }
  if (-not $rowIsBackground) { break }
  $top++
}

$bottom = $height - 1
while ($bottom -ge $top) {
  $rowIsBackground = $true
  for ($x = 0; $x -lt $width; $x++) {
    if (-not (Test-BackgroundPixel $img.GetPixel($x, $bottom))) {
      $rowIsBackground = $false
      break
    }
  }
  if (-not $rowIsBackground) { break }
  $bottom--
}

$left = 0
while ($left -lt $width) {
  $colIsBackground = $true
  for ($y = $top; $y -le $bottom; $y++) {
    if (-not (Test-BackgroundPixel $img.GetPixel($left, $y))) {
      $colIsBackground = $false
      break
    }
  }
  if (-not $colIsBackground) { break }
  $left++
}

$right = $width - 1
while ($right -ge $left) {
  $colIsBackground = $true
  for ($y = $top; $y -le $bottom; $y++) {
    if (-not (Test-BackgroundPixel $img.GetPixel($right, $y))) {
      $colIsBackground = $false
      break
    }
  }
  if (-not $colIsBackground) { break }
  $right--
}

$newWidth = $right - $left + 1
$newHeight = $bottom - $top + 1
$newBmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

for ($y = 0; $y -lt $newHeight; $y++) {
  for ($x = 0; $x -lt $newWidth; $x++) {
    $srcColor = $img.GetPixel($x + $left, $y + $top)
    $newBmp.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($srcColor.A, $srcColor.R, $srcColor.G, $srcColor.B))
  }
}

$newBmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$newBmp.Dispose()
Write-Host "cropped to $newWidth x $newHeight and saved to $outputPath"
