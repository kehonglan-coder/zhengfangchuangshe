Add-Type -AssemblyName System.Drawing

$inputPath = 'public/images/logo-final.png'
$tempOutputPath = 'public/images/logo-final-cropped.png'
$finalOutputPath = 'public/images/logo-final.png'

$img = [System.Drawing.Image]::FromFile($inputPath)
$src = New-Object System.Drawing.Bitmap($img)

$width = $src.Width
$height = $src.Height

function Test-VisiblePixel($color) {
  if ($color.A -lt 10) {
    return $false
  }
  return $true
}

$top = 0
while ($top -lt $height) {
  $hasVisible = $false
  for ($x = 0; $x -lt $width; $x++) {
    $pixel = $src.GetPixel($x, $top)
    if (Test-VisiblePixel $pixel) {
      $hasVisible = $true
      break
    }
  }
  if ($hasVisible) { break }
  $top++
}

$bottom = $height - 1
while ($bottom -ge $top) {
  $hasVisible = $false
  for ($x = 0; $x -lt $width; $x++) {
    $pixel = $src.GetPixel($x, $bottom)
    if (Test-VisiblePixel $pixel) {
      $hasVisible = $true
      break
    }
  }
  if ($hasVisible) { break }
  $bottom--
}

$left = 0
while ($left -lt $width) {
  $hasVisible = $false
  for ($y = $top; $y -le $bottom; $y++) {
    $pixel = $src.GetPixel($left, $y)
    if (Test-VisiblePixel $pixel) {
      $hasVisible = $true
      break
    }
  }
  if ($hasVisible) { break }
  $left++
}

$right = $width - 1
while ($right -ge $left) {
  $hasVisible = $false
  for ($y = $top; $y -le $bottom; $y++) {
    $pixel = $src.GetPixel($right, $y)
    if (Test-VisiblePixel $pixel) {
      $hasVisible = $true
      break
    }
  }
  if ($hasVisible) { break }
  $right--
}

$newWidth = $right - $left + 1
$newHeight = $bottom - $top + 1
$cropped = New-Object System.Drawing.Bitmap($newWidth, $newHeight, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropped)
$rect = New-Object System.Drawing.Rectangle($left, $top, $newWidth, $newHeight)
$g.DrawImage($src, [System.Drawing.Rectangle]::Empty, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$cropped.Save($tempOutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$src.Dispose()
$cropped.Dispose()
Copy-Item $tempOutputPath $finalOutputPath -Force
Write-Host "cropped to $newWidth x $newHeight and saved to $finalOutputPath"
