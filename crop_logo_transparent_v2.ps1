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
$rect = New-Object System.Drawing.Rectangle($left, $top, $newWidth, $newHeight)
$cropped = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$g.DrawImage($img, [System.Drawing.Rectangle]::Empty, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$cropped.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$cropped.Dispose()
Write-Host "cropped to $newWidth x $newHeight and saved to $outputPath"
